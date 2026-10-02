/** Color math utilities — CIEDE2000 ΔE, hue separation, relative luminance. */

export const COUSIN_DIFF_DELTA_E_MIN = 8;
export const COUSIN_DIFF_HUE_MIN_DEG = 15;

/** Parse #RRGGBB or #RRGGBBAA to sRGB 0–1 channels (alpha ignored for ΔE). */
export function parseHex(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace("#", "").slice(0, 6).toUpperCase();
  if (normalized.length !== 6) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(normalized.slice(0, 2), 16) / 255,
    g: parseInt(normalized.slice(2, 4), 16) / 255,
    b: parseInt(normalized.slice(4, 6), 16) / 255,
  };
}

function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** WCAG relative luminance for #RRGGBB. */
export function luminance(hex: string): number {
  const { r, g, b } = parseHex(hex);
  const rl = srgbToLinear(r);
  const gl = srgbToLinear(g);
  const bl = srgbToLinear(b);
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}

function hexToLab(hex: string): { L: number; a: number; b: number } {
  const { r, g, b } = parseHex(hex);
  const rl = srgbToLinear(r);
  const gl = srgbToLinear(g);
  const bl = srgbToLinear(b);

  const x = (rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375) / 0.95047;
  const y = rl * 0.2126729 + gl * 0.7151522 + bl * 0.072175;
  const z = (rl * 0.0193339 + gl * 0.119192 + bl * 0.9503041) / 1.08883;

  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);

  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  return {
    L: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}

/** CIEDE2000 color difference between two #RRGGBB colors. */
export function deltaE(hexA: string, hexB: string): number {
  const lab1 = hexToLab(hexA);
  const lab2 = hexToLab(hexB);

  const L1 = lab1.L;
  const a1 = lab1.a;
  const b1 = lab1.b;
  const L2 = lab2.L;
  const a2 = lab2.a;
  const b2 = lab2.b;

  const avgLp = (L1 + L2) / 2;
  const C1 = Math.sqrt(a1 * a1 + b1 * b1);
  const C2 = Math.sqrt(a2 * a2 + b2 * b2);
  const avgC = (C1 + C2) / 2;

  const G =
    0.5 *
    (1 - Math.sqrt(Math.pow(avgC, 7) / (Math.pow(avgC, 7) + Math.pow(25, 7))));

  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);

  const C1p = Math.sqrt(a1p * a1p + b1 * b1);
  const C2p = Math.sqrt(a2p * a2p + b2 * b2);
  const avgCp = (C1p + C2p) / 2;

  let h1p = (Math.atan2(b1, a1p) * 180) / Math.PI;
  if (h1p < 0) h1p += 360;
  let h2p = (Math.atan2(b2, a2p) * 180) / Math.PI;
  if (h2p < 0) h2p += 360;

  let dhp = h2p - h1p;
  if (dhp > 180) dhp -= 360;
  if (dhp < -180) dhp += 360;

  const dLp = L2 - L1;
  const dCp = C2p - C1p;

  let dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin(((dhp / 2) * Math.PI) / 180);

  const avgLpMinus50Sq = Math.pow(avgLp - 50, 2);
  const T =
    1 -
    0.17 * Math.cos(((h1p + h2p) / 2 - 30) * (Math.PI / 180)) +
    0.24 * Math.cos((h1p + h2p) * (Math.PI / 90)) +
    0.32 * Math.cos(((3 * (h1p + h2p)) / 2 + 6) * (Math.PI / 180)) -
    0.2 * Math.cos(((h1p + h2p - 63) * Math.PI) / 180);

  const avgHp =
    Math.abs(h1p - h2p) > 180
      ? (h1p + h2p + 360) / 2
      : (h1p + h2p) / 2;

  const dRo =
    30 *
    Math.exp(-Math.pow((avgHp - 275) / 25, 2));

  const Rc =
    2 *
    Math.sqrt(Math.pow(avgCp, 7) / (Math.pow(avgCp, 7) + Math.pow(25, 7)));

  const Sl = 1 + (0.015 * avgLpMinus50Sq) / Math.sqrt(20 + avgLpMinus50Sq);
  const Sc = 1 + 0.045 * avgCp;
  const Sh = 1 + 0.015 * avgCp * T;

  const Rt = -Math.sin(2 * dRo * (Math.PI / 180)) * Rc;

  const dE = Math.sqrt(
    Math.pow(dLp / Sl, 2) +
      Math.pow(dCp / Sc, 2) +
      Math.pow(dHp / Sh, 2) +
      Rt * (dCp / Sc) * (dHp / Sh),
  );

  return dE;
}

/** Absolute hue angle difference in degrees (0–180) for two hex colors. Returns 0 for achromatic colors. */
export function hueDelta(hexA: string, hexB: string): number {
  const { r: r1, g: g1, b: b1 } = parseHex(hexA);
  const { r: r2, g: g2, b: b2 } = parseHex(hexB);

  const max1 = Math.max(r1, g1, b1);
  const min1 = Math.min(r1, g1, b1);
  const max2 = Math.max(r2, g2, b2);
  const min2 = Math.min(r2, g2, b2);

  const chroma1 = max1 - min1;
  const chroma2 = max2 - min2;

  if (chroma1 < 0.01 || chroma2 < 0.01) {
    return 0;
  }

  const hue1 = rgbToHue(r1, g1, b1, max1, min1);
  const hue2 = rgbToHue(r2, g2, b2, max2, min2);

  let diff = Math.abs(hue1 - hue2);
  if (diff > 180) diff = 360 - diff;
  return diff;
}

function rgbToHue(r: number, g: number, b: number, max: number, min: number): number {
  const d = max - min;
  if (d === 0) return 0;

  let h = 0;
  if (max === r) {
    h = ((g - b) / d) % 6;
  } else if (max === g) {
    h = (b - r) / d + 2;
  } else {
    h = (r - g) / d + 4;
  }
  h *= 60;
  if (h < 0) h += 360;
  return h;
}

/** Convert HSL (h 0–360, s/l 0–100) to #RRGGBB. */
export function hslToHex(h: number, s: number, l: number): string {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/** Strip alpha suffix for comparison (#RRGGBBAA → #RRGGBB). */
export function normalizeHex(hex: string): string {
  const h = hex.startsWith("#") ? hex : `#${hex}`;
  return h.slice(0, 7).toUpperCase();
}

export interface HslRoleDefinition {
  h: number;
  s: number;
  lLight: number;
  lDark: number;
}

/** Resolve an HSL role definition to hex for light or dark mode. */
export function resolveRoleHex(def: HslRoleDefinition, mode: "light" | "dark"): string {
  const lightness = mode === "light" ? def.lLight : def.lDark;
  return hslToHex(def.h, def.s, lightness);
}

/** Alias exports for protocol docs. */
export const COUSIN_DELTA_E_MIN = COUSIN_DIFF_DELTA_E_MIN;
export const COUSIN_HUE_MIN = COUSIN_DIFF_HUE_MIN_DEG;

/** True when ΔE or hue separation meets cousin-diff thresholds (per-token OR gate). */
export function cousinColorPasses(hexA: string, hexB: string): boolean {
  const a = normalizeHex(hexA);
  const b = normalizeHex(hexB);
  if (a === b) {
    return false;
  }
  return deltaE(a, b) >= COUSIN_DIFF_DELTA_E_MIN || hueDelta(a, b) >= COUSIN_DIFF_HUE_MIN_DEG;
}

/** Near-black ground pair — relaxed ΔE when both luminance ≤ 5%. */
export const COUSIN_NEAR_BLACK_LUMINANCE = 0.05;
export const COUSIN_NEAR_BLACK_DELTA_E_MIN = 3;

/** Cousin-diff for editor ground — relaxed gate for very dark pairs (Role Spectrum dark vs Black Prism). */
export function cousinGroundPasses(hexA: string, hexB: string): boolean {
  const a = normalizeHex(hexA);
  const b = normalizeHex(hexB);
  if (a === b) {
    return false;
  }
  const lumA = luminance(a);
  const lumB = luminance(b);
  if (lumA <= COUSIN_NEAR_BLACK_LUMINANCE && lumB <= COUSIN_NEAR_BLACK_LUMINANCE) {
    return deltaE(a, b) >= COUSIN_NEAR_BLACK_DELTA_E_MIN;
  }
  return cousinColorPasses(a, b);
}
