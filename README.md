# Bangla Format final release

Verified release: 18 November 2026. Website: https://banglaformat.co/

The existing GitHub Pages host and domain are retained. No DNS change is needed.

- `banglaformat-production.zip`: 356 files; 86 canonical routes and 85 identical compatibility pages. SHA256: `e1ef6991a1b93bd2db8e6e0c6d971739f7d3589855344901e332b56b0672781d`.
- `banglaformat-verified-source.zip`: 425 editable source and validation files. SHA256: `736ba7d51e91f439cf70396f984eef6869c3cb96a6f79c7c8da590f7d6643a2a`.
- `manifest.json`: production archive and per-file checksums.
- `.github/workflows/verified-pages.yml`: manually publishes the pinned, checksum-verified archive. Repository history preserves rollback releases.

## URL update

All 85 non-root page URLs now use the slashless form in links, canonical metadata, structured data and the sitemap. Root remains `/`. GitHub Pages serves clean URLs through matching `.html` files. Existing directory/index.html pages remain accessible with identical content and the same slashless canonical URL. GitHub Pages does not provide configurable HTTP redirects for these old directory URLs; canonical metadata is a consolidation signal, not a guaranteed redirect or indexing outcome. Direct `.html` aliases can also be accessed and have the same clean canonical.

Fonts, downloads, images, runtime JavaScript, analytics, ads authorization, publisher and article wording are preserved. No cosmetic history replacement or custom 404 routing is used. The noindex ad-free 404 remains.

## Validation and editing

Extract the source archive. With Node 24+, run `npm run check:release`. The suite first builds and verifies the original content layout, then produces and validates the final GitHub Pages layout. It checks all clean and compatibility route responses, 4,200 local references and anchors, canonical/social/schema/sitemap alignment and unchanged runtime scripts. `npm run build` directly produces the final layout; `npm run preview` serves it locally. Development dependencies: `npm ci`, `npm run lint`, `node tests/dev-routing.test.mjs`, `npm run dev`.

The production layout has 172 HTML files: 86 canonical pages, 85 compatibility copies and one 404. Each compatibility copy must match its clean-URL HTML file byte for byte. The source snapshots retain their historical URLs; the shared final build transformation makes the deployment policy consistent.

## Publish and rollback

After updating the four release files and the pinned workflow, run **Publish verified production archive** manually from Actions on main. Ordinary commits do not deploy. Never publish the repository root or editable source ZIP. For rollback, restore the prior release files and matching workflow pin from repository history and run the same manual workflow.

Removing trailing slashes is a URL preference. It is not a penalty diagnosis or a promise of ranking recovery. Keep the established HTTPS domain. GitHub Pages ignores `_headers`.
