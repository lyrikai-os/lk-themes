import type { ThemePalette, ThemeVariation } from "../shared/types.js";

/** Skin 02 — pure black ground, electric cyan accent, high-chroma syntax. Original MIT hex. */
export const blackPrismPalette: ThemePalette = {
  // Ground — pure black editor, barely lifted chrome
  creamPaper: "#000000",
  creamSidebar: "#0A0A0A",
  creamPanel: "#0A0A0A",
  creamElevated: "#141414",
  creamTabInactive: "#0A0A0A",
  creamTitleBar: "#0A0A0A",
  creamBorder: "#1A1A1A",
  creamBorderSoft: "#262626",

  // Ink — white body, muted gray comments
  inkPrimary: "#FFFFFF",
  inkSecondary: "#D4D4D4",
  inkMuted: "#737373",
  inkFaint: "#FFFFFF66",

  // Accent — electric cyan (not terracotta)
  accent: "#00E5FF",
  accentSoft: "#00E5FF26",
  accentMedium: "#00E5FF4D",
  accentStrong: "#00E5FF80",

  // Syntax — HIGH chroma on black
  syntaxFunction: "#00E5FF",
  syntaxKeyword: "#FFD54F",
  syntaxDecorator: "#FF4081",
  syntaxProperty: "#FF9100",
  syntaxString: "#69F0AE",
  syntaxType: "#B388FF",
  syntaxVariable: "#FF7043",
  syntaxConstant: "#FF5252",
  syntaxTag: "#18FFFF",
  syntaxComment: "#737373B3",

  // Semantic
  error: "#FF5252",
  warning: "#FFB300",
  info: "#00E5FF",
  success: "#69F0AE",
};

export const blackPrism: ThemeVariation = {
  slug: "black-prism",
  label: "Lyrikai Themes Black Prism",
  uiTheme: "vs-dark",
  palette: blackPrismPalette,
};
