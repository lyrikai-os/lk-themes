import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const arcadeCabinetPalette = buildClassicPalette({
  ground: { paper: "#0A1628", sidebar: "#0E1C30", panel: "#0E1C30", elevated: "#142438", tabInactive: "#0E1C30", titleBar: "#0E1C30", border: "#1E3050", borderSoft: "#284060" },
  ink: { primary: "#FFF8E8", secondary: "#E8D8C0", muted: "#8898A8", faint: "#FFF8E833" },
  accent: "#FFB300",
  syntax: { function: "#00BCD4", keyword: "#FF1744", decorator: "#E040FB", property: "#FF9100", string: "#76FF03", type: "#448AFF", variable: "#FF5252", constant: "#FFD600", tag: "#18FFFF", comment: "#8898A8B3" },
});

export const arcadeCabinet: ThemeVariation = { slug: "arcade-cabinet", label: "Lyrikai Themes Arcade Cabinet", uiTheme: "vs-dark", palette: arcadeCabinetPalette };
