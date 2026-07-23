# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio of José Enrique Narváez at [jenarvaezg.github.io](https://jenarvaezg.github.io). Bilingual (English default, Spanish at `/es/`). Static Astro site deployed to GitHub Pages on every push to `main`.

## Commands

```bash
npm run dev          # Astro dev server (HMR)
npm run check        # Astro type-check (used in CI)
npm run build        # Production build into dist/
npm run preview      # Preview the built site
npm run sync:profile # Generate the projects/AoC markdown blocks for jenarvaezg/README.md
```

`npm run sync:profile` without arguments prints to stdout. Pass `-- --write ../jenarvaezg/README.md` to rewrite the markers in the profile repo in place.

## Architecture

### One source of truth: `src/data/`

- **`src/data/resume.ts`** — typed export hub for every section (hero, about, experience, skills, education, languages, nav). Components import from here, never inline copy.
- **`src/data/projects.json`** — canonical project list. Consumed by `resume.ts` *and* by `scripts/generate-profile-readme.mjs` to keep the GitHub profile repo (`jenarvaezg/README.md`) in sync.
- **`src/data/aoc.json`** — canonical Advent of Code entries. Same dual-consumer pattern.

If you add/remove a project, edit `projects.json` only. `resume.ts` re-exports it; the profile README gets the change via `npm run sync:profile`.

### Pages and i18n

```
src/pages/index.astro     → /         (lang="en")
src/pages/es/index.astro  → /es/      (lang="es")
```

Both pages are identical except for the `lang` constant passed into the same components. i18n routing is configured in `astro.config.mjs` with `prefixDefaultLocale: false` (English has no prefix). Tests, link checks, and SEO should treat `/` as canonical for English.

### Component contract

All section components accept `{ lang: Lang }` and pull their copy from `src/data/resume.ts`. No hardcoded user-facing strings inside components.

```
Layout.astro → Header → Hero → About → Experience → Skills → Projects → Education → Languages → Footer
```

`Layout.astro` wires global styles, fonts, and the `<html lang>` attribute.

## Conventions

- **i18n dual update (hard rule)**: every user-facing string in `resume.ts` and `projects.json` is `Record<Lang, string>`. Any copy change MUST touch both `en` and `es` keys in the same commit. CI's `npm run check` catches missing keys via TypeScript. If you can't write the Spanish version, do not merge the English one — drop the change or ask.
- **No hardcoded user copy in components**: if it appears on screen, it lives in `src/data/resume.ts` (or `projects.json`). Component files only contain markup + style.
- **Path alias**: `@/` maps to `src/` (configured in `tsconfig.json`).
- **Astro components**: keep them dumb. Logic-free templates that read typed props.
- **Tailwind v4**: classes must be literal strings — never `` `text-${color}` `` interpolation. Use a lookup map of literal class strings.
- **External links**: always `target="_blank" rel="noopener noreferrer"`.
- **No new files unless needed**: prefer editing `resume.ts` / `projects.json` over creating new data modules.

### Projects entry shape

```ts
{
  name: string,                          // kebab-case repo name
  description: { en: string, es: string },
  tech: string,                          // free-form, e.g. "Vue / Python", "TypeScript"
  url: string,                           // https://github.com/jenarvaezg/<repo>
  homepage?: string,                     // optional live URL
  category: string,                      // grouping key for the profile README; allowed
                                         // values live in scripts/generate-profile-readme.mjs
  spotlight?: {                          // at most ONE project — rendered as the
    highlights: { en: string[], es: string[] }  // "Now building" hero block in the README
  }
}
```

Order in the array = order on the site and within each README category group. Most relevant first. Star counts are NOT stored here — the sync script fetches them live from the GitHub API (see below).

### Profile README sync

The GitHub profile (`jenarvaezg/README.md`) renders a Featured Projects section (a "Now building" spotlight + category-grouped project lists) and an Advent of Code block. Both are generated from this repo and synced **automatically** by `.github/workflows/sync-profile.yml`:

- Trigger: push to `main` that touches `src/data/projects.json`, `src/data/aoc.json`, or `scripts/generate-profile-readme.mjs`; a weekly cron (Mondays 06:00 UTC) that refreshes live GitHub data; and `workflow_dispatch`.
- Action: checks out `jenarvaezg/jenarvaezg`, runs the sync script, opens (or updates) a single rolling PR on the branch `sync/profile-readme`, and squash-merges it immediately (the profile repo has no checks; GitHub's auto-merge API can't be used there because it requires branch protection).
- Auth: needs `secrets.PROFILE_SYNC_TOKEN` — a fine-grained PAT scoped to `jenarvaezg/jenarvaezg` with `Contents: write` + `Pull requests: write`. Token expires; refresh annually.

For local generation / dry runs:

```bash
npm run sync:profile                                     # print to stdout (offline, deterministic)
npm run sync:profile -- --write ../jenarvaezg/README.md  # write locally (CI does this for you)
npm run sync:profile -- --enrich                         # also fetch live star counts (CI passes this)
```

`--enrich` queries the GitHub API per project (auth via `GITHUB_TOKEN` if set) and appends `⭐ N` when a repo has ≥ 3 stars; fetch failures degrade gracefully to non-enriched output. Without the flag the output is fully offline and deterministic.

The script validates `projects.json` / `aoc.json` before generating: required fields present, both `en` and `es` non-empty, URLs `https://`, `category` within the allowed set, at most one `spotlight`, no duplicate `name`/`year`. Exits non-zero on validation failure — which fails the workflow and blocks any sync until the JSONs are fixed.

The script replaces content between `<!-- PROJECTS:START -->`/`<!-- PROJECTS:END -->` and `<!-- AOC:START -->`/`<!-- AOC:END -->` markers. Don't hand-edit those blocks in the profile repo — they will be overwritten on the next push.

## CI/CD

| Workflow | Trigger | Actions |
|----------|---------|---------|
| `deploy.yml` | Push to `main` | `npm ci` → `npm run check` → `npm run build` → deploy `dist/` to GitHub Pages (Node 22). |
| `sync-profile.yml` | Push to `main` touching `src/data/projects.json`, `src/data/aoc.json`, or `scripts/generate-profile-readme.mjs`; weekly cron (Mon 06:00 UTC) | Regenerates the profile README (with `--enrich` live GitHub stars) and opens + squash-merges a rolling PR on `jenarvaezg/jenarvaezg`. See [Profile README sync](#profile-readme-sync). |

There is no test suite; `astro check` is the only verification gate. Treat type errors as build failures.

## Hooks

Husky is installed (`npm run prepare`). The `.husky/pre-commit` hook runs `npm run check && npm run build` — full type-check + full production build before every commit. This is a deliberate red-tape gate because deploy is automatic on push to `main` (no staging, no review): if `astro check` or the build is broken, the commit never lands locally. Keep the hook fast by keeping the build fast; do not weaken it without replacing the safety net.
