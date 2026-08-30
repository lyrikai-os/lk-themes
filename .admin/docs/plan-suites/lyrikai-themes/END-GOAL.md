# Lyrikai Themes — END-GOAL

**Product:** Lyrikai Themes  
**Extension id:** `lyrikai.lyrikai-themes`  
**Publisher:** lyrikai  
**License:** MIT (all original work)

## North star

Ship a maintainable theme factory: **library/** holds variations + generator (source of truth); **extensions/lyrikai-themes/** is the installable VS Code/Cursor extension. Skin 01 **Lyrikai Themes Cream Bright** activates in the Color Theme picker on F5 or VSIX install.

## v1 scope (this build)

- Editor + workbench UI tokens
- Token colors + semantic highlighting for common languages
- Build pipeline: `npm run build` → committed JSON in extension `themes/`
- Package: `npx @vscode/vsce package` → `releases/*.vsix`

## Out of scope (v1)

- Chat / inline-AI chrome customization
- Re-app integration
- Tip / lyrikai-meta wiki writes

## Skin roadmap

| Slug | Label | Status |
|------|-------|--------|
| `cream-bright` | Lyrikai Themes Cream Bright | v1 — shipped |
| *(future)* | — | not started |

## Design walls

- Inspired-by Coffee Cream **feeling only** — no Bearded GPL hex/JSON verbatim
- Avoid purple-indigo glow, Inter-as-hero, muddy taupe syntax
- Do not edit user `settings.json`

## Verification

1. `npm install && npm run build` — exit 0
2. `npx @vscode/vsce package` in extension dir — VSIX in `releases/`
3. F5 Extension Development Host → **Preferences: Color Theme** → **Lyrikai Themes Cream Bright**
