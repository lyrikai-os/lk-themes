import { themeCards } from "../factory/theme-cards.js";
import { cardToVariation, registerCards } from "../factory/theme-factory.js";
import type { ThemeVariation } from "./types.js";

registerCards(themeCards);

/** Registry of all theme variations — driven by ThemeCard metadata. */
export const themeRegistry: ThemeVariation[] = themeCards.map((card) => cardToVariation(card));

export function getVariationBySlug(slug: string): ThemeVariation | undefined {
  return themeRegistry.find((v) => v.slug === slug);
}

export function getAllVariations(): ThemeVariation[] {
  return [...themeRegistry];
}

export { themeCards };
