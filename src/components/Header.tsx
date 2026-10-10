import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { audiences, company, menu, searchIndex } from '../data/site';
import { useAudience } from '../hooks/useAudience';

/** Thin black bar above the header: audience selector, region and phone. */
function UtilityBar() {
  const { audience, setAudience } = useAudience();
  return (
    <div className="on-dark bg-ink text-white">
      <div className="container-site flex h-11 items-center justify-between gap-6 text-[13px]">
        <div role="group" aria-label="I am an…" className="-ml-4 hidden items-center md:flex">
          {audiences.map((a) => (
            <button
              key={a.key}
              type="button"
              aria-pressed={audience === a.key}
              onClick={() => setAudience(a.key)}
              className={`relative h-11 px-4 font-semibold transition-colors ${
                audience === a.key ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {a.label}
              {audience === a.key && <span className="absolute inset-x-4 bottom-0 h-[3px] bg-gold" aria-hidden="true" />}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 md:hidden">
          <span className="sr-only">I am an</span>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value as typeof audience)}
            className="border-0 bg-transparent py-0 pl-0 pr-6 text-[13px] font-semibold text-white focus:ring-0"
          >
            {audiences.map((a) => (
              <option key={a.key} value={a.key} className="text-ink">
                {a.label}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-center gap-6 text-white/80">
          <span className="hidden sm:inline">
            <span aria-hidden="true">◉ </span>Singapore
          </span>
          <a href={company.phone.href} className="font-semibold hover:text-white">
            {company.phone.display}
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
            placeholder="Search funds, insights, people…"
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
              {['Funds', 'Philosophy', 'Leadership'].map((t) => (
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
 * Sticky white header with dropdown panels (hover or click), site search and a
 * full-screen drawer on small screens.
 */
export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 44);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setSearchOpen(false);
    setDrawer(false);
  }, [location.pathname, location.hash]);

  // Escape and outside-click close panels.
  useEffect(() => {
    if (openMenu === null && !searchOpen && !drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setSearchOpen(false);
        setDrawer(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [openMenu, searchOpen, drawer]);

  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawer]);

  const isSection = (to: string, i: number) =>
    location.pathname === to || menu[i].links.some((l) => location.pathname === l.to.split('#')[0]);

  return (
    <>
      <UtilityBar />
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
          scrolled ? 'border-line shadow-[0_8px_24px_-16px_rgba(0,0,0,0.2)]' : 'border-line'
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-8 lg:h-20">
          <Link to="/" className="text-[22px] font-extrabold tracking-[0.18em]" aria-label="SICIM — home">
            SICIM
          </Link>

          <nav aria-label="Primary" className="hidden h-full flex-1 lg:block">
            <ul className="flex h-full items-center gap-1">
              {menu.map((group, i) => (
                <li key={group.label} className="h-full" onMouseEnter={() => (setSearchOpen(false), setOpenMenu(i))}>
                  <button
                    type="button"
                    aria-expanded={openMenu === i}
                    aria-controls={`menu-panel-${i}`}
                    onClick={() => setOpenMenu(openMenu === i ? null : i)}
                    className={`relative flex h-full items-center gap-2 px-4 text-[15px] font-bold ${
                      isSection(group.to, i) ? 'text-ink' : 'text-ink/80 hover:text-ink'
                    }`}
                  >
                    {group.label}
                    <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${openMenu === i ? 'rotate-180' : ''}`} aria-hidden="true">
                      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-[3px] bg-ink transition-transform duration-300 ${
                        openMenu === i || isSection(group.to, i) ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? 'Close search' : 'Search'}
              onClick={() => (setOpenMenu(null), setSearchOpen((v) => !v))}
              className="flex h-11 w-11 items-center justify-center hover:bg-surface"
            >
              {searchOpen ? <span className="text-2xl leading-none">×</span> : <SearchIcon className="h-5 w-5" />}
            </button>
            <Link to="/contact" className="btn-primary hidden px-6 py-3 sm:inline-flex">
              Contact us
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

        {openMenu !== null && (
          <div
            id={`menu-panel-${openMenu}`}
            className="panel-in absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] lg:block"
          >
            <div className="container-site grid grid-cols-12 gap-10 py-12">
              <div className="col-span-4 border-r border-line pr-10">
                <p className="text-headline font-extrabold">{menu[openMenu].label}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-mute-deep">{menu[openMenu].blurb}</p>
                <Link to={menu[openMenu].to} className="group mt-8 inline-flex items-center gap-2 font-bold">
                  <span className="u-link">Explore {menu[openMenu].label.toLowerCase()}</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
              <ul className="col-span-8 grid grid-cols-2 gap-x-10 gap-y-2 self-start">
                {menu[openMenu].links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="group block border-b border-line py-5">
                      <span className="flex items-center justify-between text-[17px] font-bold">
                        <span className="u-link">{l.label}</span>
                        <span className="arrow" aria-hidden="true">
                          →
                        </span>
                      </span>
                      <span className="mt-1 block text-[14px] text-mute-deep">{l.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

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
              {menu.map((group, i) => (
                <li key={group.label} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={drawerGroup === i}
                    onClick={() => setDrawerGroup(drawerGroup === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left text-xl font-extrabold"
                  >
                    {group.label}
                    <span aria-hidden="true" className="text-2xl font-normal">
                      {drawerGroup === i ? '−' : '+'}
                    </span>
                  </button>
                  {drawerGroup === i && (
                    <ul className="pb-4">
                      {group.links.map((l) => (
                        <li key={l.to}>
                          <NavLink to={l.to} className="block py-3 pl-4 text-[16px] font-semibold text-mute-deep">
                            {l.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="border-b border-line">
                <NavLink to="/contact" className="block py-5 text-xl font-extrabold">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="container-site shrink-0 border-t border-line py-6">
            <Link to="/contact" className="btn-primary w-full">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
