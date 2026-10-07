import ArrowLink from '../components/ArrowLink';
import { useTitle } from '../hooks/useTitle';

export default function NotFound() {
  useTitle('Page not found');
  return (
    <section data-header="dark" className="flex min-h-[100svh] items-end bg-ink pb-24 text-paper">
      <div className="container-site">
        <p className="eyebrow mb-8 text-gold">404</p>
        <h1 className="text-hero font-light">This page has moved on.</h1>
        <ArrowLink to="/" className="mt-12">
          Return home
        </ArrowLink>
      </div>
    </section>
  );
}
