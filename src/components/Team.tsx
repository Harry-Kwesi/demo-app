import { Link } from 'react-router-dom';
import Portrait from './Portrait';
import Reveal, { SplitHeading } from './Reveal';
import ArrowLink from './ArrowLink';
import { team } from '../data/site';

export default function Team() {
  return (
    <section data-header="light" aria-labelledby="team-heading" className="bg-stone py-28 text-ink sm:py-36 lg:py-48">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold-deep lg:col-span-3">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Leadership
          </Reveal>
          <SplitHeading id="team-heading" className="text-display font-light lg:col-span-9" lines={['People behind', 'the capital.']} />
        </div>

        <ul className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10 lg:mt-28 lg:gap-14">
          {team.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 150} className={i % 2 === 1 ? 'md:mt-40' : ''}>
              <Link to={`/team#${p.slug}`} className="group block">
                <Portrait name={p.name} initials={p.initials} seed={i + 40} />
                <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <div>
                    <h3 className="text-title font-light">{p.name}</h3>
                    <p className="eyebrow mt-3 text-gold-deep">{p.role}</p>
                  </div>
                  <span className="eyebrow inline-flex items-center gap-3 text-ink">
                    <span className="link-line pb-1">View profile</span>
                    <span className="arrow text-gold-deep" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-mute-deep">{p.short}</p>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <ArrowLink to="/team" tone="dark">
            Meet the team
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
