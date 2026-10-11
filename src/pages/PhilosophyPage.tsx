import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Approach from '../components/Approach';
import ContactCTA from '../components/ContactCTA';
import Reveal from '../components/Reveal';
import { philosophy } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function PhilosophyPage() {
  useTitle(philosophy.title);
  const [opening, , indexing] = philosophy.paragraphs;
  return (
    <>
      <PageHeader
        crumb={philosophy.title}
        title={philosophy.title}
        art="colonnade"
        seed={4}
        sections={[
          { label: 'Overview', href: '#overview' },
          { label: 'Our approach', href: '#approach' },
          { label: 'Indexing strategy', href: '#indexing' },
        ]}
      />

      <section id="overview" aria-label="Overview" className="bg-white pt-16 lg:pt-24">
        <div className="container-site grid lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="border-l-4 border-ink pl-6 text-[clamp(20px,1.9vw,28px)] font-semibold leading-[1.5] lg:pl-10">{opening}</p>
          </Reveal>
        </div>
      </section>

      <Approach variant="list" />

      <section id="indexing" aria-labelledby="indexing-heading" className="bg-surface py-16 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <h2 id="indexing-heading" className="text-display font-extrabold">
              Indexing strategy
            </h2>
          </Reveal>
          <Reveal delay={80} className="border-t-4 border-ink bg-white p-8 lg:col-span-8 lg:p-10">
            <p className="text-lg leading-relaxed text-mute-deep">{indexing}</p>
            <Link to="/funds" className="group mt-8 inline-flex items-center gap-2 font-bold">
              <span className="u-link">Funds</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
