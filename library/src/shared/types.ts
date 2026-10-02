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

/** Extended text-role palette for semantic-rich skins (Skin 03+). Mode-agnostic hues; alpha tuned per mode. */
export interface TextRolePalette {
  // Core syntax
  function: string;
  method: string;
  keyword: string;
  type: string;
  class: string;
  interface: string;
  variable: string;
  property: string;
  string: string;
  decorator: string;
  macro: string;
  constant: string;
  number: string;
  tag: string;
  comment: string;
  parameter: string;

  // Extended semantic
  readonly: string;
  global: string;
  static: string;
  namespace: string;
  typeParameter: string;
  enumMember: string;

  // Markdown
  markdownH1: string;
  markdownH2: string;
  markdownH3: string;
  markdownLink: string;
  markdownCode: string;
  markdownQuote: string;

  // Bracket rainbow + utility
  bracket1: string;
  bracket2: string;
  bracket3: string;
  bracket4: string;
  bracket5: string;
  bracket6: string;
  faint: string;
  error: string;
}

export type ReadabilityTier = "A" | "B" | "C";

export type TextProfile = "classic" | "semantic-rich" | "genre";

/** Locked theme card metadata — drives factory registration and cousin-diff validation. */
export interface ThemeCard {
  slug: string;
  label: string;
  uiTheme: "vs" | "vs-dark" | "hc-black" | "hc-light";
  /** Research / concept family tag (e.g. warm coffee cream, spectral roles). */
  family: string;
  mood: string;
  readabilityTier: ReadabilityTier;
  textProfile: TextProfile;
  /** Genre / experimental skins only. */
  experimental?: boolean;
  /** Cousin-diff anchor slug; omit for anchor themes. */
  nearestCousin?: string;
}

export interface ThemeVariation {
  slug: string;
  label: string;
  uiTheme: "vs" | "vs-dark" | "hc-black" | "hc-light";
  palette: ThemePalette;
  textProfile?: "classic" | "semantic-rich";
  textRoles?: TextRolePalette;
  /** Source card metadata (Unit 5 factory). */
  card?: ThemeCard;
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
