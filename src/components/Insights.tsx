import { Link } from 'react-router-dom';
import Art from './Art';
import Pending from './Pending';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { insights } from '../data/site';
import type { ArtVariant } from '../data/site';

const covers: ArtVariant[] = ['horizon', 'facade', 'skyline', 'bridge'];

/** Article cards: image, category, date, title. */
export function InsightCards({ limit, category }: { limit?: number; category?: string }) {
  const filtered = category ? insights.filter((i) => i.category === category) : insights;
  const items = limit ? filtered.slice(0, limit) : filtered;
  return (
    <ul className={`grid gap-8 md:grid-cols-2 ${limit === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.slug} id={item.slug} delay={i * 80} className="scroll-mt-28">
          <Link to={`/insights#${item.slug}`} className="group flex h-full flex-col">
            <div className="zoom grain relative aspect-[16/10] overflow-hidden bg-ink">
              <Art variant={covers[i % covers.length]} seed={i + 60} />
            </div>
            <div className="flex flex-1 flex-col pt-5">
              <p className="flex items-center gap-3 text-[13px] font-bold">
                <span className="text-gold-deep">{item.category}</span>
                <span className="h-3 w-px bg-line" aria-hidden="true" />
                <span className="text-mute-deep">{item.date}</span>
              </p>
              <h3 className="mt-3 flex-1 text-title font-extrabold">
                <span className="u-link">{item.title}</span>
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold">
                Read more
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export default function Insights() {
  return (
    <section aria-labelledby="insights-heading" className="bg-surface py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="insights-heading" eyebrow="Insights" title="Latest perspectives." action={<ArrowLink to="/insights">All insights</ArrowLink>} />
        <Pending className="mb-8" label="Sample cards — replace with published articles" />
        <InsightCards limit={3} />
      </div>
    </section>
  );
}
