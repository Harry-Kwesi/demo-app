import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site';

type Tone = 'dark' | 'light';

/**
 * Sticky navigation. Reads the `data-header` attribute ("dark" | "light") of
 * whichever section sits beneath it and inverts its colours to match, gains a
 * quiet backdrop once the page has scrolled, and tucks away while scrolling
 * down.
 */
export default function Header() {
  const [tone, setTone] = useState<Tone>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y <= 240) setHidden(false);
      lastY.current = y;

      const probe = 36;
      const sections = document.querySelectorAll<HTMLElement>('[data-header]');
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          setTone((s.dataset.header as Tone) ?? 'dark');
          break;
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock scroll, handle Escape, and move focus while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Wait a frame for the overlay to become visible before moving focus.
    const focusTimer = window.setTimeout(() => firstMenuLink.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const light = tone === 'light' && !open;
  const text = light ? 'text-ink' : 'text-paper';
  const backdrop = scrolled && !open ? (light ? 'bg-stone/85 border-ink/10' : 'bg-ink/75 border-paper/10') : 'border-transparent';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[transform,background-color,color,border-color] duration-700 ease-quiet ${backdrop} ${text} ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? '' : 'backdrop-blur-0'}`}
      >
        <div className="container-site flex h-[72px] items-center justify-between lg:h-[88px]">
          <Link to="/" className="relative z-10 text-[17px] font-semibold tracking-[0.32em]" aria-label="SICIM — home">
            SICIM
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-11">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `link-line pb-1 text-[13px] font-medium tracking-[0.06em] transition-opacity hover:opacity-100 ${
                        isActive ? 'opacity-100' : 'opacity-70'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButton}
            type="button"
            className="relative z-10 -mr-2 flex h-11 items-center gap-3 px-2 text-[12px] font-medium uppercase tracking-[0.2em] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-quiet ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-quiet ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu: a full-screen editorial index rather than a dropdown. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ink text-paper transition-[opacity,visibility] duration-500 ease-quiet md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-center pt-[72px]">
          <ol className="divide-y divide-paper/10 border-y border-paper/10">
            {[{ label: 'Home', to: '/' }, ...nav].map((item, i) => (
              <li key={item.to}>
                <NavLink
                  ref={i === 0 ? firstMenuLink : undefined}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between py-4 text-[34px] font-light tracking-[-0.03em] ${isActive ? 'text-gold' : ''}`
                  }
                  tabIndex={open ? 0 : -1}
                >
                  <span>{item.label}</span>
                  <span className="text-[11px] tracking-[0.2em] text-mute">{String(i + 1).padStart(2, '0')}</span>
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
        <p className="container-site pb-8 text-[12px] leading-relaxed text-mute">
          Singapore Consortium Investment Management Limited
        </p>
      </div>
    </>
  );
}
