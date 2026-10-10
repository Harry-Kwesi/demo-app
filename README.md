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
  components/         Header (utility bar, dropdown menus, search, mobile drawer), Hero,
                      AudienceBand, FeatureTiles, Philosophy, Approach (tabs), Investments,
                      FundTable, Metrics, Team, Insights, ContactCTA, Footer, plus primitives
                      (Reveal, ArrowLink, SectionHeading, PageHeader, Media, Art, Portrait, Pending)
  pages/              Home, About, Philosophy, Funds, Team, Insights, Contact, Legal
  hooks/              useInView, useAudience (remembers the visitor's investor type), useTitle
```

## Imagery

Each image slot currently renders a generated, dark architectural composition (`components/Art.tsx`): seeded SVG that
weighs a few KB, so there are no image requests. To use licensed photography, put files in `public/images/` and set `src`
on the matching entry in `media` (`data/site.ts`). Portraits take a `src` in `Portrait`, which shows them in grayscale
and brings in colour on hover.

## Design

The layout follows large asset-manager conventions:
- a black utility bar with an investor-type selector, which tailors the homepage band and the contact form
- a sticky white header with dropdown menus, site search and a primary "Contact us" button
- bold headlines with solid rectangular buttons
- image tiles, a tabbed process module and a fund table (cards on phones)
- a black figures band, breadcrumbs and a sticky in-page sub-navigation on inner pages
- a dense footer with regulatory disclaimers

## Motion & accessibility

- Content fades up as it scrolls into view (IntersectionObserver plus CSS); there are no animation libraries.
- `prefers-reduced-motion` turns off all transitions.
- Semantic landmarks, a skip link and visible focus states. Menus close on Escape or an outside click.
- The approach tabs follow the WAI-ARIA tabs pattern, with arrow-key navigation.

## Deployment

This is a single-page app. Configure the host to send unknown paths to `index.html`
(Netlify: `/* /index.html 200`; Vercel: rewrites).
