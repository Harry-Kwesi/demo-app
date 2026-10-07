import { Link } from 'react-router-dom';
import { company, nav } from '../data/site';
import Pending from './Pending';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-header="dark" className="border-t border-paper/10 bg-ink text-paper">
      <div className="container-site pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="text-[clamp(56px,9vw,148px)] font-light leading-none tracking-[-0.05em]">
              SICIM
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              {company.legalName}. Holder of a {company.licence} issued by the {company.regulator}.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h2 className="eyebrow mb-6 text-mute">Navigation</h2>
            <ul className="space-y-3 text-[15px]">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-line pb-0.5">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="eyebrow mb-6 text-mute">Office</h2>
            <address className="text-[15px] not-italic leading-relaxed">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <a href={company.phone.href} className="link-line mt-4 inline-block pb-0.5">
                {company.phone.display}
              </a>
            </address>
            {!company.address.verified && <Pending className="mt-5" label="Confirm current address" />}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-paper/10 pt-8 text-[12px] text-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Co. Reg. No. {company.registration}.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {/* Legal copy to be supplied by SICIM compliance. */}
            {['Privacy', 'Legal', 'Disclosures'].map((label) => (
              <li key={label}>
                <Link to={`/legal#${label.toLowerCase()}`} className="link-line pb-0.5 hover:text-paper">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
