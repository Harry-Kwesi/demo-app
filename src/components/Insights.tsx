import { Link } from 'react-router-dom';
import Pending from './Pending';
import Reveal, { SplitHeading } from './Reveal';
import ArrowLink from './ArrowLink';
import { insights } from '../data/site';

/** Publication-style rows: category · date · title · arrow. */
export function InsightRows({ limit }: { limit?: number }) {
  const items = limit ? insights.slice(0, limit) : insights;
  return (
    <ul className="border-t border-paper/15">
      {items.map((item, i) => (
        <Reveal as="li" key={item.slug} delay={i * 80} className="border-b border-paper/15">
          <Link
            to={`/insights#${item.slug}`}
            className="group grid gap-3 py-9 transition-colors duration-500 md:grid-cols-[12rem_9rem_1fr_auto] md:items-baseline md:gap-8 lg:py-12"
          >
            <span className="eyebrow text-gold">{item.category}</span>
            <span className="text-[13px] tracking-[0.06em] text-mute">{item.date}</span>
            <span className="text-title font-light text-paper/80 transition-[color,transform] duration-700 ease-quiet group-hover:translate-x-2 group-hover:text-paper">
              {item.title}
            </span>
            <span className="arrow hidden text-3xl font-light text-gold md:block" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export default function Insights() {
  return (
    <section data-header="dark" aria-labelledby="insights-heading" className="bg-ink py-28 text-paper sm:py-36 lg:py-48">
      <div className="container-site">
        <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
          <div>
            <Reveal className="eyebrow mb-10 flex items-center gap-4 text-gold">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Insights
            </Reveal>
            <SplitHeading id="insights-heading" className="text-display font-light" lines={['Perspectives', <span className="text-mute">& announcements.</span>]} />
          </div>
          <Reveal className="flex flex-col items-start gap-6 lg:items-end">
            <Pending label="Sample rows — replace with published articles" />
            <ArrowLink to="/insights">All insights</ArrowLink>
          </Reveal>
        </div>
        <InsightRows limit={3} />
      </div>
    </section>
  );
}
