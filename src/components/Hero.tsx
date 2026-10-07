import Media from './Media';
import { SplitHeading } from './Reveal';
import Reveal from './Reveal';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const parallax = useParallax<HTMLDivElement>(0.12);
  return (
    <section
      data-header="dark"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="false">
        <div ref={parallax} className="absolute inset-[-8%_0] will-change-transform">
          <div className="grain relative h-full w-full overflow-hidden">
            <Media slot="hero" eager className="slow-zoom opacity-90" />
          </div>
        </div>
        {/* Scrims keep headline contrast well above AA on any frame. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      <div className="container-site relative flex flex-1 flex-col justify-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <Reveal className="eyebrow mb-8 text-gold sm:mb-10" delay={200}>
          Singapore Consortium Investment Management
        </Reveal>
        <SplitHeading
          as="h1"
          id="hero-heading"
          lines={['Investing', 'beyond', 'the cycle.']}
          delay={250}
          stagger={120}
          className="text-hero font-light uppercase"
        />
        <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={750} className="max-w-xs text-[17px] font-light leading-[1.55] text-paper/80 sm:text-lg">
            <p>
              Long-term capital.
              <br />
              Disciplined thinking.
              <br />
              Enduring value.
            </p>
          </Reveal>
          <Reveal delay={950}>
            <a
              href="#who-we-are"
              className="group hidden items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-paper/70 transition-colors hover:text-paper sm:flex"
            >
              <span className="relative block h-12 w-px overflow-hidden bg-paper/15" aria-hidden="true">
                <span className="scroll-cue absolute inset-0 bg-gold" />
              </span>
              Scroll to explore
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
