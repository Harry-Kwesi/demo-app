import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PhilosophyPage from './pages/PhilosophyPage';
import Funds from './pages/Funds';
import TeamPage from './pages/TeamPage';
import InsightsPage from './pages/InsightsPage';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import { AudienceProvider } from './hooks/useAudience';

/** Scroll to top on navigation, or to the hash target when one is given. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView());
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

/** Each route mounts with a quiet fade-up; focus moves to main for screen readers. */
function Pages() {
  const location = useLocation();
  useEffect(() => {
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [location.pathname]);
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <div key={location.pathname} className="page-enter">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AudienceProvider>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollManager />
        <Header />
        <Pages />
        <Footer />
      </AudienceProvider>
    </BrowserRouter>
  );
}
