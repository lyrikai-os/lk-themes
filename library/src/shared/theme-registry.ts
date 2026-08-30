import type { ThemeVariation } from "../shared/types.js";
import { blackPrism } from "../variations/black-prism.js";
import { creamBright } from "../variations/cream-bright.js";

/** Registry of all theme variations. Add new skins here. */
export const themeRegistry: ThemeVariation[] = [creamBright, blackPrism];

export function getVariationBySlug(slug: string): ThemeVariation | undefined {
  return themeRegistry.find((v) => v.slug === slug);
}

export function getAllVariations(): ThemeVariation[] {
  return [...themeRegistry];
}
