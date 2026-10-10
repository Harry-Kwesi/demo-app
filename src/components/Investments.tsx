import { Link } from 'react-router-dom';
import Art from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { assetClasses } from '../data/site';

/** Asset-class cards. */
export default function Investments({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="asset-classes" aria-labelledby="investments-heading" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="investments-heading"
          eyebrow="What we invest in"
          title="Diversified across asset classes."
          intro="Across industries, currencies and maturities — around the world."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {assetClasses.map((a, i) => (
            <Reveal as="li" key={a.slug} id={a.slug} delay={i * 100} className="scroll-mt-28">
              <Link to={detailed ? '/contact' : `/funds#${a.slug}`} className="group flex h-full flex-col bg-white">
                <div className="zoom grain relative aspect-[16/10] overflow-hidden bg-ink">
                  <Art variant={a.art} seed={i + 21} />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[13px] font-bold text-gold-deep">{a.index}</p>
                  <h3 className="mt-3 text-title font-extrabold">{a.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mute-deep">{a.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold">
                    <span className="u-link">{detailed ? 'Enquire' : 'Learn more'}</span>
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
