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

## Fork it and make it your own

The site's code is free to reuse under GPL-3.0. The notes, projects, and personal details are Sean's, so replace them with your own.

### 1. Fork and set up GitHub Pages

1. Fork this repo. To serve it at `https://<your-username>.github.io`, name your fork `<your-username>.github.io`.
2. In your fork, open **Settings → Actions → General → Workflow permissions**, select **Read and write permissions**, and save. The deploy workflow needs this to push the `gh-pages` branch.
3. Push any commit to `main`, or re-run the **Deploy** workflow from the **Actions** tab. When it finishes, a `gh-pages` branch exists.
4. Open **Settings → Pages**, set **Source** to **Deploy from a branch**, then select `gh-pages` and `/ (root)`. Your site goes live a minute later.

If you keep a different repo name, the site is served at `https://<your-username>.github.io/<repo>/`. In that case, set `base: "/<repo>/"` in `.vitepress/config.mjs`. VitePress adds the base to Markdown links automatically, but not to raw HTML, so you also need to prefix the absolute `href` and `src` paths in HTML blocks. That includes `<iframe>` chart embeds, the home page, and the directory cards in `blogs/0-start.md`.

### 2. Clone and run it

```bash
git clone https://github.com/<your-username>/<your-repo>.git
```

```bash
cd <your-repo> && npm install && npm run docs:dev
```

### 3. Replace Sean's content

| Where | What to change |
| --- | --- |
| `index.md` | Your name, tagline, and portrait (it uses a GitHub avatar URL), plus the project cards and learning-track cards |
| `.vitepress/config.mjs` | `title`, `description`, `nav`, `socialLinks`, `footer`, and the per-language strings in `LOCALE_TEXT` |
| `projects/`, `blogs/` | Delete Sean's pages and add your own. The sidebar updates automatically |
| `zh/`, `jp/`, `fr/` | Translations. Delete the locales you don't need, and remove them from `locales` in `config.mjs` |
| `public/` | Images, PDFs, `favicon.ico`, charts, and flashcards |
| `coverletters/`, `workflow.log`, `index.md.bak` | Sean's personal files. Delete them |
| `.github/workflows/commit_log.yml` | Optional push log. Delete it if you don't want a bot commit after every push |

The home page and the Learning Base page read the CFA folder through `.vitepress/theme/notes.data.js`. If you remove `blogs/CFA/`, update `notes.data.js` and the CFA card in `index.md` too, or the build fails.

### 4. Edit, check, publish

1. Add or edit Markdown files while `npm run docs:dev` is running. The page reloads as you save.
2. Run `npm run docs:build` before pushing. The build fails on dead links, and the deploy uses the same command.
3. Commit and push to `main`. The site redeploys automatically.

To suggest a fix to this site itself, push a branch to your fork and open a pull request against `SEANPNEX/seanpnex.github.io`.

## For AI coding agents

If you are an agent working in this repo or a fork of it, follow these rules.

**Commands**

- Install: `npm install`. Preview: `npm run docs:dev` (port 5173). Verify: `npm run docs:build`.
- A task is done only when `npm run docs:build` exits 0. Read the build output, because dead links appear as `(!) Found dead link` before the failure.

**How the site is built**

- Every `.md` file in the repo becomes a page, including this README. A link to a file that doesn't exist fails the build. In README, write the dev URL as plain code instead of a link, and link the license by its full GitHub URL.
- Markdown is compiled as a Vue template. Literal double curly braces in prose are evaluated as Vue expressions, so put them in code spans or code blocks.
- Math is enabled, so `$…$` in prose renders as LaTeX. Escape literal currency as `\$`.
- Never hand-write sidebar entries. `.vitepress/auto-sidebar.mjs` builds them from the folder tree. Control the result with file and folder names (an `M1 ` or `C2 ` prefix sets the order) and with the `title:`, `order:`, and `draft: true` frontmatter fields.
- An empty note is a planned placeholder and is not published. Don't delete empty notes, and don't fill them with filler text.
- When you add a curriculum folder, add its label to `GROUP_LABELS` in `.vitepress/auto-sidebar.mjs`, and add a translation for each locale in `.vitepress/topics.mjs`.

**Translations**

- A translated page mirrors the English path under `zh/`, `jp/`, or `fr/`. Example: `blogs/CFA/C2 Economics/M1 Currency Exchange Rates.md` becomes `zh/blogs/CFA/C2 Economics/M1 Currency Exchange Rates.md`.
- The Japanese folder is `jp`, but the language code is `ja`. Use `ja` for chart `?lang=` parameters and for `TOPIC_LABELS`.
- Leave a translation missing rather than machine-filling a placeholder page, because the language menu already falls back to English.

**Charts**

- A chart is one self-contained HTML file in `public/charts/`. Embed it with an `<iframe>` whose `src` is an absolute path like `/charts/name.html`, and give it a `title`. Copy an existing embed as a template.
- On translated pages, add `?lang=zh|ja|fr` to the `src`, and register the chart's strings with `chartI18n.use(…)` from `public/charts/i18n.js`.
- Charts must post their height to the parent page so the iframe can resize: `parent.postMessage({ chartHeight }, location.origin)`. Curve charts get this for free from `public/charts/curve-kit.js`.
- Prefer plain SVG or the shared local scripts. If a chart needs a library, load it from a CDN with a pinned version, as the ECharts chart does.

**Git**

- Run `git pull` before `git push`, because the `commit_log` workflow adds a commit after every push.
- Commit message style is `<Track> <module>: <change>`, for example `CFA C2 M2: add saving-rate shift chart` or `JLPT: add Nでございます note`.
- Never commit `node_modules/`, `.vitepress/dist/`, `.vitepress/cache/`, `.claude/`, or `.docx` files. Never edit `workflow.log` or the `gh-pages` branch by hand.
- Ask before deleting or rewriting someone's existing notes. They are personal study material, not generated output.

## License

[GPL-3.0](https://github.com/SEANPNEX/seanpnex.github.io/blob/main/LICENSE)
