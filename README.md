# Bangla Format final release

Verified release: 16 November 2026. Website: https://banglaformat.co/

This repository keeps only the current release files. Previous commits remain available for rollback.

- `banglaformat-production.zip`: deployable static site; 268 files, 85 canonical pages, 29 font families, 26 downloads. SHA-256: `c1e99f1121c31ef7ca0fd24a0cfaed86d653cedf89911cf7b12230855fb4b298`.
- `manifest.json`: matching archive and per-file SHA-256 checksums.
- `banglaformat-verified-source.zip`: editable source and validation fixtures; 418 files. SHA-256: `89a2e6dc1908f3bff007aa645703a2c6932eb81b22d583fc80312f8aabac4ba2`.
- `.github/workflows/verified-pages.yml`: manually deploys the checksum-verified production archive.

## Current changes

Focused review of four excluded guides and two hubs: corrected unsupported school/office leave requirements and parser absolutes, added document-selection guidance, and dated only these six reviewed routes. Existing copyable samples and URLs are retained.


Accessibility correction: underline inline content links so readers can identify them without relying on color. Advertising and analytics remain active.


Sitewide editorial review: 116 targeted passages rewritten across 56 routes, including 29 font introductions. Unsupported outcome promises, universal policy claims, ATS myths and expert-human-review assertions were corrected. Templates, downloads, licenses and routes are retained. The build and preview share the same editorial transformations, with regression checks for text and metadata consistency. AI assistance is disclosed; human authorship or professional approval is not invented.


Two new guides cover requesting a release letter and preparing a lost SSC/HSC document replacement application. Four original TXT samples and category links are included. Official board sources are linked; older fees and requirements are not presented as universal current rules.


The three November guides and all six downloadable samples have been rewritten in plainer, more specific language. Existing routes and functionality are unchanged. No human authorship, personal experience or professional review is claimed.


Three new original guides cover salary review requests, salary advances and ordinary certificate/marksheet collection. Each includes Bangla and English samples, matching TXT downloads and browser print controls. Word/PDF drafts are excluded because their document renderer was unavailable; no unverified Office files are shipped. Existing pages and URLs are retained.


SEO corrections clarify certificate, fee-waiver and late-attendance guidance; author names link to the existing editor profile. Only three substantive article sitemap dates were advanced. Font pages retain licenses and previews with visitor-focused selection wording. Header consistency is preserved. The shared stylesheet is embedded during build and preview, preventing the initial unstyled-to-styled body jump. Temporary diagnostics are not included. Preferred text fonts are preloaded; slow downloads no longer trigger a late text-font swap and reflow. Local development preview uses correct multipage routing and excludes private research/source paths. Established URLs, domain, ads authorization and font/license files are preserved; the three reviewed articles have targeted guidance corrections.

## Publish

Run **Publish verified production archive** manually from Actions on main. Ordinary commits do not deploy. The workflow checks the pinned archive hash, all file hashes, domain and publisher before publishing. Do not publish the source ZIP or the repository root.

## Edit

Extract the source ZIP into a clean folder. With Node 24 or newer, `npm run check:release` builds and checks the static site without installing dependencies. For Vite development, use `npm ci`, `npm run lint`, `node tests/dev-routing.test.mjs`, and `npm run dev`. No Gemini API key is required for the static site.

Keep banglaformat.co, HTTPS, existing routes, current publisher 5724834317757008, and the ad-free noindex 404. GitHub Pages does not apply the optional `_headers` file. Search indexing and ranking recovery are not guaranteed by deployment.
