# Bangla Format final release

Verified release: 14 November 2026. Website: https://banglaformat.co/

This repository keeps only the current release files. Previous commits remain available for rollback.

- `banglaformat-production.zip`: deployable static site; 252 files, 80 canonical pages, 29 font families, 26 downloads. SHA-256: `d2d9ae45ea20f2e859c26dddcf494a1fdcebeed7a166f2a6168579f56f9b83db`.
- `manifest.json`: matching archive and per-file SHA-256 checksums.
- `banglaformat-verified-source.zip`: editable source and validation fixtures; 393 files. SHA-256: `d5e2d4dc2f032de6c31627d2c84a6964befb6dd90901ad24500a9e8c3db5154d`.
- `.github/workflows/verified-pages.yml`: manually deploys the checksum-verified production archive.

## Current changes

SEO corrections clarify certificate, fee-waiver and late-attendance guidance; author names link to the existing editor profile. Only three substantive article sitemap dates were advanced. Font pages retain licenses and previews with visitor-focused selection wording. Header consistency is preserved. Local development preview uses correct multipage routing and excludes private research/source paths. Established URLs, domain, ads authorization and font/license files are preserved; the three reviewed articles have targeted guidance corrections.

## Publish

Run **Publish verified production archive** manually from Actions on main. Ordinary commits do not deploy. The workflow checks the pinned archive hash, all file hashes, domain and publisher before publishing. Do not publish the source ZIP or the repository root.

## Edit

Extract the source ZIP into a clean folder. With Node 24 or newer, `npm run check:release` builds and checks the static site without installing dependencies. For Vite development, use `npm ci`, `npm run lint`, `node tests/dev-routing.test.mjs`, and `npm run dev`. No Gemini API key is required for the static site.

Keep banglaformat.co, HTTPS, existing routes, current publisher 5724834317757008, and the ad-free noindex 404. GitHub Pages does not apply the optional `_headers` file. Search indexing and ranking recovery are not guaranteed by deployment.
