import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const vegasNeonPalette = buildClassicPalette({
  ground: { paper: "#1A0828", sidebar: "#140820", panel: "#140820", elevated: "#1C0C28", tabInactive: "#140820", titleBar: "#140820", border: "#280838", borderSoft: "#380C48" },
  ink: { primary: "#FFF0F5", secondary: "#F0D0E0", muted: "#A08090", faint: "#FFF0F533" },
  accent: "#FF1493",
  syntax: { function: "#00CED1", keyword: "#FFD700", decorator: "#FF69B4", property: "#FF6347", string: "#00FA9A", type: "#DA70D6", variable: "#FF4500", constant: "#FF1493", tag: "#40E0D0", comment: "#A08090B3" },
});

export const vegasNeon: ThemeVariation = { slug: "vegas-neon", label: "Lyrikai Themes Vegas Neon", uiTheme: "vs-dark", palette: vegasNeonPalette };
