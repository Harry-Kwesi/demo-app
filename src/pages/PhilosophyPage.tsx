import PageHero from '../components/PageHero';
import Philosophy from '../components/Philosophy';
import Approach from '../components/Approach';
import ContactCTA from '../components/ContactCTA';
import Reveal, { SplitHeading } from '../components/Reveal';
import { about } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function PhilosophyPage() {
  useTitle('Investment Philosophy');
  return (
    <>
      <PageHero
        eyebrow="Investment philosophy"
        lines={['We think', 'in decades,', <span className="text-mute">not quarters.</span>]}
        intro={about.mandate}
        art="colonnade"
        seed={4}
      />

      <section data-header="light" aria-labelledby="diversify-heading" className="bg-stone py-28 text-ink sm:py-36 lg:py-48">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold-deep lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Portfolio construction
          </Reveal>
          <div className="lg:col-span-9">
            <SplitHeading
              id="diversify-heading"
              className="text-headline font-light"
              lines={['A portfolio of assets built to generate steady income and potential capital appreciation — diversified across industries, currencies and maturities.']}
            />
            <div className="mt-16 grid gap-12 border-t border-ink/10 pt-12 text-[17px] leading-[1.7] text-mute-deep md:grid-cols-2">
              <Reveal>
                <p>
                  We seek investments across asset classes — including equity, preference shares, debt, options and warrants — around the
                  world. Diversification across industries, currencies and maturities is central to how we manage investment risk.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  For investors who believe in a low-cost, passive approach, SICIM also offers a fund that follows an indexing strategy,
                  seeking to mirror as closely as possible, before expenses, the performance of the index it is designed to track.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Philosophy showLink={false} />
      <Approach />
      <ContactCTA />
    </>
  );
}
