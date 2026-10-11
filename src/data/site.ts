/**
 * Single source of truth for all site content.
 *
 * Copy is taken verbatim from the pages of sicim.com.sg (Home, About Us,
 * The Team, Investment Philosophy, Funds, Contact Us). Anything still awaiting
 * content from SICIM renders with a visible "placeholder" flag.
 * See CONTENT.md for the full audit.
 */

/** Set to false once all placeholders have been confirmed or replaced. */
export const SHOW_CONTENT_FLAGS = true;

export const company = {
  shortName: 'SICIM',
  legalName: 'Singapore Consortium Investment Management Limited',
  registration: '199607548K',
  established: 1996,
  // Wording as used on sicim.com.sg.
  licence: 'Capital Market Services Licence for Fund Management',
  regulator: 'Monetary Authority of Singapore',
};

/** Contact Us page, verbatim from sicim.com.sg. */
export const contact = {
  title: 'Contact Us',
  address: {
    label: 'Address',
    lines: ['250 Tanjong Pagar Road, #09-01, St. Andrew’s Centre', 'Singapore 088541'],
  },
  phone: { label: 'Telephone', display: '+65 6908 4866', href: 'tel:+6569084866' },
  email: { label: 'E-mail', display: 'contact@sicim.com.sg', href: 'mailto:contact@sicim.com.sg' },
  map: {
    title: 'Map showing St. Andrew’s Centre, 250 Tanjong Pagar Road, Singapore 088541',
    embed: 'https://www.google.com/maps?q=St.+Andrew%27s+Centre,+250+Tanjong+Pagar+Road,+Singapore+088541&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=St.+Andrew%27s+Centre%2C+250+Tanjong+Pagar+Road%2C+Singapore+088541',
  },
};

/** Primary navigation — mirrors the sections of sicim.com.sg. */
export const nav = [
  { label: 'About Us', to: '/about' },
  { label: 'The Team', to: '/team' },
  { label: 'Investment Philosophy', to: '/philosophy' },
  { label: 'Funds', to: '/funds' },
  { label: 'Contact Us', to: '/contact' },
];

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
};

/** Investment Philosophy page, verbatim from sicim.com.sg. */
export const philosophy = {
  title: 'Investment Philosophy',
  paragraphs: [
    'Singapore Consortium Investment Management Limited (“SICIM”) aims to deliver a consistent total return to investors through active portfolio management and assets growth. To build a portfolio of assets that will generate steady income and potential capital appreciation, it seeks to identify investments in various asset classes including but not limited to equity, preference shares, debt, options and warrants, across the world, with an eye to diversify across industries, currencies and maturities to manage the investment risks.',
    'To assist in the construction of such a diversified global portfolio, SICIM adopts a variety of investment strategies to achieve an optimal asset allocation. An analysis of the macroeconomic fundamentals of major developed and emerging markets to identify the points of the economic cycle each country or region is in allows SICIM to target the appropriate sectors and industries expected to benefit from their positioning in the economic cycle. Within each sector and industry, the selection of suitable companies for investments is grounded primarily in fundamental analysis, both qualitatively and quantitatively. Once the candidates have been identified, a mix of securities issued by the companies are then targeted to obtain the optimal risk-adjusted returns for the portfolio.',
    'However, for investors that believe in taking low cost passive approach to investing in the market, SICIM offers a fund, using an Indexing strategy. Such fund seeks to mimic as closely as possible, before expenses, the performance of an Index the fund is designed to follow. The types & weights of securities in the portfolio are designed to broadly follow the respective weightings in the index constituents.',
  ],
};

export type Stage = {
  index: string;
  title: string;
  body: string;
  art: ArtVariant;
};

/**
 * The second philosophy paragraph, split sentence by sentence into the steps
 * of the process module. Step titles are short labels; the body text is verbatim.
 */
export const process = {
  intro:
    'To assist in the construction of such a diversified global portfolio, SICIM adopts a variety of investment strategies to achieve an optimal asset allocation.',
  steps: [
    {
      index: '01',
      title: 'Macroeconomic analysis',
      body: 'An analysis of the macroeconomic fundamentals of major developed and emerging markets to identify the points of the economic cycle each country or region is in allows SICIM to target the appropriate sectors and industries expected to benefit from their positioning in the economic cycle.',
      art: 'horizon',
    },
    {
      index: '02',
      title: 'Fundamental analysis',
      body: 'Within each sector and industry, the selection of suitable companies for investments is grounded primarily in fundamental analysis, both qualitatively and quantitatively.',
      art: 'facade',
    },
    {
      index: '03',
      title: 'Portfolio construction',
      body: 'Once the candidates have been identified, a mix of securities issued by the companies are then targeted to obtain the optimal risk-adjusted returns for the portfolio.',
      art: 'colonnade',
    },
  ] as Stage[],
};

export type Fund = {
  slug: string;
  name: string;
  code: string;
  /** Verbatim from the Funds page of sicim.com.sg. */
  summary: string;
};

/** Funds page, verbatim from sicim.com.sg. */
export const funds: Fund[] = [
  {
    slug: 'global-investments-limited',
    name: 'Global Investments Limited',
    code: 'B73',
    summary:
      'Global Investments Limited (“GIL”) is a mutual fund company listed on the Main Board of the Singapore Exchange Securities Trading Limited (SGX-ST) and GIL is managed by SICIM.',
  },
  {
    slug: 'singapore-index-fund',
    name: 'Singapore Index Fund',
    code: 'S45U',
    summary: 'Singapore Index Fund (SIF) is listed on the Singapore Exchange Securities Trading Limited (SGX-ST).',
  },
];

/** Outbound links on the Funds page (approved by SICIM). */
export const fundLinks = {
  gilInfo: { href: 'https://globalinvestmentslimited.com' },
  sgx: { href: 'https://www.sgx.com' },
  sifNavAnnouncements: { href: 'https://www.sgx.com/securities/company-announcements' },
};

export const fundsPage = {
  title: 'Funds',
  gil: {
    // "Click here" is the linked text on the live site.
    body: ['Global Investments Limited (“GIL”) is a mutual fund company listed on the Main Board of the Singapore Exchange Securities Trading Limited (SGX-ST) and GIL is managed by SICIM.', 'Click here', 'for more information.'],
  },
  sif: {
    subtitle: 'Trading through SGX',
    body: 'Singapore Index Fund (SIF) is listed on the Singapore Exchange Securities Trading Limited (SGX-ST). Units deposited with The Central Depository (Pte) Limited (the “CDP”) will be traded on the SGX-ST at market prices throughout the trading day.',
    more: ['For detailed information, please visit', 'SGX', '.'],
  },
  info: {
    title: 'Fund Information',
    navTitle: 'SIF Daily Net Asset Value S$ for dealing date:',
    note: 'The above listed BID/OFFER prices should be used as indicative prices for next trading day.',
    announcement: ['For SIF’s daily NAV announcement to SGX, please', 'click here', '.'],
    steps: ['Security Name — select “SINGAPORE INDEX FUND”', 'Announcement Period — select “Last 3 Months”'],
  },
  documents: {
    title: 'Fund Documents',
    /** PDFs live in public/documents; replace a file there to publish a new version. */
    items: [
      { label: 'Prospectus', href: '/documents/sif-prospectus.pdf', size: '1.0 MB' },
      { label: 'Product Highlight Sheet', href: '/documents/sif-product-highlights-sheet.pdf', size: '205 KB' },
      { label: 'Annual Report', href: '/documents/sif-annual-report.pdf', size: '1.6 MB' },
      { label: 'Semi Annual Report', href: '/documents/sif-semi-annual-report.pdf', size: '1.3 MB' },
      { label: 'Application / Realisation Form', href: '/documents/sif-application-realisation-form.pdf', size: '199 KB' },
    ],
  },
};

/**
 * Last published SIF prices, used if /data/sif-nav.json cannot be loaded.
 * The live values are read from public/data/sif-nav.json so they can be
 * updated daily without rebuilding the site.
 */
export const sifNavFallback = { dealingDate: '08-Oct-2026', bid: '5.0315', offer: '5.1839' };

export type Metric = {
  label: string;
  value: string;
  caption: string;
};

/** Figures drawn only from the About Us and Funds pages. */
export const metrics: Metric[] = [
  { label: 'Incorporated', value: '1996', caption: 'Incorporated in Singapore' },
  { label: 'Licensed', value: '1996', caption: 'Capital Market Services Licence for Fund Management issued by the Monetary Authority of Singapore' },
  { label: 'Funds', value: '2', caption: 'Listed on the Singapore Exchange (SGX-ST)' },
  { label: 'Asset classes', value: '6', caption: 'A broad range of diversified asset classes' },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string[];
};

/** The Team page, verbatim from sicim.com.sg. */
export const teamPage = { title: 'The Team', board: 'The Board' };

export const team: Person[] = [
  {
    slug: 'boon-swan-foo',
    name: 'Boon Swan Foo',
    role: 'Executive Chairman',
    initials: 'BSF',
    bio: [
      'Mr Boon is the Executive Director and Chairman of Singapore Consortium Investment Management Limited.',
      'Mr Boon is also the Chairman and non-executive Director of Global Investments Limited, a mutual fund company listed on SGX-ST.',
      'Mr Boon served as Chief Executive Officer and Deputy Chairman of ST Engineering Ltd from October 1997 to May 2001, and was the Managing Director of Agency for Science, Technology and Research (A*STAR) from January 2002 to January 2006. He also served concurrently as Executive Chairman of Exploit Technologies Pte Ltd, the commercial arm of A*STAR, from August 2001 to December 2009. For his stewardship of ST Engineering Ltd, Mr Boon was awarded one of Singapore’s most prestigious business awards, the Singapore Business Award for Outstanding CEO in 2000. Mr Boon was also Chairman of ST Asset Management Ltd. from April 2010 to December 2011.',
      'Mr Boon was a director of Intouch Holdings Plc, a telecommunications and satellite holding company listed on the Stock Exchange of Thailand from September 2007 to November 2016. He served on the board of MIH Holdings Limited (South Africa), an investment holding and internet company from April 2011 to October 2013. He also served on the board of Dongfeng Motor Corporation (China), an automobile manufacturer from July 2011 to January 2018 and the board of China National Offshore Oil Corporation, a national oil company from February 2012 to August 2019. He was also a director of China Huadian Corporation, a power generation company from April 2015 to October 2021 and a director of Orica Limited, one of the world’s largest providers of commercial explosives and blasting systems provider based in Australia from May 2019 to December 2022. Notably, Mr Boon previously served on the Board of China Baowu Steel Group Corporation Limited, the world’s largest steel producer from October 2019 to December 2022.',
      'Mr. Boon served as senior advisor to Temasek Holdings and Temasek International Advisors Pte. Ltd. from time to time over the last two decades. He was also an advisor to the Dean’s Council of Harvard’s Kennedy School of Government (U.S.A); Motorola Inc. Research Visionary Board (U.S.A); Commercialisation Advisory Board of Imperial College (U.K) and Advanced Institute of Science & Technology (Japan).',
      'Mr Boon graduated from Newcastle upon Tyne with a degree in Naval Architecture (First Class Honours). He is a member of the Institute of Singapore Chartered Accountants which in 2023 conferred on him the Distinguished Lifetime Membership Award. Mr Boon also holds an Honorary Degree of Doctor of the University from the University of Bradford, U.K., an MBA from the National University of Singapore, and has completed Harvard’s Advanced Management Program. He is a Senior Accredited Director of the Singapore Institute of Directors.',
    ],
  },
  {
    slug: 'goh-mui-hong',
    name: 'Goh Mui Hong',
    role: 'Executive Director & Chief Executive Officer',
    initials: 'GMH',
    bio: [
      'Mrs Goh Mui Hong is the Executive Director and Chief Executive Officer of Singapore Consortium Investment Management Limited.',
      'Mrs Goh has more than 30 years of extensive experience in managing fund management and trust companies which invest in the full spectrum of financial instruments ranging from public equities, bonds, loans, asset backed securities, currencies to alternative investments such as private equity, hedge funds, derivatives and commodities. She was also involved in launching and managing collateralised debt obligations from 1998 to 2015.',
      'Mrs Goh was the President and CEO of ST Asset Management Ltd (“STAM”) and Chairman of STAM’s Investment Committee from 2002 to 2019, during which STAM’s assets under management (“AUM”) grew to more than SGD 6 billion by December 2016. Concurrently, Mrs Goh was also the Executive Director of ST Trustees Ltd (established in 2005, holding a trust business licence from Monetary Authority of Singapore) which offers fiduciary trust services. From February 2004 to August 2008, Mrs Goh also held the positions of Group President & CEO of Vertex Venture Holdings Ltd and President & CEO of Vertex Management (II) Pte Ltd.',
      'Prior to STAM, Mrs Goh spent 11 years with the Overseas Union Bank Limited (“OUB”) group which she joined in 1990 and last appointed as Senior Vice President (Fund Management). Mrs Goh was appointed Executive Director & Chief Executive Officer of OUB Asset Management Ltd (“OUBAM”) (a wholly-owned subsidiary of OUB) in 1994. Under her stewardship, AUM at OUBAM grew from S$400 million to S$5.6 billion in April 2002, making OUBAM the largest local bank-backed fund management house in Singapore and a leading Asian manager of structured finance products.',
      'During her tenure at OUB, she was appointed director of several OUB group companies namely, Overseas Union Bank Trustees Ltd, OUB Optimix Funds Management Ltd, OUB-TA Asset Management Sdn Bhd and OUB Investments Pte Ltd. Subsequent to the takeover of OUB by United Overseas Bank Limited (“UOB”) in 2001, she also served as the Managing Director & Chief Operating Officer of UOB Asset Management Ltd and a Director of United International Securities Trading Pte Ltd and United Overseas Bank Trustees Limited.',
      'Mrs Goh served as a board member of China-Singapore Suzhou Industrial Park Development Group Co., Ltd and Chairman of its Audit Committee, as well as a member of the Investors’ Education Advisory Committee of Securities Investors Association (Singapore).',
      'Previously, she held directorship in Singapore Consortium Investment Management Ltd (1996 to 2002) and Singapore Corporation of Rehabilitative Enterprises (2003 to 2012). She was also a board member of Workforce Development Agency (“WDA”) and Chairman of its Investment Committee from 2007 to 2016. After WDA was restructured into SkillsFuture Singapore Agency (“SSG”) and Workforce Singapore, she continued to serve as a board member and Chairman of the Investment Committee in SSG from 2016 to 2017.',
      'Mrs Goh was a member of the Executive Committee of Investment Management Association of Singapore (1998 to 2002) and its Chairman of Education Sub-Committee, and a member of the Investors’ Education Advisory Committee of Securities Investors Association (Singapore) (2001 to 2002). She also served as a member of Investment Committee of the National Kidney Foundation (2006 to 2010) and the Finance Committee of Singapore Chinese Chamber of Commerce & Industry (2007 to 2009).',
      'Mrs Goh holds a Bachelor of Accountancy (2nd Class Honours) from University of Singapore, Masters of Business Administration from National University of Singapore and Masters of Science (Business) from Nanyang Technological University of Singapore and has completed the Advanced Management Program at Harvard Business School. She is also a member of CFA Institute. She was awarded Singapore’s National Day Public Service Medal in 2012.',
    ],
  },
  {
    slug: 'martha-tan-hui-keng',
    name: 'Martha Tan Hui Keng',
    role: 'Non-Executive Director',
    initials: 'MT',
    bio: [
      'Ms Tan was previously an audit partner of KPMG from 1989-2005 and has more than 25 years of experience in the public accounting field, which includes auditing, taxation, public listings, due diligence, mergers and acquisitions, internal control reviews and general business advisory services.',
      'She was a Director of STAM from 2010 to 2011 and a Director of Vertex Management (II) Pte Ltd from 2007 to 2009. She is currently a non-executive Director of Singapura Finance Limited, a Finance Company licenced by the Monetary Authority of Singapore and listed on the Main Board of the SGX-ST.',
      'Ms Tan holds a Degree (Honours) in Accountancy from the University of Singapore and is a Fellow member of the Institute of Singapore Chartered Accountants.',
    ],
  },
  {
    slug: 'chew-seng-fang',
    name: 'Chew Seng Fang',
    role: 'Non-Executive Director',
    initials: 'CSF',
    bio: [
      'Ms Chew has more than 35 years of experience in the corporate and personal tax planning. She was the tax director of Johnson & Johnson (S) Pte Ltd from 2009-2015 and was responsible for ensuring tax compliance, managing tax risks and optimizing tax position through proper tax planning and structuring initiatives. Ms Chew was the Regional Tax Controller of ICI Management (Singapore) Pte Ltd from 2000 to 2009. She held the position of Assistant Regional Tax Manager of BP Asia Pacific Pte Ltd from 1991 to 2000.',
      'Ms Chew holds a Bachelor of Accountancy degree from the University of Singapore.',
    ],
  },
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
  { title: 'Investment Philosophy', to: '/philosophy', text: 'philosophy diversification total return macroeconomic cycle fundamental analysis indexing' },
  { title: 'Our approach', to: '/philosophy#approach', text: 'identify invest build grow process' },
  { title: 'Asset classes', to: '/about', text: 'asset classes equities fixed income alternatives derivatives loans structured finance' },
  { title: 'Global Investments Limited (B73)', to: '/funds#global-investments-limited', text: 'GIL fund mutual SGX listed B73' },
  { title: 'Singapore Index Fund (S45U)', to: '/funds#singapore-index-fund', text: 'SIF index passive fund SGX S45U' },
  { title: 'SIF daily net asset value', to: '/funds#fund-information', text: 'NAV net asset value bid offer price daily' },
  { title: 'Fund documents', to: '/funds#fund-documents', text: 'prospectus product highlight sheet annual report semi annual application realisation form documents' },
  { title: 'The Team', to: '/team', text: 'team board chairman chief executive directors boon goh tan chew' },
  { title: 'Contact us', to: '/contact', text: 'contact phone telephone email address map st andrew tanjong pagar' },
  { title: 'Terms, disclaimer & privacy', to: '/legal', text: 'terms conditions disclaimer privacy legal' },
];
