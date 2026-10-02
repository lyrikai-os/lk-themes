import type { ThemeVariation } from "../shared/types.js";
import { buildImprintPalette, PS } from "./production-studio-shared.js";

/** We Are The Ones imprint — star glyph on a black tile with teal; true-black stage, cream accent. */
export const imprintWeAreTheOnesPalette = buildImprintPalette({ imprintHex: PS.teal, paper: PS.stage, accent: PS.cream, groundTint: 0.04 });

export const imprintWeAreTheOnes: ThemeVariation = { slug: "imprint-we-are-the-ones", label: "Lyrikai Themes Imprint We Are The Ones", uiTheme: "vs-dark", palette: imprintWeAreTheOnesPalette };
