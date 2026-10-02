import { readFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { cousinColorPasses, cousinGroundPasses, normalizeHex } from "./shared/color-math.js";
import { isAnchorCard, validateThemeCard } from "./shared/theme-card.js";
import type { ThemePalette, ThemeVariation, VscodeThemeJson } from "./shared/types.js";
import { themeCards } from "./factory/theme-cards.js";
import {
  cardToVariation,
  getCardBySlug,
  groundSyntaxFingerprint,
  registerCards,
} from "./factory/theme-factory.js";
import { themeOutputFilename } from "./generators/vscode/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../..");
const themesDir = join(repoRoot, "extensions/lyrikai-themes/themes");
const extPackagePath = join(repoRoot, "extensions/lyrikai-themes/package.json");

registerCards(themeCards);

interface ValidationError {
  slug: string;
  message: string;
}

export interface CousinDiffFailure {
  slug: string;
  cousin: string;
  token: string;
  reason: string;
}

const COUSIN_TOKENS = ["editor.background", "accent", "syntaxFunction"] as const;

function paletteToken(palette: ThemePalette, token: (typeof COUSIN_TOKENS)[number]): string {
  switch (token) {
    case "editor.background":
      return palette.creamPaper;
    case "accent":
      return palette.accent;
    case "syntaxFunction":
      return palette.syntaxFunction;
  }
}

export function comparePalettesForCousinDiff(
  candidate: ThemePalette,
  cousin: ThemePalette,
): CousinDiffFailure[] {
  const failures: CousinDiffFailure[] = [];

  for (const token of COUSIN_TOKENS) {
    const a = paletteToken(candidate, token);
    const b = paletteToken(cousin, token);

    if (normalizeHex(a) === normalizeHex(b)) {
      failures.push({
        slug: "candidate",
        cousin: "cousin",
        token,
        reason: `${token}: verbatim hex copy`,
      });
      continue;
    }

    const passes =
      token === "editor.background" ? cousinGroundPasses(a, b) : cousinColorPasses(a, b);

    if (!passes) {
      failures.push({
        slug: "candidate",
        cousin: "cousin",
        token,
        reason: `${token}: insufficient ΔE and hue separation`,
      });
    }
  }

  return failures;
}

function checkCousinDiff(
  slug: string,
  cousinSlug: string,
  candidate: ThemePalette,
  cousin: ThemePalette,
): ValidationError[] {
  return comparePalettesForCousinDiff(candidate, cousin).map((f) => ({
    slug,
    message: `vs ${cousinSlug}: ${f.reason} (${paletteToken(candidate, f.token as (typeof COUSIN_TOKENS)[number])} vs ${paletteToken(cousin, f.token as (typeof COUSIN_TOKENS)[number])})`,
  }));
}

function checkManifest(variations: ThemeVariation[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const pkg = JSON.parse(readFileSync(extPackagePath, "utf8")) as {
    contributes: { themes: Array<{ label: string; uiTheme: string; path: string }> };
  };

  const manifest = pkg.contributes.themes;
  const slugs = new Set<string>();

  for (const v of variations) {
    if (slugs.has(v.slug)) {
      errors.push({ slug: v.slug, message: "Duplicate slug in registry" });
    }
    slugs.add(v.slug);

    const expectedPath = `./themes/${themeOutputFilename(v.slug)}`;
    const entry = manifest.find((m) => m.path === expectedPath);
    if (!entry) {
      errors.push({ slug: v.slug, message: `Missing manifest entry for ${expectedPath}` });
      continue;
    }
    if (entry.label !== v.label) {
      errors.push({
        slug: v.slug,
        message: `Manifest label mismatch: "${entry.label}" vs "${v.label}"`,
      });
    }
    if (entry.uiTheme !== v.uiTheme) {
      errors.push({
        slug: v.slug,
        message: `Manifest uiTheme mismatch: "${entry.uiTheme}" vs "${v.uiTheme}"`,
      });
    }

    const jsonPath = join(themesDir, themeOutputFilename(v.slug));
    if (!existsSync(jsonPath)) {
      errors.push({ slug: v.slug, message: `Missing JSON file: ${jsonPath}` });
    }
  }

  if (manifest.length !== variations.length) {
    errors.push({
      slug: "*",
      message: `Manifest count ${manifest.length} != registry count ${variations.length}`,
    });
  }

  return errors;
}

function checkSemanticHighlighting(variations: ThemeVariation[]): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const v of variations) {
    const jsonPath = join(themesDir, themeOutputFilename(v.slug));
    if (!existsSync(jsonPath)) {
      continue;
    }
    const theme = JSON.parse(readFileSync(jsonPath, "utf8")) as VscodeThemeJson;
    if (theme.semanticHighlighting !== true) {
      errors.push({
        slug: v.slug,
        message: `semanticHighlighting must be true (got ${String(theme.semanticHighlighting)})`,
      });
    }
  }

  return errors;
}

function checkGlobalUniqueness(variations: ThemeVariation[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const fingerprints = new Map<string, string>();

  for (const v of variations) {
    const fp = groundSyntaxFingerprint(v.palette);
    const existing = fingerprints.get(fp);
    if (existing) {
      errors.push({
        slug: v.slug,
        message: `Identical editor ground + syntax as "${existing}"`,
      });
    } else {
      fingerprints.set(fp, v.slug);
    }
  }

  return errors;
}

function validateCards(): ValidationError[] {
  const errors: ValidationError[] = [];
  const slugs = new Set<string>();

  for (const card of themeCards) {
    if (slugs.has(card.slug)) {
      errors.push({ slug: card.slug, message: "Duplicate card slug" });
    }
    slugs.add(card.slug);

    for (const msg of validateThemeCard(card)) {
      errors.push({ slug: card.slug, message: msg });
    }

    if (card.nearestCousin && !getCardBySlug(themeCards, card.nearestCousin)) {
      errors.push({
        slug: card.slug,
        message: `nearestCousin "${card.nearestCousin}" not found in cards`,
      });
    }
  }

  return errors;
}

export function runValidation(): { ok: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  errors.push(...validateCards());

  const variations = themeCards.map((card) => cardToVariation(card));
  const paletteBySlug = new Map(variations.map((v) => [v.slug, v.palette]));

  for (const card of themeCards) {
    if (isAnchorCard(card)) {
      continue;
    }
    const cousinSlug = card.nearestCousin!;
    const candidate = paletteBySlug.get(card.slug);
    const cousin = paletteBySlug.get(cousinSlug);
    if (!candidate) {
      errors.push({ slug: card.slug, message: "Variation palette not found" });
      continue;
    }
    if (!cousin) {
      errors.push({ slug: card.slug, message: `Cousin palette not found: ${cousinSlug}` });
      continue;
    }
    errors.push(...checkCousinDiff(card.slug, cousinSlug, candidate, cousin));
  }

  errors.push(...checkManifest(variations));
  errors.push(...checkSemanticHighlighting(variations));
  errors.push(...checkGlobalUniqueness(variations));

  return { ok: errors.length === 0, errors };
}

function main(): void {
  const result = runValidation();
  if (result.ok) {
    console.log(`validate:themes — OK (${themeCards.length} themes)`);
    process.exit(0);
  }

  console.error("validate:themes — FAILED:");
  for (const err of result.errors) {
    console.error(`  [${err.slug}] ${err.message}`);
  }
  process.exit(1);
}

if (process.argv[1]?.endsWith("validate-themes.ts")) {
  main();
}
