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
