import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const gothicCrimsonPalette = buildClassicPalette({
  ground: { paper: "#141018", sidebar: "#1A1420", panel: "#1A1420", elevated: "#221828", tabInactive: "#1A1420", titleBar: "#1A1420", border: "#2A2030", borderSoft: "#382838" },
  ink: { primary: "#E8E0E8", secondary: "#C8C0C8", muted: "#888088", faint: "#E8E0E833" },
  accent: "#BE123C",
  syntax: { function: "#D97706", keyword: "#BE123C", decorator: "#9333EA", property: "#B45309", string: "#84CC16", type: "#A855F7", variable: "#DC2626", constant: "#F59E0B", tag: "#0891B2", comment: "#888088B3" },
});

export const gothicCrimson: ThemeVariation = { slug: "gothic-crimson", label: "Lyrikai Themes Gothic Crimson", uiTheme: "vs-dark", palette: gothicCrimsonPalette };
