# Bangla Format production release

Live website: https://banglaformat.co/

The current published release is **banglaformat-production.zip**. The Pages source is GitHub Actions. Workflow `.github/workflows/verified-pages.yml` verifies its pinned SHA-256, all 252 file hashes from `manifest.json`, the custom domain and current publisher before publishing only the extracted static files.

- Deployment archive SHA-256: `9d06cda7298a91cc999abc4987dbd054b932cb7eb8c6307f4c60c663fbc553b1`
- Release contents: 80 canonical pages; 29 font families; 26 local downloads. The candidate audit cleared 22 additions, leaving eight unfilled. Do not advertise 37 families.
- Current publisher: `5724834317757008`. Keep the current ads.txt. The 404 page stays ad-free.
- Preserve custom domain `banglaformat.co`, Enforce HTTPS, existing URLs, canonical tags, schema and sitemap.

## Editable source

`banglaformat-verified-source.zip` contains the curated, tested editable source and required preservation fixtures for this release (386 files). SHA-256: `064b93cfd3e9053a43aed25a80e70c263215019b9aa697037c59e47ce23b9a38`.

**The older loose source files at repository root are historical and are not used by the current archive workflow.** For source editing or AI Studio import, first extract the verified source snapshot into a clean source checkout. Do not assume editing a historical root HTML file updates production.

With Node 24 or newer, run `npm run check:release`, then `node scripts/package-release.mjs`. The static build and tests need no dependency install or API key. Run `npm run generate:fonts` when changing catalog content. Do not publish the entire source or its report fixtures.

To publish another verified archive, upload its ZIP and matching manifest, update the pinned archive SHA-256 in the workflow, and run **Publish verified production archive** manually on main. An ordinary push does not deploy. Future source-based deployments can use the `pages.yml` workflow supplied inside the source snapshot after the complete current source is restored to the repository; do not run it against historical root files.

## Publication checks

Check existing articles and all new font routes, downloads, copying, converter, mobile navigation, canonicals, breadcrumbs/schema, sitemap, robots and llms references. Check ads.txt returns 200 text/plain with the current authorization, missing URLs return 404, and research/report fixtures are unavailable on the public site. Compare public release file hashes with the manifest.

Font source/license and performance registers are included under `assets/fonts/` inside the deployment archive. Keep license notices and required GPL source archives inside every font ZIP. Do not replace binaries without verification. Archived font limitations are documented on their detail pages.

AdSense account setup, consent-message configuration and review submission remain separate user-controlled actions. Technical checks do not guarantee rankings, indexing or AdSense acceptance.
