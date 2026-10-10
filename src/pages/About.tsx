import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ContactCTA from '../components/ContactCTA';
import { about } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function About() {
  useTitle('About Us');
  return (
    <>
      <PageHeader crumb={about.title} title={about.title} art="facade" seed={3} />

      <section aria-label="About SICIM" className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="border-l-4 border-ink pl-6 text-[clamp(20px,1.9vw,28px)] font-semibold leading-[1.5] lg:pl-10">{about.body}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="facts-heading" className="on-dark bg-ink py-16 text-white lg:py-20">
        <div className="container-site">
          <h2 id="facts-heading" className="sr-only">
            Key facts
          </h2>
          <dl className="grid gap-px bg-white/15 md:grid-cols-3">
            {about.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 80} className="flex flex-col bg-ink py-8 pr-8 md:px-8 md:first:pl-0">
                <dt className="order-2 mt-4 text-[14px] font-bold">{f.label}</dt>
                <dd className="order-1 text-[clamp(44px,5vw,76px)] font-extrabold leading-none tracking-[-0.03em]">{f.value}</dd>
                <dd className="order-3 mt-2 text-[14px] leading-relaxed text-mute">{f.detail}</dd>
              </Reveal>
            ))}
            <Reveal delay={160} className="flex flex-col bg-ink py-8 md:px-8">
              <dt className="order-2 mt-4 text-[14px] font-bold">Asset classes</dt>
              <dd className="order-1 text-[clamp(44px,5vw,76px)] font-extrabold leading-none tracking-[-0.03em]">{about.assetClasses.length}</dd>
              <dd className="order-3 mt-2 text-[14px] leading-relaxed text-mute">Diversified across a broad range of asset classes</dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <section aria-labelledby="classes-heading" className="bg-surface py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 id="classes-heading" className="text-headline font-extrabold">
              Integrated investment management and advisory services
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.assetClasses.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 60} className="flex items-center gap-4 border-t-2 border-ink bg-white p-6">
                <span className="text-[13px] font-bold text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-title font-extrabold">{c}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
