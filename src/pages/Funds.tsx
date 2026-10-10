import PageHeader from '../components/PageHeader';
import FundTable from '../components/FundTable';
import Investments from '../components/Investments';
import ContactCTA from '../components/ContactCTA';
import { useTitle } from '../hooks/useTitle';

export default function Funds() {
  useTitle('Funds & investments');
  return (
    <>
      <PageHeader
        crumb="Investments"
        title="Funds & investments."
        intro="SICIM invests across the global financial markets — public and private equities, fixed income, loans, derivatives, structured finance and alternative investments."
        art="bridge"
        seed={5}
        sections={[
          { label: 'Funds we manage', href: '#funds' },
          { label: 'Asset classes', href: '#asset-classes' },
        ]}
      />
      <FundTable showLink={false} />
      <Investments detailed />
      <ContactCTA />
    </>
  );
}
