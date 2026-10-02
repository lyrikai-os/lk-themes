import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** Ufopia imprint — arc-ring glyph on a teal tile. */
export const imprintUfopiaPalette = buildImprintPalette({ imprintHex: PS.teal });

export const imprintUfopia: ThemeVariation = { slug: "imprint-ufopia", label: "Lyrikai Themes Imprint Ufopia", uiTheme: "vs-dark", palette: imprintUfopiaPalette };
