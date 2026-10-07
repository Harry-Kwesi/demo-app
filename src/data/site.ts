/**
 * Single source of truth for all site content.
 *
 * Facts are drawn from SICIM's public information (sicim.com.sg — About Us,
 * Investment Philosophy and The Team pages — the MAS Financial Institutions
 * Directory and SGX filings). Anything that could not be verified is marked
 * `verified: false` and rendered with a visible "placeholder" flag until the
 * SICIM team confirms or replaces it. See CONTENT.md for the full audit.
 */

/** Set to false once all placeholders have been confirmed or replaced. */
export const SHOW_CONTENT_FLAGS = true;

export const company = {
  shortName: 'SICIM',
  legalName: 'Singapore Consortium Investment Management Limited',
  registration: '199607548K',
  established: 1996,
  licence: 'Capital Markets Services Licence for Fund Management',
  regulator: 'Monetary Authority of Singapore',
  address: {
    lines: ['250 Tanjong Pagar Road', '#09-01 St. Andrew’s Centre', 'Singapore 088541'],
    // Listed in public directories; SICIM has filed a change of registered
    // address with SGX, so confirm this is current before launch.
    verified: false,
  },
  phone: { display: '+65 6908 4866', href: 'tel:+6569084866', verified: false },
  email: { display: 'enquiries@[to-be-confirmed]', href: '', verified: false },
};

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Philosophy', to: '/philosophy' },
  { label: 'Funds', to: '/funds' },
  { label: 'Team', to: '/team' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export const about = {
  summary:
    'Incorporated in Singapore in 1996, SICIM provides integrated investment management and advisory services across diversified asset classes — equities, fixed income and alternative investments — for individual investors, institutional clients and mutual funds.',
  mandate:
    'SICIM aims to deliver a consistent total return to investors through active portfolio management and asset growth.',
  clients: ['Individual investors', 'Institutional clients', 'Mutual funds'],
};

export type Principle = {
  index: string;
  title: string;
  body: string;
  art: ArtVariant;
};

export const principles: Principle[] = [
  {
    index: '01',
    title: 'Long-term thinking',
    body: 'We build portfolios designed to generate steady income and potential capital appreciation over time, rather than chase short-term movements.',
    art: 'horizon',
  },
  {
    index: '02',
    title: 'Disciplined capital',
    body: 'Diversification across industries, currencies and maturities is how we manage investment risk. Every allocation is grounded in fundamental analysis — qualitative and quantitative.',
    art: 'facade',
  },
  {
    index: '03',
    title: 'Active ownership',
    body: 'We manage portfolios actively, adapting allocation as macroeconomic conditions evolve across developed and emerging markets.',
    art: 'colonnade',
  },
  {
    index: '04',
    title: 'Enduring value',
    body: 'Our objective is constant: a consistent total return to investors through active portfolio management and asset growth.',
    art: 'skyline',
  },
];

export type Stage = {
  index: string;
  title: string;
  lead: string;
  body: string;
  art: ArtVariant;
};

export const stages: Stage[] = [
  {
    index: '01',
    title: 'Identify',
    lead: 'Reading the cycle.',
    body: 'We analyse the macroeconomic fundamentals of major developed and emerging markets to understand where each country or region sits in the economic cycle.',
    art: 'horizon',
  },
  {
    index: '02',
    title: 'Invest',
    lead: 'Selecting with rigour.',
    body: 'We target the sectors and industries expected to benefit from that positioning, then select companies within them on the strength of fundamental analysis.',
    art: 'facade',
  },
  {
    index: '03',
    title: 'Build',
    lead: 'Constructing the portfolio.',
    body: 'We combine a variety of investment strategies across equity, preference shares, debt, options and warrants to reach an optimal, globally diversified asset allocation.',
    art: 'colonnade',
  },
  {
    index: '04',
    title: 'Grow',
    lead: 'Compounding over time.',
    body: 'Diversified across industries, currencies and maturities, the portfolio is managed actively for steady income, potential capital appreciation and consistent total return.',
    art: 'skyline',
  },
];

export type AssetClass = {
  index: string;
  slug: string;
  title: string;
  body: string;
  art: ArtVariant;
};

/**
 * Asset classes SICIM publicly describes. The brief suggested "Private equity /
 * Alternative assets / Strategic investments"; only categories supported by
 * SICIM's published information are shown.
 */
export const assetClasses: AssetClass[] = [
  {
    index: '01',
    slug: 'equities',
    title: 'Public & Private Equities',
    body: 'Listed and private equity, including preference shares, selected through fundamental analysis across sectors positioned to benefit from the economic cycle.',
    art: 'skyline',
  },
  {
    index: '02',
    slug: 'fixed-income',
    title: 'Fixed Income',
    body: 'Debt instruments and loans chosen to provide steady income, diversified across currencies and maturities.',
    art: 'horizon',
  },
  {
    index: '03',
    slug: 'alternatives',
    title: 'Alternative Investments',
    body: 'Options, warrants, derivatives and structured finance used to broaden diversification and manage portfolio risk.',
    art: 'bridge',
  },
];

export type Fund = {
  slug: string;
  name: string;
  type: string;
  listing: string;
  body: string;
  verified: boolean;
  note?: string;
};

export const funds: Fund[] = [
  {
    slug: 'global-investments-limited',
    name: 'Global Investments Limited',
    type: 'Mutual fund',
    listing: 'Listed on the Singapore Exchange (SGX)',
    body: 'An SGX-listed mutual fund company managed by SICIM, investing in a diversified global portfolio with the aim of generating steady income and potential capital appreciation.',
    verified: true,
  },
  {
    slug: 'singapore-index-fund',
    name: 'Singapore Index Fund',
    type: 'Index fund',
    listing: 'Traded on the Singapore Exchange (SGX)',
    body: 'For investors who prefer a low-cost, passive approach. The fund follows an indexing strategy, seeking to mirror as closely as possible — before expenses — the performance of the index it is designed to track.',
    verified: false,
    note: 'Confirm current status and tracked index with SICIM before launch.',
  },
];

export type Metric = {
  label: string;
  value: string;
  caption: string;
  verified: boolean;
};

/** Only 1996 is verified. All other values are placeholders — do not fill with estimates. */
export const metrics: Metric[] = [
  { label: 'Established', value: '1996', caption: 'Year of incorporation in Singapore', verified: true },
  { label: 'Markets', value: '—', caption: 'Number of markets invested in', verified: false },
  { label: 'Capital', value: '—', caption: 'Assets under management', verified: false },
  { label: 'Investments', value: '—', caption: 'Number of portfolio holdings', verified: false },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  short: string;
  bio: string[];
  verified: boolean;
};

export const team: Person[] = [
  {
    slug: 'boon-swan-foo',
    name: 'Boon Swan Foo',
    role: 'Executive Chairman',
    initials: 'BSF',
    short: 'Executive Chairman of SICIM, with senior leadership experience across Singapore’s engineering and research sectors.',
    bio: [
      'Mr Boon is Executive Chairman and an Executive Director of SICIM, and Chairman and non-executive Director of Global Investments Limited, a mutual fund company listed on SGX-ST.',
      'He previously served as Chief Executive Officer and Deputy Chairman of ST Engineering Ltd from October 1997 to May 2001, and as Managing Director of A*STAR from January 2002 to January 2006.',
    ],
    // Sourced from SICIM's team page via search index; confirm roles are current.
    verified: false,
  },
  {
    slug: 'goh-mui-hong',
    name: 'Goh Mui Hong',
    role: 'Executive Director & Chief Executive Officer',
    initials: 'GMH',
    short: 'Executive Director and Chief Executive Officer of SICIM.',
    bio: ['Full biography to be provided by SICIM.'],
    verified: false,
  },
];

export type Insight = {
  slug: string;
  category: string;
  date: string;
  title: string;
};

/**
 * No articles were available to verify. These rows are layout placeholders and
 * must be replaced with real SICIM publications or SGX announcements.
 */
export const insights: Insight[] = [
  { slug: 'placeholder-1', category: 'Market Commentary', date: 'Date TBC', title: 'Placeholder — quarterly market commentary title' },
  { slug: 'placeholder-2', category: 'Announcement', date: 'Date TBC', title: 'Placeholder — fund announcement or SGX disclosure title' },
  { slug: 'placeholder-3', category: 'Perspective', date: 'Date TBC', title: 'Placeholder — investment perspective article title' },
  { slug: 'placeholder-4', category: 'Report', date: 'Date TBC', title: 'Placeholder — annual or semi-annual report title' },
];

export type ArtVariant = 'skyline' | 'facade' | 'colonnade' | 'horizon' | 'bridge' | 'atrium';

/**
 * Photography slots. Each defaults to a generated architectural composition;
 * set `src` to a licensed photograph (placed in /public/images) to replace it.
 */
export const media: Record<string, { src?: string; alt: string; art: ArtVariant }> = {
  hero: { alt: 'Dark, understated view of city towers at dusk', art: 'skyline' },
  about: { alt: 'Abstract detail of a building facade in low light', art: 'facade' },
  cta: { alt: 'Receding architectural atrium in shadow', art: 'atrium' },
  philosophy: { alt: 'A colonnade receding into darkness', art: 'colonnade' },
  funds: { alt: 'Suspension bridge cables against a dark sky', art: 'bridge' },
};
