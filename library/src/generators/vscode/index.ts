import type { ThemeVariation, VscodeThemeJson } from "../../shared/types.js";
import { buildUiColors } from "./ui-colors.js";
import { buildTokenColors, buildSemanticTokenColors } from "./token-colors.js";

export function generateVscodeTheme(variation: ThemeVariation): VscodeThemeJson {
  const { palette, label } = variation;

  return {
    $schema: "vscode://schemas/color-theme",
    name: label,
    type: variation.uiTheme === "vs-dark" ? "dark" : "light",
    colors: buildUiColors(palette),
    tokenColors: buildTokenColors(palette),
    semanticHighlighting: true,
    semanticTokenColors: buildSemanticTokenColors(palette),
  };
}

export function themeOutputFilename(slug: string): string {
  return `lyrikai-themes-${slug}.json`;
}
