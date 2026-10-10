import { Link } from 'react-router-dom';
import Media from './Media';
import Reveal from './Reveal';
import { company } from '../data/site';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-white">
      <div className="container-site grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <Reveal as="p" className="eyebrow mb-6 text-gold-deep">
            Singapore Consortium Investment Management
          </Reveal>
          <Reveal as="h1" id="hero-heading" delay={80} className="text-hero font-extrabold">
            Investing beyond the cycle.
          </Reveal>
          <Reveal as="p" delay={160} className="mt-8 max-w-md text-xl leading-relaxed text-mute-deep">
            Long-term capital. Disciplined thinking. Enduring value.
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/funds" className="btn-primary group">
              Explore our funds
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link to="/about" className="btn-secondary">
              About SICIM
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="relative lg:col-span-6">
          <div className="grain relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-square">
            <Media slot="hero" eager />
          </div>
          <div className="relative -mt-16 ml-6 max-w-xs border-l-4 border-gold bg-white p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:ml-0">
            <p className="eyebrow text-gold-deep">Licensed fund manager</p>
            <p className="mt-3 text-[15px] font-semibold leading-snug">
              {company.licence}, {company.regulator}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
