import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** System80 imprint — grid glyph on a blue tile. */
export const imprintSystem80Palette = buildImprintPalette({ imprintHex: PS.blue });

export const imprintSystem80: ThemeVariation = { slug: "imprint-system80", label: "Lyrikai Themes Imprint System80", uiTheme: "vs-dark", palette: imprintSystem80Palette };
