# Deployment

The Research Atlas is published to GitHub Pages at
<https://lunamoth7533.github.io/quartz/> from the `v5` branch.

## Automatic publishing

Every push to `v5` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` installs pinned dependencies.
2. `npx quartz plugin install` resolves the configured Quartz plugins.
3. `npx quartz build` renders the site into `public/`.
4. The `public/` artifact is deployed via `actions/deploy-pages`.

The production base URL is `lunamoth7533.github.io/quartz`
(`baseUrl` in `quartz.config.yaml`), which drives social URLs, the
sitemap, RSS, and generated metadata. Changes take effect on the next
deployment.

## Manual publishing

Use **Actions → Deploy Quartz site to GitHub Pages → Run workflow** to
redeploy without a push.

## Local verification

```sh
npm ci
npx quartz plugin install
npx tsc --noEmit # type check (passes)
npm test
npx quartz build
```

`npm run check` combines the type check with a repo-wide `prettier --check`,
which currently fails on ~151 pre-existing files (including authored research
notes and workflow files). That formatting debt predates hosting work; the
type check, tests, and build above pass.

For a local preview that matches the production URL shape, serve under the
project prefix with `npx quartz build --serve --baseDir quartz`
(<http://localhost:8080/quartz>). `--baseDir` only sets the dev-server
mount path; it does not override the configured production `baseUrl`, so
Social metadata, sitemap, and RSS URLs still point at the production site during
a local preview.

`ci.yaml` and `deploy-v5.yaml` are upstream Quartz workflows gated on
`jackyzha0/quartz`; they are skipped on this repository.

## Local preview

`npx quartz build --serve --baseDir quartz` serves <http://localhost:8080/quartz>.
Preview builds skip the ~800 social-card images, which are most of the build
time; deploys still render them. Let a rebuild finish before saving the next
source change: a hard rebuild that starts mid-build can stall the watcher.

## Configuration notes

`npx quartz plugin …` and `npx quartz tui` rewrite `quartz.config.yaml` and drop
its comments, so the reasons for the non-default choices live here.

Off on purpose (installed; one line to turn back on):

| Plugin | Why it is off |
| --- | --- |
| `latex` | No note uses math. On, every page loads KaTeX's stylesheet and script from cdn.jsdelivr.net. |
| `mermaid` (option of `obsidian-flavored-markdown`) | No note has a mermaid block. On, every page preconnects to cdnjs.cloudflare.com. |
| `citations` | Needs a bibliography file. Without one every build fails. |
| `canvas-page`, `bases-page` | Canvas and Base pages come from `research-atlas/page-types.ts`, which adds the site navigation. |
| `@quartz-themes/core` | Replaces the Research Atlas palette the graph and charts are checked against. |
| `obsidian-plugin-leaflet` | No note has a map; on, its template code adds a script and stylesheet to every page. |
| `tui` | The terminal plugin manager (`npx quartz tui`), not a site plugin. |
| `explicit-publish`, `ox-hugo`, `roam`, `comments`, `recent-notes` | Would hide unmarked notes, re-parse Obsidian syntax, need a comments service, or list notes by sync date. |

Site layer (`research-atlas/`):

- **Graph.** The `@quartz-community/graph` entry keeps deciding where the graph
  sits and its options; `quartz.ts` points that slot at `research-atlas/graph`,
  which colours notes by family, clusters the global view, filters by legend,
  condition, domain and search, and bundles `d3-force` instead of loading d3 and
  pixi.js from a CDN. Ctrl/Cmd+G opens the global view.
- **Families.** One taxonomy (`research-atlas/categories.ts`, from `note_type`
  or the structural tags, never folders) drives the graph, the charts and the
  marks beside links in the explorer, backlinks, listings and search.
- **Insights.** The note tagged `research/visualizations` gets build-time charts:
  layer links, most-linked notes, domain and condition coverage, publication
  years, study designs, depth of checking, reading state, topic support and
  loose ends.
- **Home.** When the vault has no root `index.md`, the site root is generated
  (the Atlas home) so GitHub Pages does not fall back to the RSS feed.
- **Dashboards.** Authored `dataview` blocks render at build time, including
  `FROM #tag AND -"folder"` sources, `!` negation, `FLATTEN field`, `join()` and
  `date()`.

One core file differs from upstream Quartz: `quartz/components/Head.tsx` only
preconnects to cdnjs.cloudflare.com when `theme.cdnCaching` is on (it is off
here, and nothing on this site loads from cdnjs). Keep that line when running
`npx quartz upgrade`.

`npm test` includes `research-atlas/test/dql.test.ts`, which reads the live
vault: a new query shape the site cannot render fails there before it reaches
the site.
