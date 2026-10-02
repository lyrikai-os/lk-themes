import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  COUSIN_DIFF_DELTA_E_MIN,
  cousinColorPasses,
  cousinGroundPasses,
  deltaE,
  hslToHex,
  hueDelta,
  luminance,
  normalizeHex,
  resolveRoleHex,
} from "./color-math.js";
import { creamBrightPalette } from "../variations/cream-bright.js";
import { blackPrismPalette } from "../variations/black-prism.js";
import { createRoleSpectrumGround } from "../variations/role-spectrum-shared.js";
import { comparePalettesForCousinDiff } from "../validate-themes.js";

describe("color-math", () => {
  it("normalizes hex with alpha", () => {
    assert.equal(normalizeHex("#9A8E87B3"), "#9A8E87");
    assert.equal(normalizeHex("ebe5e0"), "#EBE5E0");
  });

  it("converts HSL to hex", () => {
    assert.equal(hslToHex(0, 100, 50), "#FF0000");
    assert.equal(hslToHex(120, 100, 50), "#00FF00");
  });

  it("resolves role hex per mode", () => {
    const def = { h: 220, s: 78, lLight: 38, lDark: 72 };
    const light = resolveRoleHex(def, "light");
    const dark = resolveRoleHex(def, "dark");
    assert.notEqual(light, dark);
    assert.match(light, /^#[0-9A-F]{6}$/);
  });

  it("computes luminance ordering", () => {
    assert.ok(luminance("#FFFFFF") > luminance("#000000"));
  });

  it("computes hue delta for chromatic accents", () => {
    assert.ok(hueDelta("#C75B40", "#7C3AED") >= 15);
  });

  it("cousinColorPasses accepts sufficient accent separation", () => {
    assert.ok(cousinColorPasses("#C75B40", "#7C3AED"));
  });

  it("cousinColorPasses rejects verbatim copy", () => {
    assert.equal(cousinColorPasses("#C75B40", "#C75B40"), false);
  });

  it("cousinGroundPasses handles near-black pair", () => {
    assert.ok(cousinGroundPasses("#06080F", "#000000"));
  });

  it("role-spectrum-bright passes cousin-diff vs cream-bright", () => {
    const candidate = createRoleSpectrumGround("light");
    const failures = comparePalettesForCousinDiff(candidate, creamBrightPalette);
    assert.equal(failures.length, 0);
  });

  it("cream-bright clone fails cousin-diff", () => {
    const failures = comparePalettesForCousinDiff(
      { ...creamBrightPalette },
      creamBrightPalette,
    );
    assert.ok(failures.length >= 3);
    assert.ok(failures.some((f) => f.reason.includes("verbatim")));
  });

  it("role-spectrum-dark accent differs from black-prism", () => {
    const candidate = createRoleSpectrumGround("dark");
    assert.ok(deltaE(candidate.accent, blackPrismPalette.accent) >= COUSIN_DIFF_DELTA_E_MIN);
  });
});
