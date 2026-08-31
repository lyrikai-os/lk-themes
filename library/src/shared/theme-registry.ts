import type { ThemeVariation } from "../shared/types.js";
import { blackPrism } from "../variations/black-prism.js";
import { creamBright } from "../variations/cream-bright.js";
import { roleSpectrumBright } from "../variations/role-spectrum-bright.js";
import { roleSpectrumDark } from "../variations/role-spectrum-dark.js";

/** Registry of all theme variations. Add new skins here. */
export const themeRegistry: ThemeVariation[] = [
  creamBright,
  blackPrism,
  roleSpectrumBright,
  roleSpectrumDark,
];

export function getVariationBySlug(slug: string): ThemeVariation | undefined {
  return themeRegistry.find((v) => v.slug === slug);
}

export function getAllVariations(): ThemeVariation[] {
  return [...themeRegistry];
}
