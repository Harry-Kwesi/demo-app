import ArrowLink from './ArrowLink';
import Media from './Media';
import Reveal, { SplitHeading } from './Reveal';
import { useParallax } from '../hooks/useParallax';

export default function ContactCTA() {
  const parallax = useParallax<HTMLDivElement>(0.18);
  return (
    <section
      data-header="dark"
      aria-labelledby="cta-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallax} className="grain absolute inset-[-12%_0] will-change-transform">
          <Media slot="cta" decorative />
        </div>
        <div className="absolute inset-0 bg-ink/55" />
      </div>
      <div className="container-site relative py-32 text-center">
        <Reveal className="eyebrow mb-10 text-gold">Contact</Reveal>
        <SplitHeading id="cta-heading" className="text-hero font-light uppercase" lines={['Capital with', 'conviction.']} stagger={140} />
        <Reveal delay={400} className="mt-10 text-lg font-light text-paper/80 sm:text-xl">
          Let’s start a conversation.
        </Reveal>
        <Reveal delay={550} className="mt-14">
          <ArrowLink to="/contact" className="border border-paper/25 px-8 py-5 transition-colors duration-500 hover:border-gold">
            Contact SICIM
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
