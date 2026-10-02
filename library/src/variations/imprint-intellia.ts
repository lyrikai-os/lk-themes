import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** Intellia imprint — sparkle glyph on a yellow tile. */
export const imprintIntelliaPalette = buildImprintPalette({ imprintHex: PS.yellow });

export const imprintIntellia: ThemeVariation = { slug: "imprint-intellia", label: "Lyrikai Themes Imprint Intellia", uiTheme: "vs-dark", palette: imprintIntelliaPalette };
