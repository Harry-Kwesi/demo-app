# SICIM — website

A redesigned website for Singapore Consortium Investment Management Limited, built with React, TypeScript, Tailwind CSS and Vite.

```bash
npm install
npm run dev       # local development
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  data/site.ts        all copy, facts, placeholders and image slots (see CONTENT.md)
  components/         Header (utility bar, navigation, search, mobile drawer), Hero, LatestNews,
                      Philosophy, Approach (process tabs/list), FundTable, Metrics, Investments,
                      Team, ContactCTA, Footer, plus primitives
                      (Reveal, ArrowLink, SectionHeading, PageHeader, Media, Art, Portrait, Pending)
  pages/              Home, About, Team, Philosophy, Funds, Contact, Legal
  hooks/              useInView, useSifNav (loads the daily SIF prices), useTitle
```

## Updating the SIF daily price

The Funds page and homepage read the Singapore Index Fund's bid/offer prices from `public/data/sif-nav.json`:

```json
{ "dealingDate": "08-Oct-2026", "bid": "5.0315", "offer": "5.1839" }
```

Edit that file on the server to publish a new dealing date. No rebuild is needed.

## Imagery

Each image slot currently renders a generated, dark architectural composition (`components/Art.tsx`): seeded SVG that
weighs a few KB, so there are no image requests. To use licensed photography, put files in `public/images/` and set `src`
on the matching entry in `media` (`data/site.ts`). Portraits take a `src` in `Portrait`, which shows them in grayscale
and brings in colour on hover.

## Design

The layout follows large asset-manager conventions:
- a black utility bar with the company name, telephone and e-mail
- a sticky white header with site search and a primary "Contact Us" button
- bold headlines with solid rectangular buttons
- a tabbed process module and a fund table (cards on phones)
- a black figures band, breadcrumbs and a sticky in-page sub-navigation on inner pages
- a dense footer with regulatory disclaimers

## Motion & accessibility

- Content fades up as it scrolls into view (IntersectionObserver plus CSS); there are no animation libraries.
- `prefers-reduced-motion` turns off all transitions.
- Semantic landmarks, a skip link and visible focus states. Search and the mobile menu close on Escape.
- The approach tabs follow the WAI-ARIA tabs pattern, with arrow-key navigation.

## Deployment

This is a single-page app. Configure the host to send unknown paths to `index.html`
(Netlify: `/* /index.html 200`; Vercel: rewrites).
