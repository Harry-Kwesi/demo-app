import PageHero from '../components/PageHero';
import Art from '../components/Art';
import Reveal, { SplitHeading } from '../components/Reveal';
import Pending from '../components/Pending';
import ContactCTA from '../components/ContactCTA';
import { assetClasses, funds } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function Funds() {
  useTitle('Funds & Investments');
  return (
    <>
      <PageHero
        eyebrow="Funds & investments"
        lines={['Diversified', <span className="text-mute">by design.</span>]}
        intro="SICIM invests across the global financial markets — public and private equities, fixed income, loans, derivatives, structured finance and alternative investments."
        art="bridge"
        seed={5}
      />

      <section data-header="light" aria-labelledby="classes-heading" className="bg-paper py-28 text-ink sm:py-36 lg:py-48">
        <div className="container-site">
          <Reveal as="h2" id="classes-heading" className="eyebrow mb-16 flex items-center gap-4 text-gold-deep lg:mb-24">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Asset classes
          </Reveal>
          <div className="space-y-24 lg:space-y-40">
            {assetClasses.map((a, i) => (
              <article key={a.slug} id={a.slug} className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
                <Reveal
                  variant="mask"
                  className={`grain relative aspect-[16/10] overflow-hidden lg:col-span-7 ${i % 2 ? 'lg:order-2 lg:col-start-6' : ''}`}
                >
                  <Art variant={a.art} seed={i + 21} label={`Abstract architectural image for ${a.title}`} />
                </Reveal>
                <Reveal delay={150} className={`lg:col-span-4 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9'}`}>
                  <p className="eyebrow mb-6 text-gold-deep">{a.index}</p>
                  <h3 className="text-headline font-light uppercase">{a.title}</h3>
                  <p className="mt-6 text-[17px] leading-[1.7] text-mute-deep">{a.body}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-header="dark" aria-labelledby="funds-heading" className="bg-ink py-28 text-paper sm:py-36 lg:py-48">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold lg:col-span-3">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Funds managed
            </Reveal>
            <SplitHeading id="funds-heading" className="text-display font-light lg:col-span-9" lines={['Listed on', <span className="text-mute">the Singapore Exchange.</span>]} />
          </div>
          <ul className="mt-20 border-t border-paper/10 lg:mt-28">
            {funds.map((f, i) => (
              <Reveal as="li" key={f.slug} id={f.slug} delay={i * 100} className="grid scroll-mt-28 gap-6 border-b border-paper/10 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
                <p className="eyebrow text-gold lg:col-span-3">{f.type}</p>
                <div className="lg:col-span-5">
                  <h3 className="text-title font-light lg:text-[clamp(32px,3.4vw,52px)] lg:leading-[1.04]">{f.name}</h3>
                  <p className="mt-4 text-[14px] text-mute">{f.listing}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[16px] leading-[1.7] text-mute">{f.body}</p>
                  {!f.verified && <Pending className="mt-6" label={f.note ?? 'To be verified'} />}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-16 max-w-3xl text-[13px] leading-relaxed text-mute">
            The value of investments and any income from them can fall as well as rise. Past performance is not indicative of future
            performance. Nothing on this website constitutes an offer or solicitation to buy or sell any investment product.
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
