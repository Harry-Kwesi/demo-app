import { useState } from 'react';
import { Link } from 'react-router-dom';
import Art from './Art';
import Reveal, { SplitHeading } from './Reveal';
import { assetClasses } from '../data/site';

/**
 * Editorial list of asset classes. Hovering a row reveals its image in a
 * frame beside the list (desktop); on small screens rows stay text-led.
 */
export default function Investments() {
  const [active, setActive] = useState<number | null>(null);
  // The frame rests on the first asset class until a row is hovered.
  const shown = active ?? 0;

  return (
    <section data-header="light" aria-labelledby="investments-heading" className="bg-paper py-28 text-ink sm:py-36 lg:py-48">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold-deep lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            What we invest in
          </Reveal>
          <SplitHeading id="investments-heading" className="text-display font-light uppercase lg:col-span-9" lines={['Our', 'investments']} />
        </div>

        <div className="relative mt-20 lg:mt-28 lg:grid lg:grid-cols-12 lg:gap-10">
          <ul className="border-t border-ink/15 lg:col-span-8" onMouseLeave={() => setActive(null)}>
            {assetClasses.map((a, i) => (
              <li key={a.slug} className="border-b border-ink/15">
                <Link
                  to={`/funds#${a.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-9 sm:grid-cols-[5rem_1fr_auto] lg:py-12"
                >
                  <span className="text-[13px] tracking-[0.18em] text-mute-deep">{a.index}</span>
                  <span>
                    <span
                      className={`block text-[clamp(30px,4.6vw,76px)] font-light uppercase leading-[0.98] tracking-[-0.04em] transition-[color,transform] duration-700 ease-quiet ${
                        active === null || active === i ? 'text-ink' : 'text-ink/30'
                      } group-hover:translate-x-2`}
                    >
                      {a.title}
                    </span>
                    <span className="mt-4 block max-w-lg text-[15px] leading-[1.65] text-mute-deep">{a.body}</span>
                  </span>
                  <span className="arrow text-3xl font-light text-gold-deep" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:col-span-4 lg:block" aria-hidden="true">
            <div className="sticky top-32 aspect-[3/4] w-full overflow-hidden bg-ink">
              {assetClasses.map((a, i) => (
                <div
                  key={a.slug}
                  className={`grain absolute inset-0 overflow-hidden transition-[clip-path] duration-[1000ms] ease-quiet ${
                    shown === i ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(100%_0_0_0)]'
                  }`}
                >
                  <Art variant={a.art} seed={i + 21} className={`transition-transform duration-[1800ms] ease-quiet ${shown === i ? 'scale-100' : 'scale-110'}`} />
                </div>
              ))}
              <span className="eyebrow absolute bottom-6 left-6 text-paper/70">{assetClasses[shown].index} — {assetClasses[shown].title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
