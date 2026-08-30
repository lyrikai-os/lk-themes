import type { ThemePalette, ThemeVariation } from "../shared/types.js";

/** Skin 01 — warm cream ground, terracotta accent, high-chroma syntax. Original MIT hex. */
export const creamBrightPalette: ThemePalette = {
  // Ground — warm coffee-cream paper family
  creamPaper: "#EBE5E0",
  creamSidebar: "#E0D8D2",
  creamPanel: "#E4DDD8",
  creamElevated: "#F2EEEB",
  creamTabInactive: "#DDD4CE",
  creamTitleBar: "#D4C8C0",
  creamBorder: "#C9BBB3",
  creamBorderSoft: "#BFB0A8",

  // Ink — near-black brown body, muted comments
  inkPrimary: "#2A1F18",
  inkSecondary: "#3D3028",
  inkMuted: "#9A8E87",
  inkFaint: "#2A1F1866",

  // Accent — terracotta/coral cousin (not Bearded #D3694C)
  accent: "#C75B40",
  accentSoft: "#C75B4026",
  accentMedium: "#C75B404D",
  accentStrong: "#C75B4080",

  // Syntax — HIGH chroma
  syntaxFunction: "#0095A8",
  syntaxKeyword: "#C49400",
  syntaxDecorator: "#C21884",
  syntaxProperty: "#E07800",
  syntaxString: "#3D9A00",
  syntaxType: "#7B52C4",
  syntaxVariable: "#D45030",
  syntaxConstant: "#E03030",
  syntaxTag: "#008899",
  syntaxComment: "#9A8E87B3",

  // Semantic
  error: "#E03030",
  warning: "#D48800",
  info: "#0095A8",
  success: "#3D9A00",
};

export const creamBright: ThemeVariation = {
  slug: "cream-bright",
  label: "Lyrikai Themes Cream Bright",
  uiTheme: "vs",
  palette: creamBrightPalette,
};
