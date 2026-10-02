import type { TextRolePalette, ThemePalette, ThemeVariation } from "../shared/types.js";
import { accentVariants } from "../shared/palette-helpers.js";

function roles(): TextRolePalette {
  return {
    function: "#7DD3FC", method: "#7DD3FC", keyword: "#C4A0FF", type: "#A78BFA", class: "#A78BFA",
    interface: "#818CF8", variable: "#F0ABFC", property: "#E879F9", string: "#6EE7B7", decorator: "#F472B6",
    macro: "#F472B6", constant: "#FCA5A5", number: "#FDBA74", tag: "#67E8F9", comment: "#6B7280B3",
    parameter: "#94A3B8", readonly: "#CBD5E1", global: "#FDE68A", static: "#FDE68A", namespace: "#93C5FD",
    typeParameter: "#C084FC", enumMember: "#86EFAC", markdownH1: "#C084FC", markdownH2: "#A78BFA",
    markdownH3: "#818CF8", markdownLink: "#7DD3FC", markdownCode: "#A78BFA", markdownQuote: "#F472B6",
    bracket1: "#C4A0FF", bracket2: "#F472B6", bracket3: "#7DD3FC", bracket4: "#A78BFA", bracket5: "#6EE7B7",
    bracket6: "#E879F9", faint: "#E8EAFF33", error: "#FCA5A5",
  };
}

const palette: ThemePalette = {
  creamPaper: "#0A0C1E", creamSidebar: "#0E1024", creamPanel: "#0E1024", creamElevated: "#161A32",
  creamTabInactive: "#0E1024", creamTitleBar: "#0E1024", creamBorder: "#1E2240", creamBorderSoft: "#2A3058",
  inkPrimary: "#E8EAFF", inkSecondary: "#C8CCF0", inkMuted: "#8B90B8", inkFaint: "#E8EAFF33",
  ...accentVariants("#9D6BFF"),
  syntaxFunction: "#7DD3FC", syntaxKeyword: "#C4A0FF", syntaxDecorator: "#F472B6", syntaxProperty: "#E879F9",
  syntaxString: "#6EE7B7", syntaxType: "#A78BFA", syntaxVariable: "#F0ABFC", syntaxConstant: "#FCA5A5",
  syntaxTag: "#67E8F9", syntaxComment: "#6B7280B3", error: "#FCA5A5", warning: "#FDBA74", info: "#7DD3FC", success: "#6EE7B7",
};

export const cosmicVoid: ThemeVariation = {
  slug: "cosmic-void", label: "Lyrikai Themes Cosmic Void", uiTheme: "vs-dark",
  palette, textProfile: "semantic-rich", textRoles: roles(),
};
