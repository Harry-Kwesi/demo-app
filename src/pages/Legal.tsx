import PageHeader from '../components/PageHeader';
import Pending from '../components/Pending';
import Reveal from '../components/Reveal';
import { company } from '../data/site';
import { useTitle } from '../hooks/useTitle';

const sections = [
  { id: 'privacy', title: 'Privacy' },
  { id: 'legal', title: 'Legal' },
  { id: 'disclosures', title: 'Disclosures' },
];

export default function Legal() {
  useTitle('Legal');
  return (
    <>
      <PageHeader
        crumb="Legal"
        title="Privacy, legal & disclosures."
        art="facade"
        seed={13}
        sections={sections.map((s) => ({ label: s.title, href: `#${s.id}` }))}
      />
      <section aria-label="Legal notices" className="bg-white py-16 lg:py-24">
        <div className="container-site max-w-4xl space-y-16">
          {sections.map((s) => (
            <Reveal as="article" key={s.id} id={s.id} className="border-t-2 border-ink pt-8">
              <h2 className="text-headline font-extrabold">{s.title}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-mute-deep">
                {s.id === 'disclosures'
                  ? `${company.legalName} holds a ${company.licence} issued by the ${company.regulator}. The value of investments and any income from them can fall as well as rise. Past performance is not indicative of future performance.`
                  : 'Content to be supplied by SICIM compliance.'}
              </p>
              <Pending className="mt-5" label="Awaiting approved compliance copy" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
