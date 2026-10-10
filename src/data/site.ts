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

/** Primary navigation — mirrors the sections of sicim.com.sg. */
export const nav = [
  { label: 'About Us', to: '/about' },
  { label: 'The Team', to: '/team' },
  { label: 'Investment Philosophy', to: '/philosophy' },
  { label: 'Funds', to: '/funds' },
  { label: 'Contact Us', to: '/contact' },
];

/** Audience selector in the utility bar — SICIM's published client types. */
export const audiences = [
  {
    key: 'individual',
    label: 'Individual investors',
    headline: 'Access to diversified, professionally managed portfolios.',
    body: 'SICIM manages funds listed on the Singapore Exchange, giving individual investors access to a diversified global portfolio or a low-cost indexing approach.',
    cta: { label: 'Explore our funds', to: '/funds#funds' },
  },
  {
    key: 'institutional',
    label: 'Institutional clients',
    headline: 'Integrated investment management and advisory services.',
    body: 'We work with institutional clients across diversified asset classes — equities, fixed income and alternative investments — guided by fundamental analysis.',
    cta: { label: 'Talk to our team', to: '/contact' },
  },
  {
    key: 'funds',
    label: 'Mutual funds',
    headline: 'A licensed fund manager for collective investment schemes.',
    body: 'As holder of a Capital Markets Services Licence for Fund Management, SICIM acts as manager to mutual funds, including SGX-listed Global Investments Limited.',
    cta: { label: 'About SICIM', to: '/about' },
  },
] as const;

export type AudienceKey = (typeof audiences)[number]['key'];

/** Homepage copy, verbatim from sicim.com.sg (home page). */
export const home = {
  siteTitle: 'Singapore Consortium Investment Management Limited',
  hero: {
    title: 'Our Philosophy',
    body: 'We aim to deliver a consistent total return to investors through active portfolio management and assets growth.',
    cta: { label: 'Learn More', to: '/philosophy' },
  },
  latestNews: {
    title: 'Latest News',
    body: 'Please read the terms and conditions, disclaimer and privacy carefully before using this website. By using this website, you confirm that you have read and accept them. If you do not agree to them, do not access or use this website.',
  },
};

export const about = {
  /** About Us page, verbatim from sicim.com.sg. */
  title: 'About Us',
  body: 'Singapore Consortium Investment Management Limited (“SICIM”) was incorporated in Singapore in 1996 and holds a Capital Market Services Licence for Fund Management issued by the Monetary Authority of Singapore in 1996. SICIM offers integrated investment management and advisory services to investors over a broad range of diversified asset classes that include public and private equities, fixed income instruments, loans, derivatives, structured finance and alternative investments.',
  /** Restates facts from the paragraph above for the page's key-facts strip. */
  facts: [
    { label: 'Incorporated', value: '1996', detail: 'Incorporated in Singapore' },
    { label: 'Licensed', value: '1996', detail: 'Capital Market Services Licence for Fund Management issued by the Monetary Authority of Singapore' },
  ],
  assetClasses: ['Public and private equities', 'Fixed income instruments', 'Loans', 'Derivatives', 'Structured finance', 'Alternative investments'],
  mandate:
    'SICIM aims to deliver a consistent total return to investors through active portfolio management and asset growth.',
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

/** Pages and sections offered by the header search. */
export const searchIndex = [
  { title: 'About SICIM', to: '/about', text: 'overview company singapore 1996 fund manager licence MAS clients' },
  { title: 'Corporate information', to: '/about#corporate', text: 'registration licence regulator monetary authority office address' },
  { title: 'Investment philosophy', to: '/philosophy', text: 'philosophy diversification total return macroeconomic cycle fundamental analysis' },
  { title: 'Our approach', to: '/philosophy#approach', text: 'identify invest build grow process' },
  { title: 'Asset classes', to: '/funds#asset-classes', text: 'equities fixed income alternatives derivatives loans structured finance' },
  { title: 'Global Investments Limited', to: '/funds#global-investments-limited', text: 'fund mutual SGX listed' },
  { title: 'Singapore Index Fund', to: '/funds#singapore-index-fund', text: 'index passive fund SGX' },
  { title: 'Leadership', to: '/team', text: 'team chairman chief executive directors' },
  { title: 'Insights', to: '/insights', text: 'commentary announcements reports news' },
  { title: 'Contact us', to: '/contact', text: 'contact phone email address enquiry' },
  { title: 'Privacy, legal & disclosures', to: '/legal', text: 'privacy legal disclosures terms' },
];
