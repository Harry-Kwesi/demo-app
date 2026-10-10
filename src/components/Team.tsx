import { Link } from 'react-router-dom';
import Portrait from './Portrait';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { team } from '../data/site';

export default function Team() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="team-heading" eyebrow="Leadership" title="People behind the capital." action={<ArrowLink to="/team">Meet the team</ArrowLink>} />
        <ul className="grid gap-10 lg:grid-cols-2">
          {team.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 100}>
              <Link to={`/team#${p.slug}`} className="group grid gap-6 border-t-2 border-ink pt-6 sm:grid-cols-[minmax(0,14rem)_1fr]">
                <Portrait name={p.name} initials={p.initials} seed={i + 40} />
                <div>
                <h3 className="text-title font-extrabold">
                  <span className="u-link">{p.name}</span>
                </h3>
                <p className="mt-1 text-[14px] font-semibold text-mute-deep">{p.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-mute-deep">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold">
                  View profile
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
