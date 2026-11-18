# Bangla Format deployed release

18 November 2026. Domain: https://banglaformat.co/

This repository retains the current production package and the configuration needed to verify and publish it. Editable source and private research are retained locally; previous Git commits remain available for rollback.

- `banglaformat-production.zip`: 414 deployment files, 100 canonical pages, 99 compatibility HTML copies and one ad-free noindex 404. SHA256: `c89e026b6707929f579ee65028d965db635c54cb2ec8a5e66d9da3addee3da92`.
- `manifest.json`: archive and per-file SHA256 checksums.
- `.github/workflows/verified-pages.yml`: manual verification and GitHub Pages publishing, with existing permission scopes.
- `CNAME`: established custom domain.

## Content and style

Twelve distinct articles and two discovery hubs use the established header/footer, embedded stylesheet, article layout, accessible tables, sample boxes, copy/download and print controls. Thirty exact matching TXT samples are included. All page URLs remain slashless in internal links, canonical/social/schema metadata and sitemap. Old slash URLs remain available with the same preferred canonical.

Reviewed the Bengali wording, placeholder grammar, intended reader tasks, factual limitations, original examples and worked calculations. No external human/expert approval is claimed. AI assistance is disclosed through the existing editorial policy. No ranking, AI citation, indexing or document-acceptance guarantee is made. No special AI schema, fake reviews or keyword-variant pages were added. Existing ads, analytics, fonts, licenses and downloads are retained.

## Validation and publication

The full content/converter/font/editorial/publisher suite, final clean-URL route checks, 30 sample parity checks, type check and 21 dev-routing checks passed. Browser checks cover desktop/mobile layout, navigation and sample copying. The workflow verifies every approved deployment file before publishing.

Run **Publish verified production archive** manually from Actions on main. Ordinary commits do not deploy. Never publish the repository root. Rollback requires restoring the matching prior production archive, manifest and workflow pin from history, then running the same workflow.

GitHub Pages ignores custom `_headers` behavior; the existing production archive retains its historical configuration. No DNS/hosting migration or expanded repository permission is required.
