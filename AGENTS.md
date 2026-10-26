# AI Agent Guide

## Project Shape
- This is Arvin's personal Hugo/HugoBlox site, deployed at `https://www.isarvin.com`.
- Source content lives in `content/`; site-wide configuration is split under `config/_default/`.
- HugoBlox is pulled as a Hugo module in `go.mod` and `config/_default/module.yaml`; local overrides are mounted from `layouts/` and `assets/`.
- Treat `public/`, `resources/`, `.hugo_build.lock`, `hugo_stats.json`, and `static/pagefind/` as generated build/search output, not source edits. `static/` currently only holds Pagefind output. Site ownership verification files live in `verification/`, mounted to the published site root.

## Content Model
- Blog posts are leaf bundles: `content/blog/<slug>/index.md`, with images beside the post, e.g. `content/blog/pypy3-for-loongarch64/end-of-build.png`.
- Blog front matter follows the existing pattern: `title`, `summary`, `date`, `authors: [me]`, `categories`, `tags`, and an `image` block with `alt_text`; every blog post should include at least one cover image.
- For every post or page with a top-level cover `image` block, copy and preserve the complete `# Cover image.` guidance block and the commented `filename` example from `content/blog/get-started/index.md`. Before completing a content edit, check that these comments are present and consistent. Pages without a cover image do not need this block; preserve the homepage's separate, block-specific comments.
- The homepage is not a normal Markdown article. It is a HugoBlox landing page in `content/_index.md` with ordered `sections`.
- Author/profile data comes from `data/authors/me.yaml`; homepage biography uses `username: me` to load it.
- Single pages like `content/uses/index.md` and `content/misc.md` use Hugo shortcodes such as `{{< toc >}}`, `{{% steps %}}`, and `{{< cards >}}`; custom share icons live in `assets/media/icons/custom/` and are referenced as `custom/<name>`.

## Image Standards
- Apply these standards when adding or replacing any source image in `content/` or `assets/media/`. Check dimensions **and** file size before finishing a content change; Hugo's responsive output does not reduce the source files stored in Git.
- Limits below are bounding boxes, not crop sizes. Preserve aspect ratio and composition, never upscale an existing image, and keep smaller images if they remain clear. File sizes are review targets rather than a reason to damage legibility.

| Image purpose | Source dimensions | File-size target | Format |
| --- | --- | --- | --- |
| Blog/page cover (`featured.*`) | Fit within 1,200 × 1,200 px; prefer landscape for new covers | ≤ 300 KiB | JPEG for photos and textured illustrations; PNG for crisp diagrams or transparency |
| Content photograph | Fit within 1,600 × 1,600 px | ≤ 300 KiB | JPEG; WebP is also suitable for inline-only images |
| Screenshot, chart or text-heavy diagram | Fit within 1,600 × 1,600 px, unless readable text requires more | ≤ 400 KiB | Losslessly optimised PNG; SVG for original vector diagrams |
| Author avatar (`assets/media/authors/`) | 512 × 512 px for the current 200 px display | ≤ 100 KiB | JPEG for photos/portraits; PNG if transparency is needed |
| Site logo (`assets/media/logo.*`) | Fit within 512 × 512 px; keep the current 256 px asset | ≤ 100 KiB | SVG where supported, otherwise PNG with transparency preserved |
| Site icon (`assets/media/icon.png`) | 512 × 512 px | ≤ 200 KiB | PNG, retaining transparency |
| Social-sharing image (`assets/media/sharing.*`) | 1,200 × 630 px | ≤ 400 KiB | JPEG or PNG for social-crawler compatibility |
| Decorative backgrounds and custom icons | Keep vector artwork as SVG with its `viewBox`; raster backgrounds fit within 1,920 × 1,920 px | SVG ≤ 20 KiB; raster ≤ 400 KiB | SVG preferred; JPEG/WebP for raster backgrounds |

- Start JPEG/WebP encoding around quality 80–85 and inspect the result. Strip unnecessary EXIF, GPS and embedded thumbnails; apply orientation and convert to sRGB before discarding colour profiles. Use lossless PNG compression for screenshots and transparent graphics.
- For photographic or textured illustration covers, use JPEG even if the source has an alpha channel that serves no visible purpose. Flatten unnecessary transparency onto the intended background before conversion; retain PNG only when transparency or crisp graphic detail materially affects the result. Try the appropriate format before reducing dimensions solely to meet the byte target.
- Review images containing small text at their intended display size. Allow a documented exception near the image reference if the dimension or byte target would make essential detail unreadable. Preserve animation when optimising GIF/WebP files; none are currently used.
- Keep one `featured.*` per bundle. When changing format, update explicit Markdown, front-matter and template references, and remove the replaced source only after checking the new image. Keep editable/full-resolution masters outside the published source tree.
- For a larger avatar display, provide roughly twice the displayed dimensions and update this standard alongside `content/_index.md`; the current biography template generates a 400 px avatar.
- Before completing image work: inventory all added/changed source images, inspect covers and text-heavy content visually, run a Hugo build, and verify cover discovery, inline images, avatar, favicon and social-image references in generated HTML. Do not commit generated output. Do not repeatedly re-encode already compliant lossy images just to change their bytes.

## Blog Categories and Tags
- Use one primary category: `Tutorials` for step-by-step guides, `Case Studies` for investigations and fixes built around a specific problem, or `Reflections` for personal updates and commentary. Choose the dominant purpose when a post mixes formats; add a category only for a genuinely distinct recurring group of posts.
- Do not use years as categories; publication dates already record chronology.
- Aim for 2–5 tags covering the main tools, platforms and topics. Reuse existing terms and spelling from blog front matter before introducing a new tag; keep product and library casing such as `Python`, `PyPy`, `macOS`, `ansible-runner` and `asyncio`.
- Prefer unversioned tags (`Python`, `PyPy`); keep version requirements in the title or body. Avoid synonyms, vague labels and tags for tools or platforms mentioned only in passing.
- Taxonomy terms generate public archive URLs. When renaming or removing a term, review its use across all posts and check the generated `/categories/` and `/tags/` archives with a Hugo build.

## HugoBlox Customization Points
- `layouts/_partials/hbx/blocks/resume-biography/block.html` customises the home biography block; `cta-button-list/block.html` renders the home buttons from `content/_index.md`.
- `layouts/_partials/hooks/body-end/change-background-colour.html` rotates the home background hue and synchronises giscus theme changes; `enable-vercel-*.html` inject Vercel analytics scripts.
- `assets/css/custom.css` contains narrow visual overrides for mobile padding, transparent CTA backgrounds, dark-mode steps, footer spacing, and biography spacing.

## Configuration Map
- `config/_default/hugo.yaml` defines base URL, blog cascade behaviour, outputs, taxonomies, image processing, and Git-backed edit links.
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
- Write posts, pages and guidance in natural, idiomatic British English (en-GB), including spelling, phrasing and punctuation; avoid literal translations and wording that feels unnatural to a native British English reader. Treat `en-gb` as the only active language unless the user explicitly asks for another locale.
- Match the tone to the purpose of each post or page while preserving the author's personal voice: relaxed and conversational for personal reflections, clear and precise for technical guides, and appropriate to the audience for other pages. Keep humour natural rather than forced.
- Preserve the blog's stated purpose in `content/blog/get-started/index.md`: recording experiences, ideas and working notes primarily for the author's future self. Clear explanations, step-by-step instructions, recommendations and the `Tutorials` category are compatible with that purpose; avoid framing teaching readers or prescribing the universally right or best approach as the reason for writing. Do not repeat a note-taking disclaimer in every post.
- When drafting or revising a post, compare relevant earlier posts for continuity of personal facts, motivations and voice. Allow views and circumstances to develop over time; distinguish genuine contradictions from changes in perspective, and do not invent experiences or rewrite earlier positions merely to make them agree.
- Use mixed English/Chinese only with the user's explicit agreement. Existing mixes reflect the author's deliberate choices and should be preserved unless a change is requested; they do not authorise introducing new mixes. A Chinese outline or source text does not imply permission to include Chinese in the finished copy.
- For new posts, prefer a leaf bundle with local media and complete image `alt_text`, matching existing blog examples.
- Before changing custom blocks, compare the data shape in `content/_index.md` and `data/authors/me.yaml`; those templates assume HugoBlox profile fields and block-specific `design` options.
