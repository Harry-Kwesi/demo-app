import Reveal from './Reveal';
import { metrics } from '../data/site';

/** Black figures band; every value comes from the About Us and Funds pages. */
export default function Metrics() {
  return (
    <section aria-labelledby="metrics-heading" className="on-dark bg-ink py-20 text-white lg:py-24">
      <div className="container-site">
        <h2 id="metrics-heading" className="sr-only">
          SICIM at a glance
        </h2>
        <dl className="grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="flex flex-col bg-ink py-8 pr-6 sm:py-10 lg:px-8 lg:first:pl-0">
              <dt className="order-2 mt-4 text-[14px] font-bold">{m.label}</dt>
              <dd className="order-1 text-[clamp(44px,5vw,76px)] font-extrabold leading-none tracking-[-0.03em]">{m.value}</dd>
              <dd className="order-3 mt-2 text-[14px] leading-relaxed text-mute">{m.caption}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
