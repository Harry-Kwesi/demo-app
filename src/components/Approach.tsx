import { useEffect, useRef, useState } from 'react';
import Art from './Art';
import Reveal, { SplitHeading } from './Reveal';
import { stages } from '../data/site';

/**
 * Scroll-driven story. On large screens a sticky visual crossfades between
 * stages while the copy scrolls past; on small screens each stage carries its
 * own image so the story reads as a sequence of full-width chapters.
 */
export default function Approach() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section data-header="dark" aria-labelledby="approach-heading" className="relative bg-ink-2 text-paper">
      <div className="container-site pb-10 pt-28 sm:pt-36 lg:pt-48">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Our approach
          </Reveal>
          <SplitHeading
            id="approach-heading"
            className="text-display font-light lg:col-span-9"
            lines={['From the cycle', <span className="text-mute">to the portfolio.</span>]}
          />
        </div>
      </div>

      <div className="container-site lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Sticky visual (desktop) */}
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-0 flex h-screen items-center py-24">
            <div className="grain relative h-full max-h-[760px] w-full overflow-hidden">
              {stages.map((s, i) => (
                <div
                  key={s.index}
                  aria-hidden="true"
                  className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-quiet ${
                    active === i ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0'
                  }`}
                >
                  <Art variant={s.art} seed={i * 5 + 2} />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <span className="text-[clamp(80px,9vw,150px)] font-light leading-none tracking-[-0.05em] text-paper/90" aria-hidden="true">
                  {stages[active].index}
                </span>
                <ol className="flex gap-2" aria-label="Approach progress">
                  {stages.map((s, i) => (
                    <li key={s.index} className="relative h-px w-10 overflow-hidden bg-paper/20">
                      <span className="sr-only">
                        {s.title}
                        {active === i ? ' (current)' : ''}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 origin-left bg-gold transition-transform duration-700 ease-quiet ${
                          i <= active ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <ol className="lg:col-span-5 lg:col-start-8">
          {stages.map((s, i) => (
            <li
              key={s.index}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className="flex flex-col justify-center border-t border-paper/10 py-16 first:border-t-0 lg:min-h-screen lg:border-t-0 lg:py-0"
            >
              <Reveal variant="mask" className="grain relative mb-10 aspect-[4/3] overflow-hidden lg:hidden">
                <Art variant={s.art} seed={i * 5 + 2} />
              </Reveal>
              <div
                className={`transition-opacity duration-700 ease-quiet ${active === i ? 'lg:opacity-100' : 'lg:opacity-30'}`}
              >
                <p className="eyebrow mb-6 text-gold">{s.index}</p>
                <h3 className="text-[clamp(52px,7vw,112px)] font-light uppercase leading-[0.92] tracking-[-0.045em]">{s.title}</h3>
                <p className="mt-8 text-title font-light text-paper/90">{s.lead}</p>
                <p className="mt-5 max-w-md text-[17px] leading-[1.7] text-mute">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="h-16 lg:h-24" aria-hidden="true" />
    </section>
  );
}
