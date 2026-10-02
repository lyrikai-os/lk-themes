import type { ThemeVariation } from "../shared/types.js";
import { buildClassicPalette } from "../shared/palette-helpers.js";
import { PS, STUDIO_DARK_SYNTAX, STUDIO_SEMANTIC } from "./production-studio-shared.js";

/** Production Studio control room — warm-black editor, studio chrome, yellow = at the gate / cursor. */
export const studioBlackPalette = buildClassicPalette({
  ground: { paper: "#141212", sidebar: PS.chromeBg, panel: PS.chromeBg, elevated: PS.chromeRow, tabInactive: PS.chromeBg, titleBar: PS.chromeBg, border: PS.chromeBorder, borderSoft: PS.chromeBorderSoft },
  ink: { primary: PS.chromeInk, secondary: PS.chromeBody, muted: PS.chromeMuted, faint: `${PS.chromeInk}66` },
  accent: PS.yellow,
  syntax: STUDIO_DARK_SYNTAX,
  semantic: STUDIO_SEMANTIC,
});

export const studioBlack: ThemeVariation = { slug: "studio-black", label: "Lyrikai Themes Studio Black", uiTheme: "vs-dark", palette: studioBlackPalette };
