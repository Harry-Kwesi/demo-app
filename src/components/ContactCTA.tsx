import { Link } from 'react-router-dom';
import Media from './Media';
import Reveal from './Reveal';
import { company } from '../data/site';

/** Closing call to action: headline and buttons beside a dark architectural image. */
export default function ContactCTA() {
  return (
    <section aria-labelledby="cta-heading" className="on-dark bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="grain relative min-h-[280px] overflow-hidden lg:min-h-[520px]">
          <Media slot="cta" decorative />
        </div>
        <Reveal className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-16 lg:py-24">
          <p className="eyebrow mb-6 text-gold">Contact</p>
          <h2 id="cta-heading" className="text-display font-extrabold">
            Capital with conviction.
          </h2>
          <p className="mt-6 max-w-md text-xl text-white/80">Let’s start a conversation.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-light group">
              Contact SICIM
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <a href={company.phone.href} className="btn-outline-light">
              Call {company.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
