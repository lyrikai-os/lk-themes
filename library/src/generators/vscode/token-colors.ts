import type { ThemePalette, TokenColorRule, SemanticTokenRule } from "../../shared/types.js";

/** Syntax token color rules — high-chroma palette mapped to TextMate scopes. */
export function buildTokenColors(p: ThemePalette): TokenColorRule[] {
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

export function buildSemanticTokenColors(p: ThemePalette): SemanticTokenRule {
  return {
    "function": { foreground: p.syntaxFunction },
    "method": { foreground: p.syntaxFunction },
    "keyword": { foreground: p.syntaxKeyword },
    "type": { foreground: p.syntaxType },
    "class": { foreground: p.syntaxType },
    "interface": { foreground: p.syntaxType },
    "enum": { foreground: p.syntaxType },
    "enumMember": { foreground: p.syntaxType },
    "namespace": { foreground: p.syntaxFunction },
    "variable": { foreground: p.syntaxVariable },
    "parameter": { foreground: p.syntaxDecorator },
    "property": { foreground: p.syntaxProperty },
    "string": { foreground: p.syntaxString },
    "comment": { foreground: p.syntaxComment, fontStyle: "italic" },
    "*.declaration": { foreground: p.syntaxType },
    "*.definition": { foreground: p.syntaxFunction },
    "decorator": { foreground: p.syntaxDecorator },
    "macro": { foreground: p.syntaxDecorator },
  };
}
