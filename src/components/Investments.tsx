import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { about } from '../data/site';

/** The asset classes named on the About Us page. */
export default function Investments() {
  return (
    <section aria-labelledby="investments-heading" className="bg-surface py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="investments-heading"
          eyebrow={about.title}
          title="Integrated investment management and advisory services"
          size="headline"
          action={<ArrowLink to="/about">{about.title}</ArrowLink>}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.assetClasses.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 60} className="flex items-center gap-4 border-t-2 border-ink bg-white p-6">
              <span className="text-[13px] font-bold text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-title font-extrabold">{c}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
