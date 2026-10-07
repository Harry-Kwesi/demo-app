import PageHero from '../components/PageHero';
import Portrait from '../components/Portrait';
import Reveal from '../components/Reveal';
import Pending from '../components/Pending';
import ContactCTA from '../components/ContactCTA';
import { team } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function TeamPage() {
  useTitle('Team');
  return (
    <>
      <PageHero eyebrow="Leadership" lines={['People behind', <span className="text-mute">the capital.</span>]} art="atrium" seed={6} />

      <section data-header="light" aria-label="Leadership profiles" className="bg-stone py-28 text-ink sm:py-36 lg:py-48">
        <div className="container-site space-y-28 lg:space-y-44">
          {team.map((p, i) => (
            <article key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-name`} className="group grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:gap-10">
              <Reveal variant="mask" className={`lg:col-span-5 ${i % 2 ? 'lg:order-2 lg:col-start-8' : ''}`}>
                <Portrait name={p.name} initials={p.initials} seed={i + 40} />
              </Reveal>
              <Reveal delay={150} className={`self-end lg:col-span-5 ${i % 2 ? 'lg:order-1 lg:col-start-2' : 'lg:col-start-7'}`}>
                <p className="eyebrow mb-6 text-gold-deep">{p.role}</p>
                <h2 id={`${p.slug}-name`} className="text-headline font-light">
                  {p.name}
                </h2>
                <div className="mt-10 space-y-5 border-t border-ink/10 pt-10 text-[17px] leading-[1.7] text-mute-deep">
                  {p.bio.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {!p.verified && <Pending className="mt-8" label="Confirm role & biography" />}
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
