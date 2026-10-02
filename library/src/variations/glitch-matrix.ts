import type { TextRolePalette, ThemePalette, ThemeVariation } from "../shared/types.js";
import { accentVariants } from "../shared/palette-helpers.js";

function roles(): TextRolePalette {
  return {
    function: "#00FF88", method: "#00FF88", keyword: "#FF00AA", type: "#00CC66", class: "#00CC66",
    interface: "#33FF99", variable: "#FF66CC", property: "#FF3399", string: "#00FF66", decorator: "#FF00FF",
    macro: "#FF00FF", constant: "#FF4466", number: "#FFAA00", tag: "#00FFAA", comment: "#4ADE8080",
    parameter: "#86EFAC", readonly: "#A7F3D0", global: "#FF00AA", static: "#FF00AA", namespace: "#00FF88",
    typeParameter: "#FF66CC", enumMember: "#00FF66", markdownH1: "#00FF88", markdownH2: "#FF00AA",
    markdownH3: "#00CC66", markdownLink: "#00FF88", markdownCode: "#00CC66", markdownQuote: "#FF00FF",
    bracket1: "#FF00AA", bracket2: "#FF00FF", bracket3: "#00FF88", bracket4: "#00CC66", bracket5: "#00FF66",
    bracket6: "#FF3399", faint: "#00FF4133", error: "#FF4466",
  };
}

const palette: ThemePalette = {
  creamPaper: "#0A120E", creamSidebar: "#0E1812", creamPanel: "#0E1812", creamElevated: "#162018",
  creamTabInactive: "#0E1812", creamTitleBar: "#0E1812", creamBorder: "#1A2820", creamBorderSoft: "#243830",
  inkPrimary: "#CCFFDD", inkSecondary: "#99EEBB", inkMuted: "#5A9A70", inkFaint: "#CCFFDD33",
  ...accentVariants("#00FF66"),
  syntaxFunction: "#00FF88", syntaxKeyword: "#FF00AA", syntaxDecorator: "#FF00FF", syntaxProperty: "#FF3399",
  syntaxString: "#00FF66", syntaxType: "#00CC66", syntaxVariable: "#FF66CC", syntaxConstant: "#FF4466",
  syntaxTag: "#00FFAA", syntaxComment: "#4ADE8080", error: "#FF4466", warning: "#FFAA00", info: "#00FF88", success: "#00FF66",
};

export const glitchMatrix: ThemeVariation = {
  slug: "glitch-matrix", label: "Lyrikai Themes Glitch Matrix", uiTheme: "vs-dark",
  palette, textProfile: "semantic-rich", textRoles: roles(),
};
