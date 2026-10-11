import { Link } from 'react-router-dom';
import Portrait from './Portrait';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { team, teamPage } from '../data/site';

/** Homepage preview of the board: portrait, name and role for each director. */
export default function Team() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="team-heading" eyebrow={teamPage.title} title={teamPage.board} action={<ArrowLink to="/team">View {teamPage.title.toLowerCase()}</ArrowLink>} />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <Link to={`/team#${p.slug}`} className="group block">
                <Portrait name={p.name} initials={p.initials} seed={i + 40} />
                <h3 className="mt-5 text-title font-extrabold">
                  <span className="u-link">{p.name}</span>
                </h3>
                <p className="mt-1 text-[14px] font-semibold text-mute-deep">{p.role}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold">
                  View profile
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
