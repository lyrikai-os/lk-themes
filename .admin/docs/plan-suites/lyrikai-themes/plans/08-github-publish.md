# Plan 08 — GitHub Publish

**Status:** planned  
**Unit:** — (release infra)  
**Version gate:** per wave (0.4.0, 0.5.0, 0.6.0, 1.0.0)

## Goal

Publish Lyrikai Themes to the public GitHub org repo **`lyrikai-os/lk-themes`**, align extension `repository` metadata, establish **release tag + VSIX** milestones per wave, and document **VSIX gitignore policy**.

**Target URL:** https://github.com/lyrikai-os/lk-themes

## Stop condition

- Extension `package.json` `repository.url` → `https://github.com/lyrikai-os/lk-themes` (not `ide-styles`).
- Remote `origin` (or documented publish remote) points to `lyrikai-os/lk-themes`.
- Release tags exist for shipped milestones (at minimum `v0.3.1` retro + wave tags as shipped).
- VSIX policy documented in wiki INSTALL + this plan.
- Root/README links to public repo where appropriate.
- User **GO** on publish actions (push is never implicit).

## In scope

- Update `extensions/lyrikai-themes/package.json`:
  ```json
  "repository": {
    "type": "git",
    "url": "https://github.com/lyrikai-os/lk-themes"
  }
  ```
- Publish strategy doc section (wiki or BPS):
  - **Monorepo extract vs mirror** — decide whether `lk-themes` is extension-only subtree or full `library/` + `extensions/` mirror from `ide-styles`
  - Recommended: publish `library/` + `extensions/lyrikai-themes/` + `docs/wiki/` + root workspace `package.json` as public surface
- **Release tags** aligned to extension semver:
  | Tag | When |
  |-----|------|
  | `v0.3.1` | Current 4-skin baseline (retro tag if needed) |
  | `v0.4.0` | After Wave A |
  | `v0.5.0` | After Wave B |
  | `v0.6.0` | After Wave C |
  | `v1.0.0` | After Wave D closeout |
- **GitHub Releases** — attach VSIX asset per tag (`releases/lyrikai-themes-{version}.vsix`)
- **VSIX gitignore policy:**
  - Option A (recommended): gitignore `extensions/lyrikai-themes/releases/*.vsix`; build in CI/release only; attach to GitHub Release
  - Option B: commit VSIX for convenience (document size tradeoff)
  - Pick one in wiki INSTALL; apply `.gitignore` rule consistently
- Update `docs/wiki/INSTALL.md` clone URL to `lk-themes`

## Out of scope

- VS Code Marketplace publish (optional later)
- Changing theme palettes
- Cursor agent chrome
- Tip / meta wiki
- Running `gear-set` or Hive Paper

## Prerequisites

- Plan 01 complete; extension installable.
- Plan 02 recommended — wiki INSTALL page exists.
- For `v1.0.0` tag: Plan 07 complete.
- GitHub org access to `lyrikai-os/lk-themes` (create repo if missing).
- User **GO** on push and remote changes.

## Ordered steps

1. **Confirm repo strategy** — subtree mirror vs standalone; document in wiki ARCHITECTURE.
2. **Create `lyrikai-os/lk-themes`** on GitHub if not exists (empty or with README).
3. **Update `repository.url`** in extension `package.json`.
4. **Apply VSIX gitignore policy** — edit root or extension `.gitignore`; document in INSTALL.
5. **Prepare publish branch** — ensure `library/`, `extensions/lyrikai-themes/`, `docs/wiki/` (if exists) are publish-ready; no `.admin/` secrets.
6. **Initial push** — user GO required; set remote; push main.
7. **Retro tag `v0.3.1`** — annotate 4-skin baseline; attach VSIX if policy allows.
8. **Per-wave releases** — after each wave plan completes, tag + GitHub Release + VSIX asset.
9. **Update root README** — public clone instructions point to `lk-themes`.
10. **Verify** — clone fresh repo; `npm install && npm run build`; F5 or VSIX install.

## Verification

1. `repository.url` in packaged extension metadata resolves to `lyrikai-os/lk-themes`.
2. Fresh clone from public URL builds successfully.
3. GitHub Releases page shows tags matching extension versions.
4. VSIX policy consistent (.gitignore vs committed) and documented.
5. No push occurred without explicit user GO (audit handoff note).

## Handoff

- **Deliverables:** remote configured, metadata updated, tag/release playbook, gitignore policy.
- **Ongoing:** repeat step 8 after each wave GO.
- **Paper ≠ GO** — no push, remote, or tag without user authorization.

## Next dependency

- None within v1 program — optional marketplace publish or v2 theme program would be a new suite unit.
