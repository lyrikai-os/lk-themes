import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** 8++--9 imprint — spark glyph on a pink tile. */
export const imprintEightNinePalette = buildImprintPalette({ imprintHex: PS.pink });

export const imprintEightNine: ThemeVariation = { slug: "imprint-eight-nine", label: "Lyrikai Themes Imprint 8++--9", uiTheme: "vs-dark", palette: imprintEightNinePalette };
