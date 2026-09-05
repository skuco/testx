# TESTX website

Bilingual English/Slovak presentation site for TESTX s.r.o., specializing in QA consulting, software testing, automation and training.

## Development

Run `python3 -m http.server 3000`, then open http://localhost:3000.

No build step, package installation or third-party runtime is required. The site uses semantic HTML, CSS and vanilla JavaScript, with local SVG brand and tool assets and system fonts.

## Features

- Responsive layouts and collapsible mobile navigation
- English and Slovak copy, labels, form placeholders and document metadata
- Persistent language and light/dark preferences (system theme on first visit)
- Keyboard focus states, skip link and reduced-motion support
- Contact form that prepares an encoded email draft in the visitor’s email app

The form does not send or store messages. Visitors review and send the draft from their email client; direct email and telephone links are also available.

## Editing

- `index.html`: static English content and page structure
- `styles.css`: theme tokens, layout and responsive styles
- `script.js`: English/Slovak translation dictionary and interactions
- `images/`, `icons/`, `favicon.svg`: local assets

When changing copy, update the English HTML fallback and both entries in the `translations` dictionary. Translation keys are referenced by `data-translate` and `data-translate-placeholder`. Keep English and Slovak key sets identical.

Language is a client-side preference on one URL. The initial HTML and social preview metadata are English; JavaScript updates metadata for Slovak visitors. Separate language URLs would be needed for independently indexed language pages.

## Deployment

Publish the repository through the existing GitHub Pages configuration. Keep `CNAME` for the `testx.sk` custom domain. Asset paths are relative, so the page also supports GitHub Pages project subpaths. `robots.txt` and `sitemap.xml` describe the production domain.

## Contact

TESTX s.r.o. · testx.skuci@gmail.com · +421 949 184 534
