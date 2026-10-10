import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { InsightCards } from '../components/Insights';
import Pending from '../components/Pending';
import ContactCTA from '../components/ContactCTA';
import { insights } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function InsightsPage() {
  useTitle('Insights');
  const categories = ['All', ...Array.from(new Set(insights.map((i) => i.category)))];
  const [filter, setFilter] = useState('All');
  return (
    <>
      <PageHeader crumb="Insights" title="Perspectives & announcements." intro="Commentary, fund announcements and reports from SICIM." art="horizon" seed={8} />
      <section aria-label="Latest insights" className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                  className={`border-2 px-4 py-2 text-[14px] font-bold ${filter === c ? 'border-ink bg-ink text-white' : 'border-line hover:border-ink'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <Pending label="Sample cards — replace with published articles or SGX announcements" />
          </div>
          <InsightCards category={filter === 'All' ? undefined : filter} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
