import type {
  TextRolePalette,
  ThemePalette,
  TokenColorRule,
  SemanticTokenRule,
} from "../../shared/types.js";
import { ROLE_SPECTRUM_TEXT_ROLES } from "../../variations/role-spectrum-shared.js";

/** Classic syntax token color rules — Skins 01–02. */
export function buildTokenColorsClassic(p: ThemePalette): TokenColorRule[] {
  return [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: p.syntaxComment, fontStyle: "italic" },
    },
    {
      scope: ["string", "punctuation.definition.string", "constant.other.symbol"],
      settings: { foreground: p.syntaxString },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
        "keyword.other.import",
      ],
      settings: { foreground: p.syntaxKeyword },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
        "meta.method",
      ],
      settings: { foreground: p.syntaxFunction },
    },
    {
      scope: [
        "entity.name.type",
        "support.type",
        "support.class",
        "entity.other.inherited-class",
        "storage.type.class",
        "storage.type.interface",
      ],
      settings: { foreground: p.syntaxType },
    },
    {
      scope: [
        "variable",
        "variable.other",
        "variable.parameter",
        "entity.name.variable",
      ],
      settings: { foreground: p.syntaxVariable },
    },
    {
      scope: [
        "variable.other.property",
        "support.type.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
      ],
      settings: { foreground: p.syntaxProperty },
    },
    {
      scope: [
        "entity.name.function.decorator",
        "meta.decorator",
        "punctuation.definition.decorator",
      ],
      settings: { foreground: p.syntaxDecorator },
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: p.syntaxProperty },
    },
    {
      scope: ["constant", "support.constant"],
      settings: { foreground: p.syntaxConstant },
    },
    {
      scope: ["entity.name.tag", "punctuation.definition.tag"],
      settings: { foreground: p.syntaxTag },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: { foreground: p.syntaxKeyword },
    },
    {
      scope: ["punctuation", "meta.brace", "keyword.operator"],
      settings: { foreground: p.inkFaint },
    },
    {
      scope: ["markup.heading", "entity.name.section"],
      settings: { foreground: p.syntaxKeyword, fontStyle: "bold" },
    },
    {
      scope: ["markup.bold"],
      settings: { foreground: p.syntaxVariable, fontStyle: "bold" },
    },
    {
      scope: ["markup.italic"],
      settings: { foreground: p.syntaxProperty, fontStyle: "italic" },
    },
    {
      scope: ["markup.underline.link"],
      settings: { foreground: p.syntaxFunction },
    },
    {
      scope: ["markup.quote"],
      settings: { foreground: p.syntaxDecorator, fontStyle: "italic" },
    },
    {
      scope: ["markup.raw", "markup.fenced_code"],
      settings: { foreground: p.syntaxType },
    },
    {
      scope: ["source.diff markup.inserted"],
      settings: { foreground: p.syntaxString },
    },
    {
      scope: ["source.diff markup.deleted"],
      settings: { foreground: p.syntaxConstant },
    },
    {
      scope: ["invalid", "invalid.illegal"],
      settings: { foreground: p.error },
    },
  ];
}

/** Semantic-rich token color rules — Skin 03+. Mode-agnostic; driven by shared TextRolePalette. */
export function buildTokenColorsSemanticRich(text: TextRolePalette): TokenColorRule[] {
  const def = ROLE_SPECTRUM_TEXT_ROLES;

  return [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: text.comment, fontStyle: def.comment.fontStyle },
    },
    {
      scope: ["string", "punctuation.definition.string", "constant.other.symbol"],
      settings: { foreground: text.string },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
        "keyword.other.import",
        "keyword.other",
      ],
      settings: { foreground: text.keyword },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
        "meta.method",
      ],
      settings: { foreground: text.function },
    },
    {
      scope: [
        "entity.name.type",
        "support.type",
        "support.class",
        "entity.other.inherited-class",
        "storage.type.class",
        "storage.type.interface",
      ],
      settings: { foreground: text.type },
    },
    {
      scope: ["variable", "variable.other", "entity.name.variable"],
      settings: { foreground: text.variable },
    },
    {
      scope: ["variable.parameter", "meta.parameter"],
      settings: { foreground: text.parameter, fontStyle: def.parameter.fontStyle },
    },
    {
      scope: [
        "variable.other.property",
        "support.type.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
      ],
      settings: { foreground: text.property },
    },
    {
      scope: [
        "entity.name.function.decorator",
        "meta.decorator",
        "punctuation.definition.decorator",
      ],
      settings: { foreground: text.decorator },
    },
    {
      scope: ["constant.numeric"],
      settings: { foreground: text.number },
    },
    {
      scope: ["constant", "support.constant", "constant.language"],
      settings: { foreground: text.constant },
    },
    {
      scope: ["entity.name.tag", "punctuation.definition.tag"],
      settings: { foreground: text.tag },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: { foreground: text.keyword },
    },
    {
      scope: ["entity.name.namespace", "support.type.namespace"],
      settings: { foreground: text.namespace },
    },
    {
      scope: ["entity.name.type.parameter", "meta.type.parameters"],
      settings: { foreground: text.typeParameter, fontStyle: def.typeParameter.fontStyle },
    },
    {
      scope: ["variable.other.enummember", "variable.other.enumMember"],
      settings: { foreground: text.enumMember },
    },
    {
      scope: ["variable.other.readonly", "storage.modifier.readonly"],
      settings: { foreground: text.readonly },
    },
    {
      scope: ["variable.other.global", "storage.modifier.global"],
      settings: { foreground: text.global, fontStyle: def.global.fontStyle },
    },
    {
      scope: ["storage.modifier.static", "variable.other.static"],
      settings: { foreground: text.static, fontStyle: def.static.fontStyle },
    },
    {
      scope: ["punctuation", "meta.brace", "keyword.operator"],
      settings: { foreground: text.faint },
    },
    {
      scope: ["markup.heading.1", "heading.1"],
      settings: { foreground: text.markdownH1, fontStyle: def.markdownH1.fontStyle },
    },
    {
      scope: ["markup.heading.2", "heading.2"],
      settings: { foreground: text.markdownH2, fontStyle: def.markdownH2.fontStyle },
    },
    {
      scope: ["markup.heading.3", "heading.3"],
      settings: { foreground: text.markdownH3, fontStyle: def.markdownH3.fontStyle },
    },
    {
      scope: ["markup.heading", "entity.name.section"],
      settings: { foreground: text.markdownH1, fontStyle: def.markdownH1.fontStyle },
    },
    {
      scope: ["markup.bold"],
      settings: { foreground: text.variable, fontStyle: "bold" },
    },
    {
      scope: ["markup.italic"],
      settings: { foreground: text.property, fontStyle: "italic" },
    },
    {
      scope: ["markup.underline.link", "string.other.link"],
      settings: { foreground: text.markdownLink },
    },
    {
      scope: ["markup.quote"],
      settings: { foreground: text.markdownQuote, fontStyle: def.markdownQuote.fontStyle },
    },
    {
      scope: ["markup.raw", "markup.fenced_code", "markup.inline.raw"],
      settings: { foreground: text.markdownCode },
    },
    {
      scope: ["source.diff markup.inserted"],
      settings: { foreground: text.string },
    },
    {
      scope: ["source.diff markup.deleted"],
      settings: { foreground: text.constant },
    },
    {
      scope: ["invalid", "invalid.illegal"],
      settings: { foreground: text.error },
    },
  ];
}

/** @deprecated Use buildTokenColorsClassic — kept for backward compat. */
export function buildTokenColors(p: ThemePalette): TokenColorRule[] {
  return buildTokenColorsClassic(p);
}

export function buildSemanticTokenColorsClassic(p: ThemePalette): SemanticTokenRule {
  return {
    function: { foreground: p.syntaxFunction },
    method: { foreground: p.syntaxFunction },
    keyword: { foreground: p.syntaxKeyword },
    type: { foreground: p.syntaxType },
    class: { foreground: p.syntaxType },
    interface: { foreground: p.syntaxType },
    enum: { foreground: p.syntaxType },
    enumMember: { foreground: p.syntaxType },
    namespace: { foreground: p.syntaxFunction },
    variable: { foreground: p.syntaxVariable },
    parameter: { foreground: p.syntaxDecorator },
    property: { foreground: p.syntaxProperty },
    string: { foreground: p.syntaxString },
    comment: { foreground: p.syntaxComment, fontStyle: "italic" },
    "*.declaration": { foreground: p.syntaxType },
    "*.definition": { foreground: p.syntaxFunction },
    decorator: { foreground: p.syntaxDecorator },
    macro: { foreground: p.syntaxDecorator },
  };
}

/** Semantic-rich semantic token selectors — ~35 rules, mode-agnostic. */
export function buildSemanticTokenColorsRich(text: TextRolePalette): SemanticTokenRule {
  const def = ROLE_SPECTRUM_TEXT_ROLES;

  return {
    function: { foreground: text.function },
    method: { foreground: text.method },
    "function.declaration": { foreground: text.function, fontStyle: "bold" },
    "method.declaration": { foreground: text.method, fontStyle: "bold" },
    keyword: { foreground: text.keyword },
    type: { foreground: text.type },
    class: { foreground: text.class },
    interface: { foreground: text.interface },
    enum: { foreground: text.type },
    enumMember: { foreground: text.enumMember },
    namespace: { foreground: text.namespace },
    variable: { foreground: text.variable },
    "variable.readonly": { foreground: text.readonly },
    "variable.defaultLibrary": { foreground: text.global, fontStyle: def.global.fontStyle },
    parameter: { foreground: text.parameter, fontStyle: def.parameter.fontStyle },
    property: { foreground: text.property },
    "property.readonly": { foreground: text.readonly },
    string: { foreground: text.string },
    number: { foreground: text.number },
    comment: { foreground: text.comment, fontStyle: def.comment.fontStyle },
    macro: { foreground: text.macro },
    decorator: { foreground: text.decorator },
    typeParameter: { foreground: text.typeParameter, fontStyle: def.typeParameter.fontStyle },
    "*.declaration": { foreground: text.type },
    "*.definition": { foreground: text.function, fontStyle: "bold" },
    "*.async": { fontStyle: "italic" },
    "*.readonly": { foreground: text.readonly },
    "*.static": { foreground: text.static, fontStyle: def.static.fontStyle },
    "*.global": { foreground: text.global, fontStyle: def.global.fontStyle },
    "*.defaultLibrary": { foreground: text.global, fontStyle: def.global.fontStyle },
    "selfParameter": { foreground: text.keyword, fontStyle: "italic" },
    "struct": { foreground: text.type },
    "event": { foreground: text.type },
    "modifier": { foreground: text.keyword },
    "operator": { foreground: text.faint },
    "regexp": { foreground: text.string },
    "label": { foreground: text.property },
  };
}

/** @deprecated Use buildSemanticTokenColorsClassic — kept for backward compat. */
export function buildSemanticTokenColors(p: ThemePalette): SemanticTokenRule {
  return buildSemanticTokenColorsClassic(p);
}
