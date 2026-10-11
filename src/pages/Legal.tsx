import PageHeader from '../components/PageHeader';
import Pending from '../components/Pending';
import Reveal from '../components/Reveal';
import { useTitle } from '../hooks/useTitle';

const sections = [
  { id: 'terms', title: 'Terms and Conditions' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'privacy', title: 'Privacy' },
];

export default function Legal() {
  useTitle('Legal');
  return (
    <>
      <PageHeader
        crumb="Legal"
        title="Terms, disclaimer & privacy."
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
                Content to be supplied by SICIM.
              </p>
              <Pending className="mt-5" label="Awaiting approved compliance copy" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
