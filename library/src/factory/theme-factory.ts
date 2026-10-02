import type { ThemeCard, ThemePalette, ThemeVariation } from "../shared/types.js";
import { blackPrismPalette } from "../variations/black-prism.js";
import { creamBrightPalette } from "../variations/cream-bright.js";
import { cosmicVoid } from "../variations/cosmic-void.js";
import { comicInk } from "../variations/comic-ink.js";
import { glitchMatrix } from "../variations/glitch-matrix.js";
import { circusNight } from "../variations/circus-night.js";
import { vegasNeon } from "../variations/vegas-neon.js";
import { rainbowCode } from "../variations/rainbow-code.js";
import { vaporDream } from "../variations/vapor-dream.js";
import { tronGrid } from "../variations/tron-grid.js";
import { arcadeCabinet } from "../variations/arcade-cabinet.js";
import { phosphorGreen } from "../variations/phosphor-green.js";
import { sakuraNight } from "../variations/sakura-night.js";
import { deepOcean } from "../variations/deep-ocean.js";
import { desertSunset } from "../variations/desert-sunset.js";
import { newspaperInk } from "../variations/newspaper-ink.js";
import { gothicCrimson } from "../variations/gothic-crimson.js";
import { honeycombAmber } from "../variations/honeycomb-amber.js";
import {
  buildTextRolePalette,
  createRoleSpectrumGround,
  type TextRoleDefinition,
} from "../variations/role-spectrum-shared.js";

export function createClassicTheme(card: ThemeCard, palette: ThemePalette): ThemeVariation {
  return { slug: card.slug, label: card.label, uiTheme: card.uiTheme, palette, textProfile: "classic", card };
}

export interface SemanticRichGroundSpec { mode: "light" | "dark" }
export interface HueWheelSpec { textRoles?: Record<string, TextRoleDefinition> }

export function createSemanticRichTheme(
  card: ThemeCard,
  groundSpec: SemanticRichGroundSpec,
  hueWheelSpec: HueWheelSpec = {},
): ThemeVariation {
  const { mode } = groundSpec;
  const roles = hueWheelSpec.textRoles;
  return {
    slug: card.slug, label: card.label, uiTheme: card.uiTheme,
    palette: createRoleSpectrumGround(mode, roles),
    textProfile: "semantic-rich", textRoles: buildTextRolePalette(mode, roles), card,
  };
}

const cardBySlug = new Map<string, ThemeCard>();

export function registerCards(cards: ThemeCard[]): void {
  for (const card of cards) cardBySlug.set(card.slug, card);
}

function requireCard(slug: string): ThemeCard {
  const card = cardBySlug.get(slug);
  if (!card) throw new Error(`Theme card not registered: ${slug}`);
  return card;
}

function withCard(v: ThemeVariation, slug: string): ThemeVariation {
  return { ...v, card: requireCard(slug) };
}

const WAVE_VARIATIONS: Record<string, ThemeVariation> = {
  "cosmic-void": cosmicVoid, "comic-ink": comicInk, "glitch-matrix": glitchMatrix,
  "circus-night": circusNight, "vegas-neon": vegasNeon, "rainbow-code": rainbowCode,
  "vapor-dream": vaporDream, "tron-grid": tronGrid, "arcade-cabinet": arcadeCabinet,
  "phosphor-green": phosphorGreen, "sakura-night": sakuraNight, "deep-ocean": deepOcean,
  "desert-sunset": desertSunset, "newspaper-ink": newspaperInk, "gothic-crimson": gothicCrimson,
  "honeycomb-amber": honeycombAmber,
};

const variationBuilders: Record<string, () => ThemeVariation> = {
  "cream-bright": () => createClassicTheme(requireCard("cream-bright"), creamBrightPalette),
  "black-prism": () => createClassicTheme(requireCard("black-prism"), blackPrismPalette),
  "role-spectrum-bright": () => createSemanticRichTheme(requireCard("role-spectrum-bright"), { mode: "light" }),
  "role-spectrum-dark": () => createSemanticRichTheme(requireCard("role-spectrum-dark"), { mode: "dark" }),
};

for (const [slug, v] of Object.entries(WAVE_VARIATIONS)) {
  variationBuilders[slug] = () => withCard(v, slug);
}

export function cardToVariation(card: ThemeCard): ThemeVariation {
  const builder = variationBuilders[card.slug];
  if (!builder) throw new Error(`No variation builder registered for slug: ${card.slug}`);
  return builder();
}

export function getCardBySlug(cards: ThemeCard[], slug: string): ThemeCard | undefined {
  return cards.find((c) => c.slug === slug);
}

export function registerVariationBuilder(slug: string, builder: () => ThemeVariation): void {
  variationBuilders[slug] = builder;
}

export function syntaxFingerprint(palette: ThemePalette): string {
  const keys: (keyof ThemePalette)[] = [
    "syntaxFunction", "syntaxKeyword", "syntaxDecorator", "syntaxProperty", "syntaxString",
    "syntaxType", "syntaxVariable", "syntaxConstant", "syntaxTag", "syntaxComment",
  ];
  return keys.map((k) => palette[k].toUpperCase()).join("|");
}

export function groundSyntaxFingerprint(palette: ThemePalette): string {
  return `${palette.creamPaper.toUpperCase()}::${syntaxFingerprint(palette)}`;
}
