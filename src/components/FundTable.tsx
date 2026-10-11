import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { funds, fundsPage } from '../data/site';
import { useSifNav } from '../hooks/useSifNav';

/** Homepage listing of the two SGX-listed funds, with the latest SIF prices. */
export default function FundTable() {
  const nav = useSifNav();
  return (
    <section aria-labelledby="funds-heading" className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="funds-heading" title={fundsPage.title} action={<ArrowLink to="/funds">View funds</ArrowLink>} />

        <Reveal className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Funds managed by SICIM</caption>
            <thead>
              <tr className="border-b-2 border-ink text-[13px] font-bold uppercase tracking-[0.08em]">
                <th scope="col" className="py-4 pr-6">Fund</th>
                <th scope="col" className="py-4 pr-6">SGX code</th>
                <th scope="col" className="py-4 pr-6">Overview</th>
                <th scope="col" className="py-4">
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {funds.map((f) => (
                <tr key={f.slug} className="border-b border-line align-top transition-colors hover:bg-surface">
                  <th scope="row" className="py-6 pr-6 text-lg font-extrabold">
                    {f.name}
                  </th>
                  <td className="py-6 pr-6">
                    <span className="inline-block border-2 border-ink px-2 py-0.5 text-[14px] font-extrabold">{f.code}</span>
                  </td>
                  <td className="max-w-xl py-6 pr-6 text-[15px] leading-relaxed text-mute-deep">{f.summary}</td>
                  <td className="py-6 text-right">
                    <Link to={`/funds#${f.slug}`} className="group inline-flex items-center gap-2 whitespace-nowrap font-bold" aria-label={`View ${f.name}`}>
                      <span className="u-link">View fund</span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Small screens: one card per fund. */}
        <ul className="space-y-4 md:hidden">
          {funds.map((f) => (
            <Reveal as="li" key={f.slug} className="border-t-2 border-ink bg-surface p-6">
              <p className="inline-block border-2 border-ink px-2 py-0.5 text-[13px] font-extrabold">{f.code}</p>
              <h3 className="mt-3 text-title font-extrabold">{f.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute-deep">{f.summary}</p>
              <Link to={`/funds#${f.slug}`} className="group mt-5 inline-flex items-center gap-2 font-bold">
                <span className="u-link">View fund</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col gap-4 bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-[15px] font-semibold">
            {fundsPage.info.navTitle} {nav.dealingDate}
          </p>
          <p className="flex gap-8 text-[15px]">
            <span>
              Bid price: <strong className="text-xl font-extrabold">{nav.bid}</strong>
            </span>
            <span>
              Offer price: <strong className="text-xl font-extrabold">{nav.offer}</strong>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
