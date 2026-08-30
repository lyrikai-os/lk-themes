# GEARS — Lyrikai Themes

**gears_emit_mode:** B (minimal post-build)  
**end_goal_ref:** `.admin/docs/plan-suites/lyrikai-themes/END-GOAL.md`

## Product

Lyrikai Themes — VS Code/Cursor color theme extension (`lyrikai.lyrikai-themes`).

## Pipeline

```
library/src/variations → theme-registry → generators/vscode → extensions/lyrikai-themes/themes/*.json
```

## Commands

| Command | Location | Effect |
|---------|----------|--------|
| `npm run build` | repo root | Regenerate theme JSON |
| `npm run package` | repo root | Build + VSIX |
| F5 | `extensions/lyrikai-themes` | Extension Development Host |

## Active skin

- **cream-bright** → `Lyrikai Themes Cream Bright`
