import PageHero from '../components/PageHero';
import Reveal, { SplitHeading } from '../components/Reveal';
import Media from '../components/Media';
import Metrics from '../components/Metrics';
import ContactCTA from '../components/ContactCTA';
import ArrowLink from '../components/ArrowLink';
import Pending from '../components/Pending';
import { about, company, funds } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function About() {
  useTitle('About');
  const facts: [string, string][] = [
    ['Legal name', company.legalName],
    ['Incorporated', `Singapore, ${company.established}`],
    ['Company registration', company.registration],
    ['Licence', company.licence],
    ['Regulator', company.regulator],
  ];
  return (
    <>
      <PageHero
        eyebrow="About SICIM"
        lines={['A Singapore', 'fund manager', <span className="text-mute">since 1996.</span>]}
        intro={about.summary}
        art="facade"
        seed={3}
      />

      <section data-header="light" aria-labelledby="mandate-heading" className="bg-stone py-28 text-ink sm:py-36 lg:py-48">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold-deep lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Our mandate
          </Reveal>
          <div className="lg:col-span-9">
            <SplitHeading id="mandate-heading" className="text-headline font-light" lines={[about.mandate]} />
            <div className="mt-20 grid gap-14 border-t border-ink/10 pt-12 md:grid-cols-2">
              <Reveal>
                <h3 className="eyebrow mb-6 text-mute-deep">Who we serve</h3>
                <ul className="divide-y divide-ink/10 border-y border-ink/10">
                  {about.clients.map((c) => (
                    <li key={c} className="py-5 text-title font-light">
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="eyebrow mb-6 text-mute-deep">Funds under management</h3>
                <ul className="divide-y divide-ink/10 border-y border-ink/10">
                  {funds.map((f) => (
                    <li key={f.slug} className="py-5">
                      <p className="text-title font-light">{f.name}</p>
                      <p className="mt-2 text-[14px] text-mute-deep">{f.listing}</p>
                    </li>
                  ))}
                </ul>
                <ArrowLink to="/funds" tone="dark" className="mt-10">
                  Funds & investments
                </ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section data-header="dark" aria-labelledby="facts-heading" className="bg-ink py-28 text-paper sm:py-36">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal as="h2" id="facts-heading" className="eyebrow mb-10 flex items-center gap-4 text-gold">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Corporate information
            </Reveal>
            <Reveal variant="mask" className="grain relative aspect-[4/5] overflow-hidden">
              <Media slot="about" variant="atrium" seed={9} />
            </Reveal>
          </div>
          <dl className="self-end border-t border-paper/10 lg:col-span-6 lg:col-start-7">
            {facts.map(([k, v], i) => (
              <Reveal key={k} delay={i * 80} className="grid gap-2 border-b border-paper/10 py-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <dt className="eyebrow pt-1.5 text-mute">{k}</dt>
                <dd className="text-[19px] font-light">{v}</dd>
              </Reveal>
            ))}
            <Reveal className="grid gap-2 border-b border-paper/10 py-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="eyebrow pt-1.5 text-mute">Office</dt>
              <dd className="text-[19px] font-light">
                {company.address.lines.join(', ')}
                {!company.address.verified && (
                  <span className="mt-4 block">
                    <Pending label="Confirm current address" />
                  </span>
                )}
              </dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <Metrics />
      <ContactCTA />
    </>
  );
}
