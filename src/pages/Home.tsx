import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Approach from '../components/Approach';
import Investments from '../components/Investments';
import FundTable from '../components/FundTable';
import Metrics from '../components/Metrics';
import Team from '../components/Team';
import LatestNews from '../components/LatestNews';
import ContactCTA from '../components/ContactCTA';
import { useTitle } from '../hooks/useTitle';

export default function Home() {
  useTitle();
  return (
    <>
      <Hero />
      <LatestNews />
      <Philosophy />
      <Approach />
      <FundTable />
      <Metrics />
      <Investments />
      <Team />
      <ContactCTA />
    </>
  );
}
