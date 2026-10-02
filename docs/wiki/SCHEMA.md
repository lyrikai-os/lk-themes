# Schema — Theme Types

Reference for the TypeScript types in `library/src/shared/types.ts` and the HSL role system in `library/src/variations/role-spectrum-shared.ts`.

## ThemeVariation

Top-level unit registered in `theme-registry.ts` and emitted as one VS Code theme JSON.

| Field | Type | Notes |
|-------|------|-------|
| `slug` | `string` | kebab-case; filename stem `lyrikai-themes-{slug}.json` |
| `label` | `string` | Display name, e.g. `Lyrikai Themes Cream Bright` |
| `uiTheme` | `"vs" \| "vs-dark" \| "hc-black" \| "hc-light"` | Base workbench chrome |
| `palette` | `ThemePalette` | Ground, ink, accent, syntax hex |
| `textProfile` | `"classic" \| "semantic-rich"` | optional; default classic |
| `textRoles` | `TextRolePalette` | optional; resolved role hex for semantic-rich |

## ThemePalette

Flat hex tokens for **classic** skins (and ground/ink/accent chrome for all skins). All values original MIT.

### Ground

| Token | Purpose |
|-------|---------|
| `creamPaper` | Editor background |
| `creamSidebar` | Side bar |
| `creamPanel` | Panel background |
| `creamElevated` | Elevated surfaces |
| `creamTabInactive` | Inactive editor tabs |
| `creamTitleBar` | Title bar |
| `creamBorder` | Primary borders |
| `creamBorderSoft` | Subtle dividers |

*(Naming retains “cream” prefix from Skin 01; dark skins reuse the same keys with dark hex values.)*

### Ink

| Token | Purpose |
|-------|---------|
| `inkPrimary` | Body / default foreground |
| `inkSecondary` | Secondary UI text |
| `inkMuted` | De-emphasized labels |
| `inkFaint` | Very subtle chrome text |

### Accent

| Token | Purpose |
|-------|---------|
| `accent` | Primary UI accent (activity bar, active tab, links) |
| `accentSoft` | Hover / secondary accent |
| `accentMedium` | Mid emphasis |
| `accentStrong` | Strong emphasis |

### Syntax (high chroma)

| Token | Typical scope |
|-------|---------------|
| `syntaxFunction` | Functions, methods |
| `syntaxKeyword` | Keywords |
| `syntaxDecorator` | Decorators, macros |
| `syntaxProperty` | Properties |
| `syntaxString` | Strings |
| `syntaxType` | Types, classes |
| `syntaxVariable` | Variables |
| `syntaxConstant` | Constants, numbers |
| `syntaxTag` | Markup tags |
| `syntaxComment` | Comments |

### Semantic UI

| Token | Purpose |
|-------|---------|
| `error` | Error states |
| `warning` | Warnings |
| `info` | Info |
| `success` | Success |

## TextRolePalette

Extended role → hex map for **semantic-rich** skins. Populated by resolving HSL definitions per mode. Includes core syntax, extended semantic roles, markdown headings, bracket rainbow, and utility (`faint`, `error`).

Key role groups:

- **Core:** `function`, `method`, `keyword`, `type`, `class`, `interface`, `variable`, `property`, `string`, `decorator`, `macro`, `constant`, `number`, `tag`, `comment`, `parameter`
- **Extended:** `readonly`, `global`, `static`, `namespace`, `typeParameter`, `enumMember`
- **Markdown:** `markdownH1` … `markdownH3`, `markdownLink`, `markdownCode`, `markdownQuote`
- **Brackets:** `bracket1` … `bracket6` (rainbow by nesting role)
- **Utility:** `faint`, `error`

## textProfile

| Value | Behavior |
|-------|----------|
| `classic` | Generator maps `ThemePalette` syntax tokens to TextMate scopes |
| `semantic-rich` | Generator uses `TextRolePalette` + `semanticTokenColors`; one HSL table, two mode lightness columns |

Role Spectrum (Skin 03) sets `textProfile: "semantic-rich"` and shares **`ROLE_SPECTRUM_TEXT_ROLES`**.

## HSL role definitions

```typescript
interface TextRoleDefinition {
  h: number;        // hue 0–360
  s: number;        // saturation 0–100
  lLight: number;   // lightness on vs (bright) ground
  lDark: number;    // lightness on vs-dark ground
  fontStyle?: string;
}
```

`resolveRoleHex(role, mode)` converts HSL → `#RRGGBB` for the active mode. **Forbidden:** duplicate hue tables per mode — use `lLight` / `lDark` only.

Example role hues (Role Spectrum):

| Role | Hue family |
|------|------------|
| Functions / methods | Azure ~220 |
| Keywords | Amber ~32 |
| Types / class | Indigo ~239 |
| Strings | Emerald ~160 |
| Decorators | Fuchsia ~293 |

Full table: `library/src/variations/role-spectrum-shared.ts`.

## Output: VscodeThemeJson

Generator output shape:

| Field | Purpose |
|-------|---------|
| `$schema` | VS Code theme schema URL |
| `name` | Theme label |
| `type` | `light` \| `dark` \| `hc` |
| `colors` | Workbench color map |
| `tokenColors` | TextMate rules |
| `semanticHighlighting` | optional boolean |
| `semanticTokenColors` | optional semantic token overrides |

## Related

- Architecture: [ARCHITECTURE.md](./ARCHITECTURE.md)
- Protocol: [THEME-CARD-PROTOCOL.md](./THEME-CARD-PROTOCOL.md)
- Catalog: [CATALOG.md](./CATALOG.md)
