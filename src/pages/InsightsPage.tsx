import PageHero from '../components/PageHero';
import { InsightRows } from '../components/Insights';
import Pending from '../components/Pending';
import Reveal from '../components/Reveal';
import ContactCTA from '../components/ContactCTA';
import { useTitle } from '../hooks/useTitle';

export default function InsightsPage() {
  useTitle('Insights');
  return (
    <>
      <PageHero
        eyebrow="Insights"
        lines={['Perspectives', <span className="text-mute">& announcements.</span>]}
        intro="Commentary, fund announcements and reports from SICIM."
        art="horizon"
        seed={8}
      />
      <section data-header="dark" aria-label="Latest insights" className="bg-ink pb-28 pt-8 text-paper sm:pb-36 lg:pb-48">
        <div className="container-site">
          <Reveal className="mb-12">
            <Pending label="Sample rows — replace with published articles or SGX announcements" />
          </Reveal>
          <InsightRows />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
