import ArrowLink from './ArrowLink';
import Reveal from './Reveal';
import { about, principles } from '../data/site';

/** Black statement band with the mandate and the four principles. */
export default function Philosophy({ showLink = true }: { showLink?: boolean }) {
  return (
    <section aria-labelledby="philosophy-heading" className="on-dark bg-ink py-20 text-white lg:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-gold">Our investment philosophy</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <h2 id="philosophy-heading" className="text-display font-extrabold">
              We think in decades, <span className="text-mute">not quarters.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80">{about.mandate}</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.index}
              delay={i * 80}
              className="border-b border-white/15 py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="text-[40px] font-extrabold leading-none text-gold">{p.index}</p>
              <h3 className="mt-6 text-title font-extrabold">{p.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{p.body}</p>
            </Reveal>
          ))}
        </ol>

        {showLink && (
          <Reveal className="mt-14">
            <ArrowLink to="/philosophy" tone="light">
              Read our investment philosophy
            </ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
