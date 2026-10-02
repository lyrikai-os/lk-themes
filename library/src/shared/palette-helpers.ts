import type { ThemePalette } from "./types.js";

/** Build accent alpha variants from a base #RRGGBB hex. */
export function accentVariants(hex: string): Pick<
  ThemePalette,
  "accent" | "accentSoft" | "accentMedium" | "accentStrong"
> {
  const base = hex.slice(0, 7).toUpperCase();
  return {
    accent: base,
    accentSoft: `${base}26`,
    accentMedium: `${base}4D`,
    accentStrong: `${base}80`,
  };
}

/** Build a classic genre ThemePalette from core tokens. */
export function buildClassicPalette(params: {
  ground: {
    paper: string;
    sidebar: string;
    panel: string;
    elevated: string;
    tabInactive: string;
    titleBar: string;
    border: string;
    borderSoft: string;
  };
  ink: {
    primary: string;
    secondary: string;
    muted: string;
    faint: string;
  };
  accent: string;
  syntax: {
    function: string;
    keyword: string;
    decorator: string;
    property: string;
    string: string;
    type: string;
    variable: string;
    constant: string;
    tag: string;
    comment: string;
  };
  semantic?: {
    error?: string;
    warning?: string;
    info?: string;
    success?: string;
  };
}): ThemePalette {
  const accents = accentVariants(params.accent);
  const sem = params.semantic ?? {};

  return {
    creamPaper: params.ground.paper,
    creamSidebar: params.ground.sidebar,
    creamPanel: params.ground.panel,
    creamElevated: params.ground.elevated,
    creamTabInactive: params.ground.tabInactive,
    creamTitleBar: params.ground.titleBar,
    creamBorder: params.ground.border,
    creamBorderSoft: params.ground.borderSoft,

    inkPrimary: params.ink.primary,
    inkSecondary: params.ink.secondary,
    inkMuted: params.ink.muted,
    inkFaint: params.ink.faint,

    ...accents,

    syntaxFunction: params.syntax.function,
    syntaxKeyword: params.syntax.keyword,
    syntaxDecorator: params.syntax.decorator,
    syntaxProperty: params.syntax.property,
    syntaxString: params.syntax.string,
    syntaxType: params.syntax.type,
    syntaxVariable: params.syntax.variable,
    syntaxConstant: params.syntax.constant,
    syntaxTag: params.syntax.tag,
    syntaxComment: params.syntax.comment,

    error: sem.error ?? params.syntax.constant,
    warning: sem.warning ?? params.syntax.keyword,
    info: sem.info ?? params.syntax.function,
    success: sem.success ?? params.syntax.string,
  };
}
