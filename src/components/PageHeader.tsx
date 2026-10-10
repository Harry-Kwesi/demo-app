import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Media from './Media';
import Reveal from './Reveal';
import type { ArtVariant } from '../data/site';

type Props = {
  crumb: string;
  title: ReactNode;
  intro?: ReactNode;
  art?: ArtVariant;
  seed?: number;
  /** In-page section links shown in a sticky sub-navigation bar. */
  sections?: { label: string; href: string }[];
};

/** Inner-page header: breadcrumb, bold title and intro beside an image, plus optional sticky section links. */
export default function PageHeader({ crumb, title, intro, art = 'skyline', seed = 1, sections }: Props) {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-site grid gap-10 py-10 lg:grid-cols-12 lg:items-center lg:py-14">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-8 text-[13px] font-semibold text-mute-deep">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-ink hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">
                  {crumb}
                </li>
              </ol>
            </nav>
            <Reveal as="h1" className="text-hero font-extrabold">
              {title}
            </Reveal>
            {intro && (
              <Reveal as="p" delay={100} className="mt-8 max-w-2xl text-xl leading-relaxed text-mute-deep">
                {intro}
              </Reveal>
            )}
          </div>
          <Reveal delay={80} className="grain relative aspect-[16/10] overflow-hidden bg-ink lg:col-span-5 lg:aspect-[4/3]">
            <Media variant={art} seed={seed} decorative eager />
          </Reveal>
        </div>
      </section>
      {sections && (
        <nav aria-label="On this page" className="sticky top-[72px] z-40 border-b border-line bg-white/95 backdrop-blur lg:top-20">
          <ul className="container-site flex gap-8 overflow-x-auto">
            {sections.map((s) => (
              <li key={s.href} className="shrink-0">
                <a href={s.href} className="block border-b-[3px] border-transparent py-4 text-[14px] font-bold text-mute-deep hover:border-ink hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
