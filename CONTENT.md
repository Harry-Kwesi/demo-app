# Content audit

All copy lives in `src/data/site.ts`. It was copied word for word from screenshots of each page of sicim.com.sg,
supplied by the client.

## Pages

| Page | Source | Notes |
| --- | --- | --- |
| Home | "Our Philosophy" hero and the "Latest News" notice | Verbatim |
| About Us | Single paragraph | Verbatim. The key-facts strip and asset-class list restate that paragraph |
| The Team | "The Board": Boon Swan Foo, Goh Mui Hong, Martha Tan Hui Keng, Chew Seng Fang | Full bios verbatim |
| Investment Philosophy | Three paragraphs | Verbatim. Paragraph 2 is split by sentence into the process steps |
| Funds | GIL (B73), SIF (S45U), Fund Information, Fund Documents | Verbatim. SIF prices load from `public/data/sif-nav.json` |
| Contact Us | Map, address, telephone, e-mail | Verbatim. The map is a Google Maps embed of St. Andrew's Centre |

The homepage sections after "Latest News" reuse text from these pages; they add no new copy.

## Labels added for the design

These short headings are not on sicim.com.sg:
- the process step titles: Macroeconomic analysis, Fundamental analysis, Portfolio construction
- the "Our approach" and "Indexing strategy" headings
- the "Licensed since 1996" hero card
- the figures band labels (Incorporated, Licensed, Funds, Asset classes)
- "Integrated investment management and advisory services" as a heading (the phrase comes from About Us)

## Fund documents

The PDFs in `public/documents/` were supplied by the client:
- SIF Prospectus (registered with MAS 11 Sep 2026)
- Product Highlights Sheet
- Annual Report (FY ended 30 Jun 2026)
- Semi Annual Report (half year ended 31 Dec 2025)
- Application / Realisation Form (approved 10 Sep 2026)

Replace a file with one of the same name to publish a new version.

## External links (approved by the client)

- GIL "Click here" → https://globalinvestmentslimited.com
- "SGX" → https://www.sgx.com
- SIF NAV announcement "click here" → https://www.sgx.com/securities/company-announcements

## Still needed from SICIM

- **Terms and Conditions, Disclaimer and Privacy** text for `/legal`. It currently shows placeholders.
- **Director name**: the prospectus lists "Tan Mui Hong"; the website uses "Goh Mui Hong". The site keeps "Goh Mui Hong".
- **Photography** (optional): board portraits and a hero image. Generated artwork and initials are shown until then.

## Wording kept as on the live site

- "Capital Market Services Licence". MAS's own term is "Capital Markets Services Licence".
- "assets growth", "Mr. Boon" / "Mr Boon", "licenced".
