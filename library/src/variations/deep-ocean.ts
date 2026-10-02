import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";

export const deepOceanPalette = buildClassicPalette({
  ground: { paper: "#020810", sidebar: "#060C18", panel: "#060C18", elevated: "#0A1420", tabInactive: "#060C18", titleBar: "#060C18", border: "#102030", borderSoft: "#183040" },
  ink: { primary: "#D0F0F8", secondary: "#A0D0E0", muted: "#508090", faint: "#D0F0F833" },
  accent: "#14B8A6",
  syntax: { function: "#22D3EE", keyword: "#2DD4BF", decorator: "#A78BFA", property: "#06B6D4", string: "#34D399", type: "#67E8F9", variable: "#5EEAD4", constant: "#F472B6", tag: "#38BDF8", comment: "#508090B3" },
});

export const deepOcean: ThemeVariation = { slug: "deep-ocean", label: "Lyrikai Themes Deep Ocean", uiTheme: "vs-dark", palette: deepOceanPalette };
