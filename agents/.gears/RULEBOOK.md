# RULEBOOK — Lyrikai Themes

## Design walls

1. **Original MIT palette** — all hex in `library/src/variations/` must be Lyrikai-authored; no Bearded GPL JSON/hex verbatim.
2. **v1 scope** — editor + workbench tokens only; chat chrome out of scope.
3. **No user settings edits** — never write to user `settings.json`.
4. **No tip / meta wiki** — except explicit allowlist: `.admin/docs/plan-suites/lyrikai-themes/` **and** `docs/wiki/**` (product SoR).

## end_goal_ref

`.admin/docs/plan-suites/lyrikai-themes/END-GOAL.md`

## Extension identity

- Package: `lyrikai-themes`
- Publisher: `lyrikai`
- Id: `lyrikai.lyrikai-themes`
- Skin 01 label: **Lyrikai Themes Cream Bright**

## Build gate

Changes to variations require `npm run build` and committed JSON under `extensions/lyrikai-themes/themes/`.
