import { Link } from 'react-router-dom';
import { company, menu } from '../data/site';
import Pending from './Pending';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="text-[28px] font-extrabold tracking-[0.18em]">
              SICIM
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-mute">{company.legalName}</p>
            <Link to="/contact" className="btn-light mt-8">
              Contact us
            </Link>
          </div>

          {menu.map((group) => (
            <nav key={group.label} aria-label={group.label} className="lg:col-span-2">
              <h2 className="mb-5 text-[15px] font-extrabold">{group.label}</h2>
              <ul className="space-y-3 text-[14px] text-white/75">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <h2 className="mb-5 text-[15px] font-extrabold">Office</h2>
            <address className="text-[14px] not-italic leading-relaxed text-white/75">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <a href={company.phone.href} className="mt-3 inline-block hover:text-white hover:underline">
                {company.phone.display}
              </a>
            </address>
            {!company.address.verified && <Pending className="mt-4" label="Confirm address" />}
          </div>
        </div>

        <div className="mt-10 max-w-5xl space-y-4 text-[12px] leading-relaxed text-mute">
          <p>
            {company.legalName} (Co. Reg. No. {company.registration}) holds a {company.licence} issued by the {company.regulator}.
          </p>
          <p>
            The information on this website is for general information only and does not constitute an offer or solicitation to buy or sell any investment product. The value of investments and any
            income from them can fall as well as rise. Past performance is not indicative of future performance.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 text-[13px] text-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-semibold">
            {['Privacy', 'Legal', 'Disclosures'].map((label) => (
              <li key={label}>
                <Link to={`/legal#${label.toLowerCase()}`} className="hover:text-white hover:underline">
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
