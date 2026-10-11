import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { philosophy } from '../data/site';

/** Homepage black band: the opening paragraph of the Investment Philosophy page. */
export default function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="on-dark bg-ink py-20 text-white lg:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 id="philosophy-heading" className="text-display font-extrabold">
            {philosophy.title}
          </h2>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8">
          <p className="text-[clamp(19px,1.7vw,24px)] leading-[1.6] text-white/85">{philosophy.paragraphs[0]}</p>
          <Link to="/philosophy" className="btn-light group mt-10">
            Learn More
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
