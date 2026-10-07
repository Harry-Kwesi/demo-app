import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import Philosophy from '../components/Philosophy';
import Approach from '../components/Approach';
import Investments from '../components/Investments';
import Metrics from '../components/Metrics';
import Team from '../components/Team';
import Insights from '../components/Insights';
import ContactCTA from '../components/ContactCTA';
import { useTitle } from '../hooks/useTitle';

export default function Home() {
  useTitle();
  return (
    <>
      <Hero />
      <SectionIntro />
      <Philosophy />
      <Approach />
      <Investments />
      <Metrics />
      <Team />
      <Insights />
      <ContactCTA />
    </>
  );
}
