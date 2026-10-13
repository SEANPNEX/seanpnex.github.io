# seanpnex.github.io

Sean Guo's personal site and public learning base, built with [VitePress](https://vitepress.dev) and deployed to GitHub Pages at **[seanpnex.github.io](https://seanpnex.github.io)**.

It hosts research projects plus evolving study notes for CFA Level II, JLPT N2, and Business German, available in English, 简体中文, 日本語, and Français.

## What's inside

| Path | Contents |
| --- | --- |
| `index.md` | Home page |
| `projects/` | Research and project write-ups (NCCP, TTS chatbot, rivalry network, Wilson–Cowan equation) |
| `blogs/` | Learning base: `CFA/`, `JLPT-N2/`, `German/`, `coding_notes/` |
| `zh/`, `jp/`, `fr/` | Translated pages, mirroring the English layout |
| `public/charts/` | Standalone interactive HTML charts embedded in notes via `<iframe>` |
| `public/flashcards/` | Standalone flashcard decks built from CFA quizzes |
| `public/` | PDFs, images, and other static assets served as-is |
| `.vitepress/` | Site config, auto-generated sidebar, and custom theme |

## Run locally

Requires Node.js 18+ (CI uses Node 20).

```bash
npm install
```

```bash
npm run docs:dev
```

The dev server runs at `localhost:5173`. To check a production build:

```bash
npm run docs:build && npm run docs:preview
```

## Writing notes

The sidebar is generated from the folder tree by [`.vitepress/auto-sidebar.mjs`](.vitepress/auto-sidebar.mjs), so adding a note is just adding a Markdown file.

- **Ordering** — files and folders sort by name; a prefix like `C2 ` or `M1 ` sets the order and is stripped from the label. Set `order:` in frontmatter to override.
- **Labels** — `title:` in frontmatter sets the sidebar text. Curriculum folder names map to readable labels via `GROUP_LABELS` in `auto-sidebar.mjs` (translations live in `topics.mjs`).
- **Publishing** — empty notes and notes with `draft: true` stay in the repo but are excluded from the build. Short notes (under ~1,500 characters) are published as outlines.
- **Prev / next** — page sequence follows the sidebar, and each learning track has its own sidebar so navigation stays inside the track.
- **Math and diagrams** — LaTeX math (`$…$`, `$$…$$`) and ```` ```mermaid ```` blocks are supported.

### Charts

Charts in `public/charts/` are self-contained HTML pages. Notes embed them with an iframe, adding `?lang=zh|ja|fr` for translated pages; each chart registers its own strings with [`i18n.js`](public/charts/i18n.js). Charts report their rendered height to the host page, so the iframe resizes itself. The hairline curve charts share drawing helpers in [`curve-kit.js`](public/charts/curve-kit.js).

## Translations

Locales are configured in [`.vitepress/config.mjs`](.vitepress/config.mjs) (`LOCALE_TEXT` holds the interface strings). Translated pages live under `/zh/`, `/jp/`, and `/fr/`. Learning notes are written in English first; when the language menu points to a translation that doesn't exist yet, it opens the English page instead of a 404.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `.vitepress/dist` to the `gh-pages` branch. A second workflow, [`commit_log.yml`](.github/workflows/commit_log.yml), appends each push to `workflow.log` and commits it back, so pull before pushing.

## License

[GPL-3.0](https://github.com/SEANPNEX/seanpnex.github.io/blob/main/LICENSE)
