import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const rainbowCodePalette = buildClassicPalette({
  ground: { paper: "#FFF0F8", sidebar: "#FFF0E8", panel: "#FFF4EC", elevated: "#FFFCF8", tabInactive: "#FFE8DC", titleBar: "#FFE0D0", border: "#FFD0C0", borderSoft: "#FFC0B0" },
  ink: { primary: "#1A1020", secondary: "#302040", muted: "#9080A0", faint: "#1A102066" },
  accent: "#7C3AED",
  syntax: { function: "#06B6D4", keyword: "#EF4444", decorator: "#EC4899", property: "#F97316", string: "#22C55E", type: "#8B5CF6", variable: "#EAB308", constant: "#3B82F6", tag: "#14B8A6", comment: "#9080A0B3" },
});

export const rainbowCode: ThemeVariation = { slug: "rainbow-code", label: "Lyrikai Themes Rainbow Code", uiTheme: "vs", palette: rainbowCodePalette };
