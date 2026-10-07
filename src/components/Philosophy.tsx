import { useState } from 'react';
import Art from './Art';
import ArrowLink from './ArrowLink';
import Reveal, { SplitHeading } from './Reveal';
import { principles } from '../data/site';

/**
 * Four principle rows. Hovering (pointer), focusing (keyboard) or tapping
 * (touch) a row opens it to reveal its text and image.
 */
export default function Philosophy({ showLink = true }: { showLink?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section data-header="dark" aria-labelledby="philosophy-heading" className="bg-ink py-28 text-paper sm:py-36 lg:py-48">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Investment philosophy
          </Reveal>
          <SplitHeading
            id="philosophy-heading"
            className="text-display font-light lg:col-span-9"
            lines={['We think in decades,', <span className="text-mute">not quarters.</span>]}
          />
        </div>

        <ul className="mt-20 border-t border-paper/10 lg:mt-32" onMouseLeave={() => setActive(null)}>
          {principles.map((p, i) => {
            const open = active === i;
            const panelId = `principle-${p.index}`;
            return (
              <li key={p.index} className="border-b border-paper/10" onMouseEnter={() => setActive(i)}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(open ? null : i)}
                    className="group grid w-full grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-8 text-left sm:grid-cols-[6rem_1fr_auto] lg:py-11"
                  >
                    <span className={`text-[13px] tracking-[0.18em] transition-colors duration-500 ${open ? 'text-gold' : 'text-mute'}`}>
                      {p.index}
                    </span>
                    <span
                      className={`text-title font-light uppercase transition-[color,transform] duration-700 ease-quiet lg:text-[clamp(32px,3.6vw,58px)] ${
                        open ? 'translate-x-2 text-paper' : 'text-paper/55'
                      }`}
                    >
                      {p.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-2xl font-light transition-transform duration-700 ease-quiet ${open ? 'rotate-45 text-gold' : 'text-mute'}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-label={p.title}
                  className={`grid transition-[grid-template-rows] duration-700 ease-quiet ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 sm:grid-cols-[6rem_1fr] lg:grid-cols-[6rem_1fr_minmax(0,28rem)] lg:pb-14">
                      <p
                        className={`max-w-xl text-[17px] leading-[1.7] text-mute transition-opacity duration-700 sm:col-start-2 ${
                          open ? 'opacity-100 delay-150' : 'opacity-0'
                        }`}
                      >
                        {p.body}
                      </p>
                      <div
                        className={`grain relative hidden aspect-[16/9] overflow-hidden transition-[clip-path] duration-[1100ms] ease-quiet lg:block ${
                          open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_0_100%)]'
                        }`}
                      >
                        <Art variant={p.art} seed={i + 3} className={`transition-transform duration-[1600ms] ease-quiet ${open ? 'scale-100' : 'scale-110'}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {showLink && (
          <Reveal className="mt-16">
            <ArrowLink to="/philosophy">Our philosophy</ArrowLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
