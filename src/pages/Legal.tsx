import PageHero from '../components/PageHero';
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
      <PageHero eyebrow="Legal" lines={['Privacy, legal', <span className="text-mute">& disclosures.</span>]} art="facade" seed={13} />
      <section data-header="light" aria-label="Legal notices" className="bg-stone py-28 text-ink sm:py-36">
        <div className="container-site max-w-4xl space-y-20">
          {sections.map((s) => (
            <Reveal as="article" key={s.id} id={s.id} className="scroll-mt-28 border-t border-ink/15 pt-10">
              <h2 className="text-headline font-light">{s.title}</h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-mute-deep">
                {s.id === 'disclosures'
                  ? `${company.legalName} holds a ${company.licence} issued by the ${company.regulator}. The value of investments and any income from them can fall as well as rise. Past performance is not indicative of future performance.`
                  : 'Content to be supplied by SICIM compliance.'}
              </p>
              <Pending className="mt-6" label="Awaiting approved compliance copy" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
