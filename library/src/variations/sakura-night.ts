import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const sakuraNightPalette = buildClassicPalette({
  ground: { paper: "#381850", sidebar: "#201430", panel: "#201430", elevated: "#281838", tabInactive: "#201430", titleBar: "#201430", border: "#302040", borderSoft: "#402850" },
  ink: { primary: "#FFF0F5", secondary: "#F0D8E8", muted: "#A08898", faint: "#FFF0F533" },
  accent: "#F9A8D4",
  syntax: { function: "#FDA4AF", keyword: "#FBCFE8", decorator: "#E879F9", property: "#FB7185", string: "#A7F3D0", type: "#C4B5FD", variable: "#FCA5A5", constant: "#FDE68A", tag: "#F0ABFC", comment: "#A08898B3" },
});

export const sakuraNight: ThemeVariation = { slug: "sakura-night", label: "Lyrikai Themes Sakura Night", uiTheme: "vs-dark", palette: sakuraNightPalette };
