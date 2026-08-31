import type { ThemeVariation, VscodeThemeJson } from "../../shared/types.js";
import { buildHighlightColors, buildUiColors } from "./ui-colors.js";
import {
  buildSemanticTokenColorsClassic,
  buildSemanticTokenColorsRich,
  buildTokenColorsClassic,
  buildTokenColorsSemanticRich,
} from "./token-colors.js";

export function generateVscodeTheme(variation: ThemeVariation): VscodeThemeJson {
  const { palette, label, textProfile, textRoles } = variation;
  const isSemanticRich = textProfile === "semantic-rich" && textRoles != null;

  const colors = isSemanticRich
    ? { ...buildUiColors(palette), ...buildHighlightColors(textRoles, palette) }
    : buildUiColors(palette);

  const tokenColors = isSemanticRich
    ? buildTokenColorsSemanticRich(textRoles)
    : buildTokenColorsClassic(palette);

  const semanticTokenColors = isSemanticRich
    ? buildSemanticTokenColorsRich(textRoles)
    : buildSemanticTokenColorsClassic(palette);

  return {
    $schema: "vscode://schemas/color-theme",
    name: label,
    type: variation.uiTheme === "vs-dark" ? "dark" : "light",
    colors,
    tokenColors,
    semanticHighlighting: true,
    semanticTokenColors,
  };
}

export function themeOutputFilename(slug: string): string {
  return `lyrikai-themes-${slug}.json`;
}
