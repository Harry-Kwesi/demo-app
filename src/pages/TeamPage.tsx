import PageHeader from '../components/PageHeader';
import Portrait from '../components/Portrait';
import Reveal from '../components/Reveal';
import ContactCTA from '../components/ContactCTA';
import { team, teamPage } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function TeamPage() {
  useTitle(teamPage.title);
  return (
    <>
      <PageHeader
        crumb={teamPage.title}
        title={teamPage.title}
        art="atrium"
        seed={6}
        sections={team.map((p) => ({ label: p.name, href: `#${p.slug}` }))}
      />
      <section aria-labelledby="board-heading" className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal as="h2" id="board-heading" className="text-display font-extrabold">
            {teamPage.board}
          </Reveal>
          <div className="mt-10 divide-y divide-line border-t-2 border-ink">
            {team.map((p, i) => (
              <article key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-name`} className="grid gap-10 py-14 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                  <div className="lg:sticky lg:top-40">
                    <Portrait name={p.name} initials={p.initials} seed={i + 40} />
                  </div>
                </Reveal>
                <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
                  <h3 id={`${p.slug}-name`} className="text-headline font-extrabold">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[16px] font-bold text-gold-deep">{p.role}</p>
                  <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-mute-deep">
                    {p.bio.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
