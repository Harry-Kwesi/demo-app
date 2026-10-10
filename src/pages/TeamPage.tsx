import PageHeader from '../components/PageHeader';
import Portrait from '../components/Portrait';
import Reveal from '../components/Reveal';
import Pending from '../components/Pending';
import ContactCTA from '../components/ContactCTA';
import { team } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function TeamPage() {
  useTitle('Leadership');
  return (
    <>
      <PageHeader
        crumb="Leadership"
        title="People behind the capital."
        intro="The leadership team of Singapore Consortium Investment Management."
        art="atrium"
        seed={6}
        sections={team.map((p) => ({ label: p.name, href: `#${p.slug}` }))}
      />
      <section aria-label="Leadership profiles" className="bg-white py-20 lg:py-28">
        <div className="container-site divide-y divide-line">
          {team.map((p, i) => (
            <article key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-name`} className="grid gap-10 py-14 first:pt-0 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Portrait name={p.name} initials={p.initials} seed={i + 40} />
              </Reveal>
              <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
                <p className="eyebrow text-gold-deep">{p.role}</p>
                <h2 id={`${p.slug}-name`} className="mt-4 text-display font-extrabold">
                  {p.name}
                </h2>
                <div className="mt-8 space-y-5 border-t-2 border-ink pt-8 text-lg leading-relaxed text-mute-deep">
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
