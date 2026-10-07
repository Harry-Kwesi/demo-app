import ArrowLink from './ArrowLink';
import Media from './Media';
import Reveal, { SplitHeading } from './Reveal';
import { about } from '../data/site';

/** Homepage "Who we are" — editorial two-column introduction. */
export default function SectionIntro() {
  return (
    <section
      id="who-we-are"
      data-header="light"
      aria-labelledby="who-heading"
      className="scroll-mt-0 bg-stone py-28 text-ink sm:py-36 lg:py-48"
    >
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <Reveal className="eyebrow flex items-center gap-4 self-start lg:pt-4 text-gold-deep">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Who we are
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <SplitHeading
            id="who-heading"
            className="text-headline font-light"
            lines={[
              'We are a private investment firm focused on identifying opportunities where long-term capital can create meaningful value.',
            ]}
          />
          <div className="mt-16 grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-2 lg:mt-24">
            <Reveal className="space-y-6 text-[17px] leading-[1.7] text-mute-deep">
              <p>{about.summary}</p>
              <p>{about.mandate}</p>
              <ArrowLink to="/about" tone="dark" className="mt-4">
                Discover SICIM
              </ArrowLink>
            </Reveal>
            <Reveal variant="mask" delay={150} className="relative aspect-[4/5] overflow-hidden">
              <div className="grain relative h-full w-full overflow-hidden">
                <Media slot="about" className="transition-transform duration-[2000ms] ease-quiet hover:scale-[1.03]" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
