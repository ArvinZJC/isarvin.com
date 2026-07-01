# AI Agent Guide

## Project Shape
- This is Arvin's personal Hugo/HugoBlox site, deployed at `https://www.isarvin.com`.
- Source content lives in `content/`; site-wide configuration is split under `config/_default/`.
- HugoBlox is pulled as a Hugo module in `go.mod` and `config/_default/module.yaml`; local overrides are mounted from `layouts/` and `assets/`.
- Treat `public/`, `resources/`, `.hugo_build.lock`, `hugo_stats.json`, and `static/pagefind/` as generated build/search output, not source edits. `static/` currently only holds Pagefind output.

## Content Model
- Blog posts are leaf bundles: `content/blog/<slug>/index.md`, with images beside the post, e.g. `content/blog/pypy3-for-loongarch64/end-of-build.png`.
- Blog front matter follows the existing pattern: `title`, `summary`, `date`, `authors: [me]`, `categories`, `tags`, and an `image` block with `alt_text`; every blog post should include at least one cover image.
- The homepage is not a normal Markdown article. It is a HugoBlox landing page in `content/_index.md` with ordered `sections`.
- Author/profile data comes from `data/authors/me.yaml`; homepage biography uses `username: me` to load it.
- Single pages like `content/uses/index.md` and `content/misc.md` use Hugo shortcodes such as `{{< toc >}}`, `{{% steps %}}`, and `{{< cards >}}`; custom share icons live in `assets/media/icons/custom/` and are referenced as `custom/<name>`.

## HugoBlox Customization Points
- `layouts/_partials/hbx/blocks/resume-biography/block.html` customizes the home biography block; `cta-button-list/block.html` renders the home buttons from `content/_index.md`.
- `layouts/_partials/hooks/body-end/change-background-colour.html` rotates the home background hue and synchronizes giscus theme changes; `enable-vercel-*.html` inject Vercel analytics scripts.
- `assets/css/custom.css` contains narrow visual overrides for mobile padding, transparent CTA backgrounds, dark-mode steps, footer spacing, and biography spacing.

## Configuration Map
- `config/_default/hugo.yaml` defines base URL, blog cascade behavior, outputs, taxonomies, image processing, and Git-backed edit links.
- `config/_default/params.yaml` holds HugoBlox identity, theme, header/footer, giscus comments, analytics placeholders, AI crawler guidance, and repository metadata.
- `config/_default/menus.yaml` drives the Home/Blog/Uses/Miscellaneous nav; `languages.yaml` is currently English-only (`en-gb`).

## Developer Workflows
- Check the local Hugo toolchain with `hugo version`; run `npm install` when `node_modules/` is absent.
- Clean generated output before a fresh local build with `rm -fr public/ resources/ static/`; only do this while `static/` contains no hand-authored source assets.
- Optional module-cache reset: `hugo mod clean` when HugoBlox module state looks stale after upgrades.
- Search-aware development: run `hugo --gc`, then `npx -y pagefind --site public --output-subdir ../static/pagefind`, then `npm run dev`.
- `npm run dev` alone runs `hugo server --disableFastRender`; use the flow above when Pagefind data needs refreshing for local search.
- Static preview: run `hugo --gc --minify`, then from `public/` run `python3 -m http.server 9999`.
- Production build shortcut: `npm run build` runs `hugo --gc --minify` and then `npx pagefind --site public`, writing Pagefind output under `public/pagefind`.
- Builds may regenerate `public/`, `resources/`, `hugo_stats.json`, and `static/pagefind/`; do not include those changes unless the user explicitly wants generated output refreshed.
- There are no app unit tests in this repo; validation is mainly a Hugo build plus visual/content review.

## Automation and Dependencies
- `.github/workflows/upgrade.yml` is the only GitHub Action. It runs weekly/manual HugoBlox upgrades with Node 22, pnpm 10.14.0, Go 1.23, and extended Hugo.
- The workflow can update `go.mod`/`go.sum` and open an automated PR; check preview rendering after upgrades because local layouts override HugoBlox internals.

## Editing Conventions
- Keep source edits scoped to the relevant content/config/layout asset; avoid broad theme rewrites.
- Commit subjects must start with one of `feat:`, `fix:`, `docs:`, `style:`, `build:`, `refactor:`, `revert:`, `test:`, `perf:`, `ci:`, or `chore:`; keep the subject concise, non-sentence style, and without trailing punctuation.
- Preserve the author's informal personal voice in posts and pages, including mixed English/Chinese where already present.
- For new posts, prefer a leaf bundle with local media and complete image `alt_text`, matching existing blog examples.
- Before changing custom blocks, compare the data shape in `content/_index.md` and `data/authors/me.yaml`; those templates assume HugoBlox profile fields and block-specific `design` options.
