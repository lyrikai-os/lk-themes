import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const circusNightPalette = buildClassicPalette({
  ground: { paper: "#120818", sidebar: "#180C20", panel: "#180C20", elevated: "#221028", tabInactive: "#180C20", titleBar: "#180C20", border: "#301838", borderSoft: "#402048" },
  ink: { primary: "#F5E6D3", secondary: "#E8D4BC", muted: "#A89080", faint: "#F5E6D333" },
  accent: "#F59E0B",
  syntax: { function: "#48CAE4", keyword: "#EF4444", decorator: "#EC4899", property: "#F97316", string: "#84CC16", type: "#A855F7", variable: "#FB7185", constant: "#FBBF24", tag: "#22D3EE", comment: "#A89080B3" },
});

export const circusNight: ThemeVariation = { slug: "circus-night", label: "Lyrikai Themes Circus Night", uiTheme: "vs-dark", palette: circusNightPalette };
