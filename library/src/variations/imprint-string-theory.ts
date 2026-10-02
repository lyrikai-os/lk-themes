import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** String Theory imprint — wave glyph on a red tile. */
export const imprintStringTheoryPalette = buildImprintPalette({ imprintHex: PS.red });

export const imprintStringTheory: ThemeVariation = { slug: "imprint-string-theory", label: "Lyrikai Themes Imprint String Theory", uiTheme: "vs-dark", palette: imprintStringTheoryPalette };
