import { Link } from 'react-router-dom';
import Pending from './Pending';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';
import { funds } from '../data/site';

/** Product-table listing of the funds SICIM manages. */
export default function FundTable({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="funds" aria-labelledby="funds-heading" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="funds-heading"
          eyebrow="Funds we manage"
          title="Listed on the Singapore Exchange."
          action={showLink ? <ArrowLink to="/funds">View all funds</ArrowLink> : undefined}
        />
        <Reveal className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Funds managed by SICIM</caption>
            <thead>
              <tr className="border-b-2 border-ink text-[13px] font-bold uppercase tracking-[0.08em]">
                <th scope="col" className="py-4 pr-6">Fund</th>
                <th scope="col" className="py-4 pr-6">Type</th>
                <th scope="col" className="py-4 pr-6">Exchange</th>
                <th scope="col" className="py-4 pr-6">Strategy</th>
                <th scope="col" className="py-4">
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {funds.map((f) => (
                <tr key={f.slug} id={f.slug} className="scroll-mt-28 border-b border-line align-top transition-colors hover:bg-surface">
                  <th scope="row" className="py-6 pr-6">
                    <span className="block text-lg font-extrabold">{f.name}</span>
                    {!f.verified && <Pending className="mt-3" label="Confirm status" />}
                  </th>
                  <td className="py-6 pr-6 text-[15px]">{f.type}</td>
                  <td className="py-6 pr-6 text-[15px]">SGX</td>
                  <td className="max-w-md py-6 pr-6 text-[15px] leading-relaxed text-mute-deep">{f.body}</td>
                  <td className="py-6 text-right">
                    <Link to="/contact" className="group inline-flex items-center gap-2 whitespace-nowrap font-bold" aria-label={`Enquire about ${f.name}`}>
                      <span className="u-link">Enquire</span>
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

        {/* Small screens: one card per fund instead of a wide table. */}
        <ul className="space-y-4 md:hidden">
          {funds.map((f) => (
            <Reveal as="li" key={f.slug} id={`${f.slug}-card`} className="border-t-2 border-ink bg-surface p-6">
              <h3 className="text-title font-extrabold">{f.name}</h3>
              <p className="mt-2 text-[14px] font-semibold text-mute-deep">
                {f.type} · SGX
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-mute-deep">{f.body}</p>
              {!f.verified && <Pending className="mt-4" label="Confirm status" />}
              <Link to="/contact" className="group mt-5 inline-flex items-center gap-2 font-bold">
                <span className="u-link">Enquire</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-mute-deep">
          The value of investments and any income from them can fall as well as rise. Past performance is not indicative of future performance.
        </p>
      </div>
    </section>
  );
}
