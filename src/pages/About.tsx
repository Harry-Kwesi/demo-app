import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Metrics from '../components/Metrics';
import Team from '../components/Team';
import ContactCTA from '../components/ContactCTA';
import Pending from '../components/Pending';
import { about, audiences, company } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function About() {
  useTitle('About us');
  const facts: [string, string][] = [
    ['Legal name', company.legalName],
    ['Incorporated', `Singapore, ${company.established}`],
    ['Company registration no.', company.registration],
    ['Licence', company.licence],
    ['Regulator', company.regulator],
  ];
  return (
    <>
      <PageHeader
        crumb="About us"
        title="A Singapore fund manager since 1996."
        intro={about.summary}
        art="facade"
        seed={3}
        sections={[
          { label: 'Who we serve', href: '#clients' },
          { label: 'Corporate information', href: '#corporate' },
          { label: 'Leadership', href: '#leadership' },
        ]}
      />

      <section id="clients" aria-labelledby="clients-heading" className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading id="clients-heading" eyebrow="Who we serve" title={about.mandate} />
          <ul className="grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a.key} delay={i * 80} className="border-t-4 border-ink bg-surface p-8">
                <h3 className="text-title font-extrabold">{a.label}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-mute-deep">{a.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="corporate" aria-labelledby="corporate-heading" className="bg-surface py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="corporate-heading" eyebrow="Corporate information" title="Regulated in Singapore." />
          </div>
          <Reveal className="lg:col-span-8">
            <dl className="border-t-2 border-ink bg-white">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-line px-6 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="text-[14px] font-bold text-mute-deep">{k}</dt>
                  <dd className="text-[17px] font-semibold">{v}</dd>
                </div>
              ))}
              <div className="grid gap-1 px-6 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="text-[14px] font-bold text-mute-deep">Office</dt>
                <dd className="text-[17px] font-semibold">
                  {company.address.lines.join(', ')}
                  {!company.address.verified && (
                    <span className="mt-3 block">
                      <Pending label="Confirm current address" />
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <Metrics />
      <div id="leadership">
        <Team />
      </div>
      <ContactCTA />
    </>
  );
}
