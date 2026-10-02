import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const desertSunsetPalette = buildClassicPalette({
  ground: { paper: "#E8D4BC", sidebar: "#E8D8C4", panel: "#ECE0D0", elevated: "#FAF0E4", tabInactive: "#E0D0BC", titleBar: "#D8C8B0", border: "#C8B8A0", borderSoft: "#B8A890" },
  ink: { primary: "#2A1810", secondary: "#403020", muted: "#908070", faint: "#2A181066" },
  accent: "#C2410C",
  syntax: { function: "#2563EB", keyword: "#EA580C", decorator: "#DB2777", property: "#D97706", string: "#65A30D", type: "#9333EA", variable: "#DC2626", constant: "#CA8A04", tag: "#0D9488", comment: "#908070B3" },
});

export const desertSunset: ThemeVariation = { slug: "desert-sunset", label: "Lyrikai Themes Desert Sunset", uiTheme: "vs", palette: desertSunsetPalette };
