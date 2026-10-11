import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Art from './Art';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { process } from '../data/site';

const steps = process.steps;

/**
 * The investment process from the Investment Philosophy page.
 * `tabs` (homepage) shows one step at a time; `list` shows every step.
 */
export default function Approach({ variant = 'tabs' }: { variant?: 'tabs' | 'list' }) {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="approach-heading" eyebrow="Our approach" title={process.intro} size="headline" />
        {variant === 'tabs' ? <Tabs /> : <List />}
      </div>
    </section>
  );
}

function List() {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {steps.map((st, i) => (
        <Reveal as="li" key={st.index} delay={i * 100} className="flex flex-col">
          <div className="grain relative aspect-[16/10] overflow-hidden bg-ink">
            <Art variant={st.art} seed={i * 5 + 2} />
          </div>
          <div className="border-b-2 border-ink py-6">
            <p className="text-[40px] font-extrabold leading-none text-gold-deep">{st.index}</p>
            <h3 className="mt-4 text-title font-extrabold">{st.title}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-mute-deep">{st.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = steps[active];

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onKey = (e: KeyboardEvent) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + steps.length) % steps.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <>
      <div role="tablist" aria-label="Investment process" className="grid grid-cols-1 border-b border-line sm:grid-cols-3" onKeyDown={onKey}>
        {steps.map((st, i) => (
          <button
            key={st.index}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            id={`stage-tab-${i}`}
            type="button"
            aria-selected={active === i}
            aria-controls="stage-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative py-5 text-left transition-colors ${active === i ? 'text-ink' : 'text-mute-deep hover:text-ink'}`}
          >
            <span className="block text-[13px] font-bold">{st.index}</span>
            <span className="mt-1 block text-xl font-extrabold lg:text-2xl">{st.title}</span>
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 -bottom-px h-1 origin-left bg-ink transition-transform duration-500 ease-quiet ${
                active === i ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </button>
        ))}
      </div>

      <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`} className="grid gap-10 pt-12 lg:grid-cols-12 lg:items-center">
        <div key={s.index} className="panel-in lg:col-span-5">
          <p className="text-[64px] font-extrabold leading-none text-gold-deep">{s.index}</p>
          <h3 className="mt-6 text-headline font-extrabold">{s.title}</h3>
          <p className="mt-5 text-lg leading-relaxed text-mute-deep">{s.body}</p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setActive((active - 1 + steps.length) % steps.length)}
              className="flex h-12 w-12 items-center justify-center border-2 border-ink font-bold hover:bg-ink hover:text-white"
              aria-label="Previous step"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setActive((active + 1) % steps.length)}
              className="flex h-12 w-12 items-center justify-center border-2 border-ink font-bold hover:bg-ink hover:text-white"
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>
        <div className="grain relative aspect-[16/10] overflow-hidden bg-ink lg:col-span-7">
          {steps.map((st, i) => (
            <div key={st.index} aria-hidden="true" className={`absolute inset-0 transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
              <Art variant={st.art} seed={i * 5 + 2} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
