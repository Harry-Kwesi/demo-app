import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { company, contact, nav, searchIndex } from '../data/site';

/** Thin black bar above the header: the company's full name and contact details. */
function UtilityBar() {
  return (
    <div className="on-dark bg-ink text-white">
      <div className="container-site flex h-11 items-center justify-between gap-6 text-[13px]">
        <p className="truncate font-semibold uppercase tracking-[0.08em]">{company.legalName}</p>
        <div className="hidden shrink-0 items-center gap-6 text-white/80 md:flex">
          <a href={contact.phone.href} className="font-semibold hover:text-white">
            {contact.phone.display}
          </a>
          <a href={contact.email.href} className="font-semibold hover:text-white">
            {contact.email.display}
          </a>
        </div>
      </div>
    </div>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => input.current?.focus(), []);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return searchIndex.filter((r) => terms.every((t) => `${r.title} ${r.text}`.toLowerCase().includes(t)));
  }, [q]);

  return (
    <div className="panel-in absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)]">
      <div className="container-site py-10">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) {
              navigate(results[0].to);
              onClose();
            }
          }}
          className="flex items-center gap-4 border-b-2 border-line pb-3 focus-within:border-ink"
        >
          <label htmlFor="site-search" className="sr-only">
            Search SICIM
          </label>
          <SearchIcon className="h-6 w-6 shrink-0" />
          <input
            ref={input}
            id="site-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search funds, documents, people…"
            autoComplete="off"
            className="w-full border-0 bg-transparent p-0 text-2xl font-bold placeholder:text-mute focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:hidden"
          />
        </form>
        <div aria-live="polite" className="mt-6">
          {q && results.length === 0 && <p className="text-mute-deep">No results for “{q}”.</p>}
          {results.length > 0 && (
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} onClick={onClose} className="group flex items-center justify-between border-b border-line py-4 font-semibold">
                    <span className="u-link">{r.title}</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {!q && (
            <p className="text-[14px] text-mute-deep">
              Popular:{' '}
              {['Funds', 'Philosophy', 'Team'].map((t) => (
                <button key={t} type="button" onClick={() => setQ(t)} className="ml-2 font-semibold text-ink underline underline-offset-4">
                  {t}
                </button>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </svg>
  );
}

/**
 * Sticky white header with flat navigation, site search and a full-screen
 * drawer on small screens. "Contact Us" is styled as the primary button.
 */
export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const links = nav.filter((n) => n.to !== '/contact');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 44);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close panels on navigation.
  useEffect(() => {
    setSearchOpen(false);
    setDrawer(false);
  }, [location.pathname, location.hash]);

  // Escape and outside-click close panels.
  useEffect(() => {
    if (!searchOpen && !drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setDrawer(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [searchOpen, drawer]);

  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawer]);

  return (
    <>
      <UtilityBar />
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b border-line bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_8px_24px_-16px_rgba(0,0,0,0.2)]' : ''
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-8 lg:h-20">
          <Link to="/" className="text-[22px] font-extrabold tracking-[0.18em]" aria-label="SICIM — home">
            SICIM
          </Link>

          <nav aria-label="Primary" className="hidden h-full flex-1 lg:block">
            <ul className="flex h-full items-center gap-1">
              {links.map((item) => (
                <li key={item.to} className="h-full">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative flex h-full items-center px-4 text-[15px] font-bold ${isActive ? 'text-ink' : 'text-ink/75 hover:text-ink'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-4 bottom-0 h-[3px] bg-ink transition-transform duration-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? 'Close search' : 'Search'}
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center hover:bg-surface"
            >
              {searchOpen ? <span className="text-2xl leading-none">×</span> : <SearchIcon className="h-5 w-5" />}
            </button>
            <Link to="/contact" className="btn-primary hidden px-6 py-3 sm:inline-flex">
              Contact Us
            </Link>
            <button
              type="button"
              className="flex h-11 items-center gap-2 px-2 text-[14px] font-bold lg:hidden"
              aria-expanded={drawer}
              aria-controls="mobile-drawer"
              onClick={() => setDrawer(true)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" />
              </svg>
              Menu
            </button>
          </div>
        </div>

        {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
      </header>

      {/* Mobile drawer */}
      {drawer && (
        <div id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="container-site flex h-[72px] shrink-0 items-center justify-between border-b border-line">
            <Link to="/" className="text-[22px] font-extrabold tracking-[0.18em]">
              SICIM
            </Link>
            <button type="button" autoFocus onClick={() => setDrawer(false)} className="flex h-11 items-center gap-2 px-2 text-[14px] font-bold">
              <span className="text-2xl leading-none" aria-hidden="true">
                ×
              </span>
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto py-4">
            <ul>
              {[{ label: 'Home', to: '/' }, ...nav].map((item) => (
                <li key={item.to} className="border-b border-line">
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) => `flex items-center justify-between py-5 text-xl font-extrabold ${isActive ? 'text-gold-deep' : ''}`}
                  >
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container-site shrink-0 border-t border-line py-6">
            <a href={contact.phone.href} className="btn-secondary w-full">
              Call {contact.phone.display}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
