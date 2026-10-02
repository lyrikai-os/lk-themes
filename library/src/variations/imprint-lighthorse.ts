import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** Lighthorse imprint — arch glyph on an orange tile. */
export const imprintLighthorsePalette = buildImprintPalette({ imprintHex: PS.orange });

export const imprintLighthorse: ThemeVariation = { slug: "imprint-lighthorse", label: "Lyrikai Themes Imprint Lighthorse", uiTheme: "vs-dark", palette: imprintLighthorsePalette };
