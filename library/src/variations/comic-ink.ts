import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const comicInkPalette = buildClassicPalette({
  ground: { paper: "#FAF5E8", sidebar: "#EDE5D8", panel: "#F0EAE0", elevated: "#FAF6F0", tabInactive: "#E8DFD2", titleBar: "#E0D5C8", border: "#D4C8B8", borderSoft: "#C8BAA8" },
  ink: { primary: "#1A1410", secondary: "#2E2820", muted: "#8A8078", faint: "#1A141066" },
  accent: "#E11D48",
  syntax: { function: "#0077BB", keyword: "#1D4ED8", decorator: "#DB2777", property: "#EA580C", string: "#16A34A", type: "#7C3AED", variable: "#DC2626", constant: "#CA8A04", tag: "#0284C7", comment: "#8A8078B3" },
});

export const comicInk: ThemeVariation = { slug: "comic-ink", label: "Lyrikai Themes Comic Ink", uiTheme: "vs", palette: comicInkPalette };
