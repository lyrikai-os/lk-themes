import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const newspaperInkPalette = buildClassicPalette({
  ground: { paper: "#C8C2B8", sidebar: "#E8E4DE", panel: "#ECEAE4", elevated: "#F8F6F2", tabInactive: "#E0DCD6", titleBar: "#D8D4CE", border: "#C8C4BE", borderSoft: "#B8B4AE" },
  ink: { primary: "#1A1A1A", secondary: "#333333", muted: "#777777", faint: "#1A1A1A66" },
  accent: "#374151",
  syntax: { function: "#4B5563", keyword: "#1F2937", decorator: "#6B7280", property: "#374151", string: "#525252", type: "#404040", variable: "#262626", constant: "#171717", tag: "#555555", comment: "#777777B3" },
});

export const newspaperInk: ThemeVariation = { slug: "newspaper-ink", label: "Lyrikai Themes Newspaper Ink", uiTheme: "vs", palette: newspaperInkPalette };
