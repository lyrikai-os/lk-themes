import type { ThemeCard } from "./types.js";

const SLUG_RE = /^[a-z][a-z0-9-]*$/;
const ANCHOR_SLUGS = new Set(["cream-bright", "black-prism"]);

export function validateThemeCard(card: ThemeCard): string[] {
  const errors: string[] = [];

  if (!SLUG_RE.test(card.slug)) {
    errors.push(`Invalid slug: ${card.slug}`);
  }
  if (!card.label.startsWith("Lyrikai Themes ")) {
    errors.push(`Label must start with "Lyrikai Themes ": ${card.label}`);
  }
  if (!ANCHOR_SLUGS.has(card.slug) && !card.nearestCousin) {
    errors.push(`Non-anchor card ${card.slug} requires nearestCousin`);
  }
  if (ANCHOR_SLUGS.has(card.slug) && card.nearestCousin) {
    errors.push(`Anchor card ${card.slug} must not set nearestCousin`);
  }
  if (!card.family.trim()) {
    errors.push(`Card ${card.slug} requires family`);
  }
  if (!card.mood.trim()) {
    errors.push(`Card ${card.slug} requires mood`);
  }

  return errors;
}

export function isAnchorCard(card: ThemeCard): boolean {
  return ANCHOR_SLUGS.has(card.slug);
}

export type { ThemeCard };
