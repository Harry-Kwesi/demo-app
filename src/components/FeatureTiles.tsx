import { Link } from 'react-router-dom';
import Art from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import type { ArtVariant } from '../data/site';

const tiles: { label: string; title: string; body: string; to: string; art: ArtVariant }[] = [
  {
    label: 'Philosophy',
    title: 'We think in decades, not quarters.',
    body: 'How diversification and fundamental analysis shape every portfolio.',
    to: '/philosophy',
    art: 'colonnade',
  },
  {
    label: 'Funds',
    title: 'Funds listed on the Singapore Exchange.',
    body: 'Global Investments Limited and the Singapore Index Fund.',
    to: '/funds#funds',
    art: 'bridge',
  },
  {
    label: 'The Team',
    title: 'The Board',
    body: 'Boon Swan Foo, Goh Mui Hong, Martha Tan Hui Keng and Chew Seng Fang.',
    to: '/team',
    art: 'atrium',
  },
];

/** Three image tiles leading into the main sections of the site. */
export default function FeatureTiles() {
  return (
    <section aria-labelledby="explore-heading" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="explore-heading" eyebrow="Explore SICIM" title="Built for the long term." />
        <ul className="grid gap-8 md:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.to} delay={i * 100}>
              <Link to={t.to} className="group flex h-full flex-col">
                <div className="zoom grain relative aspect-[4/3] overflow-hidden bg-ink">
                  <Art variant={t.art} seed={i + 30} />
                </div>
                <div className="flex flex-1 flex-col border-b-2 border-ink pb-6 pt-6">
                  <p className="eyebrow text-gold-deep">{t.label}</p>
                  <h3 className="mt-3 text-title font-extrabold">{t.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mute-deep">{t.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold">
                    <span className="u-link">Learn more</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
