import type { ThemeCard } from "../shared/types.js";

/** Full 20-theme catalog — ThemeCard metadata for factory + validation. */
export const themeCards: ThemeCard[] = [
  { slug: "cream-bright", label: "Lyrikai Themes Cream Bright", uiTheme: "vs", family: "warm coffee cream", mood: "Warm coffee-cream paper, terracotta accent, high-chroma syntax", readabilityTier: "A", textProfile: "classic" },
  { slug: "black-prism", label: "Lyrikai Themes Black Prism", uiTheme: "vs-dark", family: "pure black electric", mood: "Pure black ground, electric cyan accent, high-chroma syntax", readabilityTier: "A", textProfile: "classic" },
  { slug: "role-spectrum-bright", label: "Lyrikai Themes Role Spectrum Bright", uiTheme: "vs", family: "spectral roles", mood: "Cool mist ground, HSL spectral text system", readabilityTier: "B", textProfile: "semantic-rich", nearestCousin: "cream-bright" },
  { slug: "role-spectrum-dark", label: "Lyrikai Themes Role Spectrum Dark", uiTheme: "vs-dark", family: "spectral roles", mood: "Deep indigo-black ground, HSL spectral text system", readabilityTier: "B", textProfile: "semantic-rich", nearestCousin: "black-prism" },
  { slug: "cosmic-void", label: "Lyrikai Themes Cosmic Void", uiTheme: "vs-dark", family: "cosmic deep space", mood: "Deep space void; nebula purples; starfield-muted chrome", readabilityTier: "C", textProfile: "semantic-rich", experimental: true, nearestCousin: "black-prism" },
  { slug: "comic-ink", label: "Lyrikai Themes Comic Ink", uiTheme: "vs", family: "comic book halftone", mood: "Comic halftone paper; bold CMYK primaries", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "cream-bright" },
  { slug: "glitch-matrix", label: "Lyrikai Themes Glitch Matrix", uiTheme: "vs-dark", family: "glitch matrix terminal", mood: "Matrix terminal; phosphor green; magenta glitch accents", readabilityTier: "C", textProfile: "semantic-rich", experimental: true, nearestCousin: "black-prism" },
  { slug: "circus-night", label: "Lyrikai Themes Circus Night", uiTheme: "vs-dark", family: "circus night carnival", mood: "Big-top midnight; carnival red and spotlight gold", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "cosmic-void" },
  { slug: "vegas-neon", label: "Lyrikai Themes Vegas Neon", uiTheme: "vs-dark", family: "las vegas neon strip", mood: "Strip neon pinks and cyans; marquee gold keywords", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "circus-night" },
  { slug: "rainbow-code", label: "Lyrikai Themes Rainbow Code", uiTheme: "vs", family: "rainbow syntax celebration", mood: "Prismatic syntax rainbow on playful light ground", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "comic-ink" },
  { slug: "vapor-dream", label: "Lyrikai Themes Vapor Dream", uiTheme: "vs-dark", family: "vaporwave sunset", mood: "Vaporwave dusk purple-pink sky; teal accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "glitch-matrix" },
  { slug: "tron-grid", label: "Lyrikai Themes Tron Grid", uiTheme: "vs-dark", family: "tron light cycle grid", mood: "Black grid void; cyan light-cycle lines", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "vegas-neon" },
  { slug: "arcade-cabinet", label: "Lyrikai Themes Arcade Cabinet", uiTheme: "vs-dark", family: "arcade CRT cabinet", mood: "CRT bezel dark blue; warm amber score accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "tron-grid" },
  { slug: "phosphor-green", label: "Lyrikai Themes Phosphor Green", uiTheme: "vs-dark", family: "phosphor monochrome", mood: "Monochrome P1 green phosphor; single-hue syntax ramp", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "glitch-matrix" },
  { slug: "sakura-night", label: "Lyrikai Themes Sakura Night", uiTheme: "vs-dark", family: "sakura night blossom", mood: "Night sakura indigo ground; pink blossom accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "vapor-dream" },
  { slug: "deep-ocean", label: "Lyrikai Themes Deep Ocean", uiTheme: "vs-dark", family: "ocean abyss bioluminescence", mood: "Abyssal blue-black; bioluminescent teal accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "cosmic-void" },
  { slug: "desert-sunset", label: "Lyrikai Themes Desert Sunset", uiTheme: "vs", family: "desert golden hour", mood: "Warm sand ground; copper sunset accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "cream-bright" },
  { slug: "newspaper-ink", label: "Lyrikai Themes Newspaper Ink", uiTheme: "vs", family: "newspaper print grayscale", mood: "Newsprint off-white; ink-black body; restrained syntax", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "cream-bright" },
  { slug: "gothic-crimson", label: "Lyrikai Themes Gothic Crimson", uiTheme: "vs-dark", family: "gothic cathedral crimson", mood: "Cathedral stone dark; stained-glass crimson accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "sakura-night" },
  { slug: "honeycomb-amber", label: "Lyrikai Themes Honeycomb Amber", uiTheme: "vs", family: "honeycomb warm amber", mood: "Honeycomb warm amber ground; golden wax accent", readabilityTier: "C", textProfile: "genre", experimental: true, nearestCousin: "desert-sunset" },
];

export function getShippedCards(): ThemeCard[] {
  return themeCards;
}
