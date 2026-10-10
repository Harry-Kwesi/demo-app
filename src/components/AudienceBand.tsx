import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { audiences } from '../data/site';
import { useAudience } from '../hooks/useAudience';

/** Tailored introduction that follows the audience picked in the utility bar. */
export default function AudienceBand() {
  const { audience, setAudience } = useAudience();
  const current = audiences.find((a) => a.key === audience) ?? audiences[0];
  return (
    <section aria-labelledby="audience-heading" className="bg-surface">
      <div className="container-site py-16 lg:py-20">
        <div role="tablist" aria-label="Choose your investor type" className="mb-10 flex flex-wrap gap-2">
          {audiences.map((a) => (
            <button
              key={a.key}
              role="tab"
              type="button"
              aria-selected={audience === a.key}
              onClick={() => setAudience(a.key)}
              className={`border-2 px-5 py-2.5 text-[14px] font-bold transition-colors ${
                audience === a.key ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
        <Reveal key={current.key} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div role="tabpanel" className="lg:col-span-8">
            <p className="eyebrow mb-4 text-gold-deep">For {current.label.toLowerCase()}</p>
            <h2 id="audience-heading" className="text-headline font-extrabold">
              {current.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute-deep">{current.body}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to={current.cta.to} className="btn-primary group">
              {current.cta.label}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
