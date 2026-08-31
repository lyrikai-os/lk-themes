import type { TextRolePalette, ThemePalette, ThemeVariation } from "../shared/types.js";

/** Canonical HSL + fontStyle table — one text system; lightness tuned per mode. */
export interface TextRoleDefinition {
  h: number;
  s: number;
  lLight: number;
  lDark: number;
  fontStyle?: string;
}

export const ROLE_SPECTRUM_TEXT_ROLES: Record<string, TextRoleDefinition> = {
  function: { h: 220, s: 78, lLight: 38, lDark: 72 },
  method: { h: 220, s: 78, lLight: 38, lDark: 72 },
  keyword: { h: 32, s: 82, lLight: 40, lDark: 70 },
  type: { h: 239, s: 76, lLight: 42, lDark: 74 },
  class: { h: 239, s: 76, lLight: 42, lDark: 74 },
  interface: { h: 234, s: 72, lLight: 44, lDark: 76 },
  variable: { h: 21, s: 80, lLight: 42, lDark: 72 },
  property: { h: 25, s: 78, lLight: 42, lDark: 72 },
  string: { h: 160, s: 68, lLight: 36, lDark: 68 },
  decorator: { h: 293, s: 76, lLight: 42, lDark: 74 },
  macro: { h: 293, s: 76, lLight: 42, lDark: 74 },
  constant: { h: 0, s: 72, lLight: 44, lDark: 70 },
  number: { h: 355, s: 74, lLight: 44, lDark: 70 },
  tag: { h: 200, s: 76, lLight: 40, lDark: 72 },
  comment: { h: 230, s: 18, lLight: 48, lDark: 62, fontStyle: "italic" },
  parameter: { h: 174, s: 62, lLight: 36, lDark: 66, fontStyle: "italic" },
  readonly: { h: 215, s: 28, lLight: 40, lDark: 68 },
  global: { h: 347, s: 78, lLight: 42, lDark: 72, fontStyle: "bold" },
  static: { h: 347, s: 78, lLight: 42, lDark: 72, fontStyle: "bold" },
  namespace: { h: 224, s: 72, lLight: 40, lDark: 70 },
  typeParameter: { h: 270, s: 74, lLight: 42, lDark: 74, fontStyle: "italic" },
  enumMember: { h: 85, s: 62, lLight: 36, lDark: 66 },
  markdownH1: { h: 270, s: 74, lLight: 42, lDark: 74, fontStyle: "bold" },
  markdownH2: { h: 293, s: 76, lLight: 42, lDark: 74, fontStyle: "bold" },
  markdownH3: { h: 347, s: 78, lLight: 42, lDark: 72, fontStyle: "bold" },
  markdownLink: { h: 220, s: 78, lLight: 38, lDark: 72 },
  markdownCode: { h: 239, s: 76, lLight: 42, lDark: 74 },
  markdownQuote: { h: 293, s: 76, lLight: 42, lDark: 74, fontStyle: "italic" },
  bracket1: { h: 32, s: 82, lLight: 40, lDark: 70 },
  bracket2: { h: 293, s: 76, lLight: 42, lDark: 74 },
  bracket3: { h: 220, s: 78, lLight: 38, lDark: 72 },
  bracket4: { h: 239, s: 76, lLight: 42, lDark: 74 },
  bracket5: { h: 160, s: 68, lLight: 36, lDark: 68 },
  bracket6: { h: 25, s: 78, lLight: 42, lDark: 72 },
  error: { h: 0, s: 72, lLight: 44, lDark: 70 },
};

const MODE_COMMENT: Record<"light" | "dark", string> = {
  light: "#6B7099B3",
  dark: "#A0A4CBB3",
};

const MODE_FAINT: Record<"light" | "dark", string> = {
  light: "#1A1D2E66",
  dark: "#E8EAFF66",
};

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

/** Resolve a role's foreground hex for light or dark mode. */
export function resolveRoleHex(role: string, mode: "light" | "dark"): string {
  const def = ROLE_SPECTRUM_TEXT_ROLES[role]!;
  const lightness = mode === "light" ? def.lLight : def.lDark;
  return hslToHex(def.h, def.s, lightness);
}

/** Build the full semantic-rich TextRolePalette for a mode. */
export function buildTextRolePalette(mode: "light" | "dark"): TextRolePalette {
  const hex = (role: string) => resolveRoleHex(role, mode);

  return {
    function: hex("function"),
    method: hex("method"),
    keyword: hex("keyword"),
    type: hex("type"),
    class: hex("class"),
    interface: hex("interface"),
    variable: hex("variable"),
    property: hex("property"),
    string: hex("string"),
    decorator: hex("decorator"),
    macro: hex("macro"),
    constant: hex("constant"),
    number: hex("number"),
    tag: hex("tag"),
    comment: MODE_COMMENT[mode],
    parameter: hex("parameter"),
    readonly: hex("readonly"),
    global: hex("global"),
    static: hex("static"),
    namespace: hex("namespace"),
    typeParameter: hex("typeParameter"),
    enumMember: hex("enumMember"),
    markdownH1: hex("markdownH1"),
    markdownH2: hex("markdownH2"),
    markdownH3: hex("markdownH3"),
    markdownLink: hex("markdownLink"),
    markdownCode: hex("markdownCode"),
    markdownQuote: hex("markdownQuote"),
    bracket1: hex("bracket1"),
    bracket2: hex("bracket2"),
    bracket3: hex("bracket3"),
    bracket4: hex("bracket4"),
    bracket5: hex("bracket5"),
    bracket6: hex("bracket6"),
    faint: MODE_FAINT[mode],
    error: hex("error"),
  };
}

/** Spectral Lyrikai grounds — cool mist (light) or deep indigo-black (dark). Syntax from HSL role table. */
export function createRoleSpectrumGround(mode: "light" | "dark"): ThemePalette {
  const text = buildTextRolePalette(mode);

  if (mode === "light") {
    return {
      creamPaper: "#EEF1F8",
      creamSidebar: "#E4E8F2",
      creamPanel: "#E4E8F2",
      creamElevated: "#F4F6FB",
      creamTabInactive: "#D8DEEA",
      creamTitleBar: "#D8DEEA",
      creamBorder: "#C8D0E0",
      creamBorderSoft: "#B8C2D4",

      inkPrimary: "#1A1D2E",
      inkSecondary: "#2E3250",
      inkMuted: "#6B7099",
      inkFaint: MODE_FAINT.light,

      accent: "#7C3AED",
      accentSoft: "#7C3AED26",
      accentMedium: "#7C3AED4D",
      accentStrong: "#7C3AED80",

      syntaxFunction: text.function,
      syntaxKeyword: text.keyword,
      syntaxDecorator: text.decorator,
      syntaxProperty: text.property,
      syntaxString: text.string,
      syntaxType: text.type,
      syntaxVariable: text.variable,
      syntaxConstant: text.constant,
      syntaxTag: text.tag,
      syntaxComment: text.comment,

      error: text.error,
      warning: resolveRoleHex("keyword", mode),
      info: text.function,
      success: text.string,
    };
  }

  return {
    creamPaper: "#06080F",
    creamSidebar: "#0C0E18",
    creamPanel: "#0C0E18",
    creamElevated: "#1A1D2E",
    creamTabInactive: "#0C0E18",
    creamTitleBar: "#0C0E18",
    creamBorder: "#1A1D2E",
    creamBorderSoft: "#2A3050",

    inkPrimary: "#E8EAFF",
    inkSecondary: "#C8CCF0",
    inkMuted: "#A0A4CB",
    inkFaint: MODE_FAINT.dark,

    accent: "#C084FC",
    accentSoft: "#C084FC26",
    accentMedium: "#C084FC4D",
    accentStrong: "#C084FC80",

    syntaxFunction: text.function,
    syntaxKeyword: text.keyword,
    syntaxDecorator: text.decorator,
    syntaxProperty: text.property,
    syntaxString: text.string,
    syntaxType: text.type,
    syntaxVariable: text.variable,
    syntaxConstant: text.constant,
    syntaxTag: text.tag,
    syntaxComment: text.comment,

    error: text.error,
    warning: resolveRoleHex("keyword", mode),
    info: text.function,
    success: text.string,
  };
}

/** @deprecated Alias — prefer buildTextRolePalette. */
export function createRoleSpectrumTextRoles(mode: "light" | "dark"): TextRolePalette {
  return buildTextRolePalette(mode);
}

export function createRoleSpectrumVariation(mode: "light" | "dark"): ThemeVariation {
  const slug = mode === "light" ? "role-spectrum-bright" : "role-spectrum-dark";
  const label =
    mode === "light" ? "Lyrikai Themes Role Spectrum Bright" : "Lyrikai Themes Role Spectrum Dark";

  return {
    slug,
    label,
    uiTheme: mode === "light" ? "vs" : "vs-dark",
    palette: createRoleSpectrumGround(mode),
    textProfile: "semantic-rich",
    textRoles: buildTextRolePalette(mode),
  };
}
