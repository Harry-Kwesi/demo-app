import Pending from './Pending';
import Reveal from './Reveal';
import { company, metrics } from '../data/site';

/** Key figures. Only verified values are shown; the rest render as marked placeholders. */
export default function Metrics() {
  return (
    <section data-header="dark" aria-labelledby="metrics-heading" className="bg-ink py-28 text-paper sm:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal as="h2" id="metrics-heading" className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Key figures
          </Reveal>
          <Reveal className="max-w-sm text-[13px] leading-relaxed text-mute">
            Licensed by the {company.regulator} — {company.licence}.
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 120}
              className="flex flex-col border-b border-paper/10 py-10 sm:px-8 sm:first:pl-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r"
            >
              <dt className="eyebrow order-1 text-mute">{m.label}</dt>
              <dd className="order-2 mt-8 text-[clamp(64px,7vw,120px)] font-light leading-none tracking-[-0.05em]">
                {m.value}
                {!m.verified && <span className="sr-only"> — figure pending verification</span>}
              </dd>
              <dd className="order-3 mt-6 text-[14px] leading-relaxed text-mute">{m.caption}</dd>
              {!m.verified && (
                <dd className="order-4 mt-5">
                  <Pending label="Awaiting verified figure" />
                </dd>
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
