import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const tronGridPalette = buildClassicPalette({
  ground: { paper: "#050508", sidebar: "#0A0A10", panel: "#0A0A10", elevated: "#101018", tabInactive: "#0A0A10", titleBar: "#0A0A10", border: "#00FFFF33", borderSoft: "#00FFFF22" },
  ink: { primary: "#E0FFFF", secondary: "#B0E8E8", muted: "#508888", faint: "#E0FFFF33" },
  accent: "#00FFFF",
  syntax: { function: "#00FFFF", keyword: "#FF6600", decorator: "#FF00FF", property: "#00CCFF", string: "#00FFAA", type: "#66FFFF", variable: "#FF9900", constant: "#FF3366", tag: "#00E5FF", comment: "#508888B3" },
});

export const tronGrid: ThemeVariation = { slug: "tron-grid", label: "Lyrikai Themes Tron Grid", uiTheme: "vs-dark", palette: tronGridPalette };
