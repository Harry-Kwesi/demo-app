import Pending from './Pending';
import Reveal from './Reveal';
import { company, metrics } from '../data/site';

/** Black figures band. Only verified values are shown; the rest are marked placeholders. */
export default function Metrics() {
  return (
    <section aria-labelledby="metrics-heading" className="on-dark bg-ink py-20 text-white lg:py-24">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="metrics-heading" className="text-headline font-extrabold">
            SICIM at a glance
          </h2>
          <p className="max-w-md text-[14px] text-mute">
            Licensed by the {company.regulator} — {company.licence}.
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="flex flex-col bg-ink py-8 pr-6 sm:py-10 lg:px-8 lg:first:pl-0">
              <dt className="order-2 mt-4 text-[14px] font-bold">{m.label}</dt>
              <dd className="order-1 text-[clamp(44px,5vw,76px)] font-extrabold leading-none tracking-[-0.03em]">
                {m.value}
                {!m.verified && <span className="sr-only"> — figure pending verification</span>}
              </dd>
              <dd className="order-3 mt-2 text-[14px] leading-relaxed text-mute">{m.caption}</dd>
              {!m.verified && (
                <dd className="order-4 mt-4">
                  <Pending label="Awaiting figure" />
                </dd>
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
