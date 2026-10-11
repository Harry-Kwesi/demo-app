import type { ReactNode } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Pending from '../components/Pending';
import ContactCTA from '../components/ContactCTA';
import { fundLinks, funds, fundsPage } from '../data/site';
import { useSifNav } from '../hooks/useSifNav';
import { useTitle } from '../hooks/useTitle';

const [gil, sif] = funds;

/** External link styled for running text; opens in a new tab. */
function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function FundHeading({ name, code, id }: { name: string; code: string; id: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <h2 id={id} className="text-headline font-extrabold">
        {name}
      </h2>
      <span className="border-2 border-ink px-3 py-1 text-[15px] font-extrabold" aria-label={`SGX code ${code}`}>
        {code}
      </span>
    </div>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export default function Funds() {
  useTitle(fundsPage.title);
  const nav = useSifNav();
  const { gil: gilCopy, sif: sifCopy, info, documents } = fundsPage;
  const linksPending = Object.values(fundLinks).some((l) => !l.verified);

  return (
    <>
      <PageHeader
        crumb={fundsPage.title}
        title={fundsPage.title}
        art="bridge"
        seed={5}
        sections={[
          { label: `${gil.name} (${gil.code})`, href: `#${gil.slug}` },
          { label: `${sif.name} (${sif.code})`, href: `#${sif.slug}` },
          { label: info.title, href: '#fund-information' },
          { label: documents.title, href: '#fund-documents' },
        ]}
      />

      {/* Global Investments Limited */}
      <section id={gil.slug} aria-labelledby={`${gil.slug}-heading`} className="bg-white py-16 lg:py-20">
        <Reveal className="container-site grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FundHeading id={`${gil.slug}-heading`} name={gil.name} code={gil.code} />
          </div>
          <div className="border-t-2 border-ink pt-6 lg:col-span-7">
            <p className="text-lg leading-relaxed text-mute-deep">
              {gilCopy.body[0]} <Ext href={fundLinks.gilInfo.href}>{gilCopy.body[1]}</Ext> {gilCopy.body[2]}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Singapore Index Fund */}
      <section id={sif.slug} aria-labelledby={`${sif.slug}-heading`} className="border-t border-line bg-white py-16 lg:py-20">
        <Reveal className="container-site grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FundHeading id={`${sif.slug}-heading`} name={sif.name} code={sif.code} />
            <p className="mt-4 text-title font-extrabold text-gold-deep">{sifCopy.subtitle}</p>
          </div>
          <div className="space-y-5 border-t-2 border-ink pt-6 text-lg leading-relaxed text-mute-deep lg:col-span-7">
            <p>{sifCopy.body}</p>
            <p>
              {sifCopy.more[0]} <Ext href={fundLinks.sgx.href}>{sifCopy.more[1]}</Ext>
              {sifCopy.more[2]}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Fund information — SIF daily NAV */}
      <section id="fund-information" aria-labelledby="info-heading" className="on-dark bg-ink py-16 text-white lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 id="info-heading" className="text-display font-extrabold">
              {info.title}
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-10 border-t border-white/15 pt-10">
            <h3 className="text-title font-extrabold">
              {info.navTitle} <span className="text-gold">{nav.dealingDate}</span>
            </h3>
            <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-px bg-white/15">
              <div className="bg-ink py-2 pr-6">
                <dt className="text-[14px] font-bold text-mute">Bid price</dt>
                <dd className="mt-2 text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-0.03em]">{nav.bid}</dd>
              </div>
              <div className="bg-ink py-2 pl-6">
                <dt className="text-[14px] font-bold text-mute">Offer price</dt>
                <dd className="mt-2 text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-0.03em]">{nav.offer}</dd>
              </div>
            </dl>
            <p className="mt-6 text-[13px] text-mute">{info.note}</p>
          </Reveal>
          <Reveal delay={120} className="mt-12 bg-white p-6 text-ink sm:p-8">
            <p className="text-lg font-bold">
              {info.announcement[0]} <Ext href={fundLinks.sifNavAnnouncements.href}>{info.announcement[1]}</Ext>
              {info.announcement[2]}
            </p>
            <ul className="mt-4 space-y-2 text-[16px] text-mute-deep">
              {info.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </Reveal>
          {linksPending && <Pending className="mt-8" label="Confirm external link URLs" />}
        </div>
      </section>

      {/* Fund documents */}
      <section id="fund-documents" aria-labelledby="docs-heading" className="bg-surface py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 id="docs-heading" className="text-display font-extrabold">
              {documents.title}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.items.map((d, i) => (
              <Reveal as="li" key={d.label} delay={i * 60}>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className="group flex h-full items-center justify-between gap-4 border-t-2 border-ink bg-white p-6 transition-colors hover:bg-ink hover:text-white">
                    <span className="flex items-center gap-4">
                      <DocIcon />
                      <span>
                        <span className="block text-title font-extrabold">{d.label}</span>
                        <span className="mt-1 block text-[13px] font-semibold text-mute-deep group-hover:text-mute">
                          PDF · {d.size}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </span>
                      </span>
                    </span>
                    <span className="arrow" aria-hidden="true">
                      ↓
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 border-t-2 border-ink bg-white p-6">
                    <span className="flex items-center gap-4">
                      <DocIcon />
                      <span className="text-title font-extrabold">{d.label}</span>
                    </span>
                    <Pending label="Document file to be supplied" />
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
