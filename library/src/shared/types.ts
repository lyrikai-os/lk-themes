/** Shared palette tokens for a theme variation. All hex values are original MIT work. */
export interface ThemePalette {
  // Ground
  creamPaper: string;
  creamSidebar: string;
  creamPanel: string;
  creamElevated: string;
  creamTabInactive: string;
  creamTitleBar: string;
  creamBorder: string;
  creamBorderSoft: string;

  // Ink
  inkPrimary: string;
  inkSecondary: string;
  inkMuted: string;
  inkFaint: string;

  // Accent (terracotta/coral cousin)
  accent: string;
  accentSoft: string;
  accentMedium: string;
  accentStrong: string;

  // Syntax — high chroma
  syntaxFunction: string;
  syntaxKeyword: string;
  syntaxDecorator: string;
  syntaxProperty: string;
  syntaxString: string;
  syntaxType: string;
  syntaxVariable: string;
  syntaxConstant: string;
  syntaxTag: string;
  syntaxComment: string;

  // Semantic
  error: string;
  warning: string;
  info: string;
  success: string;
}

export interface ThemeVariation {
  slug: string;
  label: string;
  uiTheme: "vs" | "vs-dark" | "hc-black" | "hc-light";
  palette: ThemePalette;
}

export interface TokenColorRule {
  scope: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
}

export interface SemanticTokenRule {
  [selector: string]: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface VscodeThemeJson {
  $schema: string;
  name: string;
  type?: "light" | "dark" | "hc";
  colors: Record<string, string>;
  tokenColors: TokenColorRule[];
  semanticHighlighting?: boolean;
  semanticTokenColors?: SemanticTokenRule;
}
