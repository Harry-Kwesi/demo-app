import { Link } from 'react-router-dom';
import Media from './Media';
import Reveal from './Reveal';
import { contact } from '../data/site';

/** Closing contact band, using the details from the Contact Us page. */
export default function ContactCTA() {
  return (
    <section aria-labelledby="cta-heading" className="on-dark bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="grain relative min-h-[260px] overflow-hidden lg:min-h-[480px]">
          <Media slot="cta" decorative />
        </div>
        <Reveal className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-16 lg:py-20">
          <h2 id="cta-heading" className="text-display font-extrabold">
            {contact.title}
          </h2>
          <address className="mt-6 text-lg not-italic leading-relaxed text-white/80">
            {contact.address.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link to="/contact" className="btn-light group">
              {contact.title}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <a href={contact.phone.href} className="btn-outline-light">
              {contact.phone.display}
            </a>
            <a href={contact.email.href} className="btn-outline-light">
              {contact.email.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
