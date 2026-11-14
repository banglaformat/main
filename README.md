# Bangla Format final release

Verified release: 14 November 2026. Website: https://banglaformat.co/

This repository keeps only the current release files. Previous commits remain available for rollback.

- `banglaformat-production.zip`: deployable static site; 252 files, 80 canonical pages, 29 font families, 26 downloads. SHA-256: `8b4bc90156d76021dd23fda056e7c77d7ae25d5531d5e94a080b6962d3c0bdc2`.
- `manifest.json`: matching archive and per-file SHA-256 checksums.
- `banglaformat-verified-source.zip`: editable source and validation fixtures; 391 files. SHA-256: `2e96ea6891c77001ed19c94282d03197aebc3a4ccb677f75df230d42d79166fd`.
- `.github/workflows/verified-pages.yml`: manually deploys the checksum-verified production archive.

## Current changes

Consistent header link order, labels, active-section indicators and mobile menu accessibility across all pages. Local development preview uses correct multipage routing and excludes private research/source paths. Page content, established URLs, domain, ads authorization and font/license files are preserved.

## Publish

Run **Publish verified production archive** manually from Actions on main. Ordinary commits do not deploy. The workflow checks the pinned archive hash, all file hashes, domain and publisher before publishing. Do not publish the source ZIP or the repository root.

## Edit

Extract the source ZIP into a clean folder. With Node 24 or newer, `npm run check:release` builds and checks the static site without installing dependencies. For Vite development, use `npm ci`, `npm run lint`, `node tests/dev-routing.test.mjs`, and `npm run dev`. No Gemini API key is required for the static site.

Keep banglaformat.co, HTTPS, existing routes, current publisher 5724834317757008, and the ad-free noindex 404. GitHub Pages does not apply the optional `_headers` file. Search indexing and ranking recovery are not guaranteed by deployment.
