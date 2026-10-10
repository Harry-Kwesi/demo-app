import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export default function NotFound() {
  useTitle('Page not found');
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site">
        <p className="eyebrow mb-6 text-gold-deep">Error 404</p>
        <h1 className="text-hero font-extrabold">We can’t find that page.</h1>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
