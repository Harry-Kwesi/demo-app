import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { home } from '../data/site';

/** "Latest News" notice from the sicim.com.sg home page. */
export default function LatestNews() {
  return (
    <section aria-labelledby="news-heading" className="bg-surface py-16 lg:py-20">
      <Reveal className="container-site grid gap-8 lg:grid-cols-12">
        <h2 id="news-heading" className="text-headline font-extrabold lg:col-span-4">
          {home.latestNews.title}
        </h2>
        <div className="border-l-4 border-ink bg-white p-6 sm:p-8 lg:col-span-8">
          <p className="text-lg leading-relaxed text-mute-deep">{home.latestNews.body}</p>
          <Link to="/legal" className="group mt-6 inline-flex items-center gap-2 font-bold">
            <span className="u-link">Terms, disclaimer &amp; privacy</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
