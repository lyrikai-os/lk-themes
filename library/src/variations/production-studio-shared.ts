import type { ThemePalette } from "../shared/types.js";
import { parseHex } from "../shared/color-math.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

/** LYRIKAI Production Studio design system v1-3 — core spectrum, cream/ink, warm-black chrome. */
export const PS = {
  red: "#EF4444",
  orange: "#F97316",
  yellow: "#FACC15",
  teal: "#14B8A6",
  blue: "#3B82F6",
  pink: "#EC4899",
  cream: "#F8F6ED",
  cream50: "#FDFCF7",
  cream200: "#EFEBDD",
  cream300: "#E2DCC8",
  cream400: "#C8C0A8",
  ink: "#0F1720",
  inkMuted: "#5B6670",
  stage: "#000000",
  chromeBg: "#080707",
  chromePanel: "#0D0C0C",
  chromeRow: "#1A1818",
  chromeBorder: "#242121",
  chromeBorderSoft: "#2B2828",
  chromeInk: "#D5D8CE",
  chromeBody: "#9FA8A4",
  chromeMuted: "#7D8A87",
  textOnDanger: "#FCA5A5",
  textOnMismatch: "#FDBA74",
  textOnOk: "#7FD8CE",
} as const;

type SyntaxRoles = Parameters<typeof buildClassicPalette>[0]["syntax"];

/** Studio Black syntax: spectrum bands plus the on-wash tints for the extra roles. */
export const STUDIO_DARK_SYNTAX: SyntaxRoles = {
  function: PS.blue,
  keyword: PS.pink,
  decorator: PS.orange,
  property: PS.textOnOk,
  string: PS.yellow,
  type: PS.teal,
  variable: PS.textOnMismatch,
  constant: PS.red,
  tag: PS.textOnDanger,
  comment: `${PS.chromeMuted}B3`,
};

export const STUDIO_SEMANTIC = { error: PS.red, warning: PS.yellow, info: PS.blue, success: PS.teal };

function toHex(channel: number): string {
  return Math.round(Math.min(1, Math.max(0, channel)) * 255).toString(16).padStart(2, "0").toUpperCase();
}

/** Linear sRGB mix of `tint` into `base` at `amount` (0–1). */
export function mixHex(base: string, tint: string, amount: number): string {
  const a = parseHex(base);
  const b = parseHex(tint);
  const mix = (x: number, y: number) => x + (y - x) * amount;
  return `#${toHex(mix(a.r, b.r))}${toHex(mix(a.g, b.g))}${toHex(mix(a.b, b.b))}`;
}

/**
 * Imprint theme: warm-black studio chrome tinted toward the imprint's spectrum colour,
 * which leads as accent and function. The syntax role that held the imprint colour
 * takes the displaced function colour so no two roles share a hue.
 */
export function buildImprintPalette(params: {
  imprintHex: string;
  groundTint?: number;
  accent?: string;
  paper?: string;
}): ThemePalette {
  const { imprintHex, groundTint = 0.07 } = params;
  const tint = (base: string, amount: number) => mixHex(base, imprintHex, amount);

  const syntax: SyntaxRoles = { ...STUDIO_DARK_SYNTAX };
  const displaced = syntax.function;
  for (const role of Object.keys(syntax) as (keyof SyntaxRoles)[]) {
    if (syntax[role].toUpperCase() === imprintHex.toUpperCase()) syntax[role] = displaced;
  }
  syntax.function = imprintHex;

  const chrome = tint(PS.chromeBg, groundTint * 0.6);
  return buildClassicPalette({
    ground: {
      paper: params.paper ?? tint(PS.chromePanel, groundTint),
      sidebar: chrome,
      panel: chrome,
      elevated: tint(PS.chromeRow, groundTint),
      tabInactive: chrome,
      titleBar: chrome,
      border: tint(PS.chromeBorder, groundTint * 1.5),
      borderSoft: tint(PS.chromeBorderSoft, groundTint * 1.5),
    },
    ink: { primary: PS.chromeInk, secondary: PS.chromeBody, muted: PS.chromeMuted, faint: `${PS.chromeInk}66` },
    accent: params.accent ?? imprintHex,
    syntax,
    semantic: STUDIO_SEMANTIC,
  });
}
