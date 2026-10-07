import type { ReactNode } from 'react';
import Media from './Media';
import Reveal, { SplitHeading } from './Reveal';
import type { ArtVariant } from '../data/site';
import { useParallax } from '../hooks/useParallax';

type Props = {
  eyebrow: string;
  lines: ReactNode[];
  intro?: ReactNode;
  art?: ArtVariant;
  seed?: number;
};

/** Opening section for inner pages: editorial title over a dark, low-key image band. */
export default function PageHero({ eyebrow, lines, intro, art = 'skyline', seed = 1 }: Props) {
  const parallax = useParallax<HTMLDivElement>(0.1);
  return (
    <section data-header="dark" className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div ref={parallax} className="grain absolute inset-[-10%_0] opacity-60">
          <Media variant={art} seed={seed} decorative className="slow-zoom" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />
      </div>
      <div className="container-site relative flex min-h-[78svh] flex-col justify-end pb-16 pt-40 lg:min-h-[86svh] lg:pb-24">
        <Reveal className="eyebrow mb-10 flex items-center gap-4 text-gold">
          <span className="h-px w-10 bg-current" aria-hidden="true" />
          {eyebrow}
        </Reveal>
        <SplitHeading as="h1" lines={lines} className="text-hero font-light" stagger={120} />
        {intro && (
          <Reveal delay={500} className="mt-12 max-w-2xl text-lg font-light leading-[1.65] text-paper/75 lg:ml-[25%] lg:mt-16">
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
