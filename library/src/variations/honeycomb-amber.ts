import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const honeycombAmberPalette = buildClassicPalette({
  ground: { paper: "#FAE8B8", sidebar: "#F0DCA8", panel: "#F4E0AC", elevated: "#FFF0C8", tabInactive: "#E8D498", titleBar: "#E0CC88", border: "#D4BC78", borderSoft: "#C8B068" },
  ink: { primary: "#2A1808", secondary: "#403020", muted: "#907850", faint: "#2A180866" },
  accent: "#D97706",
  syntax: { function: "#0284C7", keyword: "#B45309", decorator: "#C026D3", property: "#EA580C", string: "#65A30D", type: "#9333EA", variable: "#DC2626", constant: "#CA8A04", tag: "#0D9488", comment: "#907850B3" },
});

export const honeycombAmber: ThemeVariation = { slug: "honeycomb-amber", label: "Lyrikai Themes Honeycomb Amber", uiTheme: "vs", palette: honeycombAmberPalette };
