import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const vaporDreamPalette = buildClassicPalette({
  ground: { paper: "#1A0F2E", sidebar: "#201238", panel: "#201238", elevated: "#281840", tabInactive: "#201238", titleBar: "#201238", border: "#382050", borderSoft: "#482860" },
  ink: { primary: "#F0E6FF", secondary: "#D8C8F0", muted: "#9888B0", faint: "#F0E6FF33" },
  accent: "#2DD4BF",
  syntax: { function: "#5EEAD4", keyword: "#F472B6", decorator: "#C084FC", property: "#FB923C", string: "#34D399", type: "#A78BFA", variable: "#F9A8D4", constant: "#FBBF24", tag: "#67E8F9", comment: "#9888B0B3" },
});

export const vaporDream: ThemeVariation = { slug: "vapor-dream", label: "Lyrikai Themes Vapor Dream", uiTheme: "vs-dark", palette: vaporDreamPalette };
