import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const phosphorGreenPalette = buildClassicPalette({
  ground: { paper: "#0C180C", sidebar: "#102010", panel: "#102010", elevated: "#142814", tabInactive: "#102010", titleBar: "#102010", border: "#1A301A", borderSoft: "#244024" },
  ink: { primary: "#BBFFBB", secondary: "#88DD88", muted: "#448844", faint: "#BBFFBB33" },
  accent: "#88FFAA",
  syntax: { function: "#44FF77", keyword: "#66FF99", decorator: "#88FFAA", property: "#55EE88", string: "#33FF66", type: "#77FFAA", variable: "#99FFBB", constant: "#AAFFCC", tag: "#22EE55", comment: "#448844B3" },
});

export const phosphorGreen: ThemeVariation = { slug: "phosphor-green", label: "Lyrikai Themes Phosphor Green", uiTheme: "vs-dark", palette: phosphorGreenPalette };
