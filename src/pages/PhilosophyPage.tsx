import PageHeader from '../components/PageHeader';
import Philosophy from '../components/Philosophy';
import Approach from '../components/Approach';
import Investments from '../components/Investments';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { about } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function PhilosophyPage() {
  useTitle('Investment philosophy');
  return (
    <>
      <PageHeader
        crumb="Investment philosophy"
        title="We think in decades, not quarters."
        intro={about.mandate}
        art="colonnade"
        seed={4}
        sections={[
          { label: 'Portfolio construction', href: '#construction' },
          { label: 'Principles', href: '#principles' },
          { label: 'Our approach', href: '#approach' },
          { label: 'Asset classes', href: '#asset-classes' },
        ]}
      />

      <section id="construction" aria-labelledby="construction-heading" className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            id="construction-heading"
            eyebrow="Portfolio construction"
            title="Steady income and potential capital appreciation."
          />
          <div className="grid gap-10 border-t-2 border-ink pt-10 text-lg leading-relaxed text-mute-deep md:grid-cols-2">
            <Reveal>
              <h3 className="mb-4 text-title font-extrabold text-ink">Active, diversified portfolios</h3>
              <p>
                We seek investments across asset classes — including equity, preference shares, debt, options and warrants — around the world, diversifying across industries,
                currencies and maturities to manage investment risk.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mb-4 text-title font-extrabold text-ink">A passive option</h3>
              <p>
                For investors who prefer a low-cost, passive approach, SICIM offers a fund that follows an indexing strategy, seeking to mirror as closely as possible, before expenses,
                the performance of the index it is designed to track.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div id="principles">
        <Philosophy showLink={false} />
      </div>
      <Approach />
      <Investments />
      <ContactCTA />
    </>
  );
}
