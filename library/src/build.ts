import { readFileSync, writeFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { themeCards } from "./factory/theme-cards.js";
import { cardToVariation, registerCards } from "./factory/theme-factory.js";
import { generateVscodeTheme, themeOutputFilename } from "./generators/vscode/index.js";

registerCards(themeCards);

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../..");
const themesOutDir = join(repoRoot, "extensions/lyrikai-themes/themes");
const extPackagePath = join(repoRoot, "extensions/lyrikai-themes/package.json");

function syncManifest(variations: ReturnType<typeof cardToVariation>[]): void {
  const raw = readFileSync(extPackagePath, "utf8");
  const pkg = JSON.parse(raw) as Record<string, unknown> & {
    contributes: { themes: Array<{ label: string; uiTheme: string; path: string }> };
  };

  pkg.contributes.themes = variations.map((v) => ({
    label: v.label,
    uiTheme: v.uiTheme,
    path: `./themes/${themeOutputFilename(v.slug)}`,
  }));

  writeFileSync(extPackagePath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
  console.log(`Auto-manifest: ${pkg.contributes.themes.length} theme(s) in contributes.themes`);
}

function main(): void {
  mkdirSync(themesOutDir, { recursive: true });

  const variations = themeCards.map((card) => cardToVariation(card));
  if (variations.length === 0) {
    console.error("No theme variations registered.");
    process.exit(1);
  }

  for (const variation of variations) {
    const theme = generateVscodeTheme(variation);
    const filename = themeOutputFilename(variation.slug);
    const outPath = join(themesOutDir, filename);
    writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n", "utf8");
    console.log(`Generated ${outPath}`);
  }

  syncManifest(variations);
  console.log(`Done — ${variations.length} theme(s) written.`);
}

main();
