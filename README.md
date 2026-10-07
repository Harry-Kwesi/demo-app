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
  components/         Header, Hero, SectionIntro, Philosophy, Approach, Investments,
                      Metrics, Team, Insights, ContactCTA, Footer, plus primitives
                      (Reveal, ArrowLink, Media, Art, Portrait, PageHero, Pending)
  pages/              Home, About, Philosophy, Funds, Team, Insights, Contact, Legal
  hooks/              useInView, useParallax, useReducedMotion, useTitle
```

## Imagery

Each image slot currently renders a generated, dark architectural composition (`components/Art.tsx`): seeded SVG that
weighs a few KB, so there are no image requests. To use licensed photography, put files in `public/images/` and set `src`
on the matching entry in `media` (`data/site.ts`). Portraits take a `src` in `Portrait`, which shows them in grayscale
and brings in colour on hover.

## Motion & accessibility

- Reveal and mask animations use IntersectionObserver plus CSS transitions; parallax uses a single rAF-throttled scroll handler.
  There are no animation libraries.
- `prefers-reduced-motion` turns off all transitions, parallax and the slow zoom.
- Semantic landmarks, a skip link, visible focus states and `aria-expanded` disclosure rows.
  The mobile menu is a full-screen dialog that closes on Escape.
- The header reads `data-header="dark|light"` from the section beneath it and switches colours to match.

## Deployment

This is a single-page app. Configure the host to send unknown paths to `index.html`
(Netlify: `/* /index.html 200`; Vercel: rewrites).
