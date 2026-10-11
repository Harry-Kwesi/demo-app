import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { contact } from '../data/site';
import { useTitle } from '../hooks/useTitle';

export default function Contact() {
  useTitle(contact.title);
  const { address, phone, email, map } = contact;

  return (
    <>
      <PageHeader crumb={contact.title} title={contact.title} art="atrium" seed={11} />

      <section aria-label="Contact details" className="bg-surface py-16 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-12">
          <Reveal className="relative min-h-[360px] overflow-hidden bg-line lg:col-span-8 lg:min-h-[560px]">
            <iframe
              title={map.title}
              src={map.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
            />
          </Reveal>

          <Reveal delay={100} className="flex flex-col lg:col-span-4">
            <dl className="flex-1 divide-y divide-line border-t-4 border-ink bg-white">
              <div className="p-8">
                <dt className="eyebrow text-gold-deep">{address.label}</dt>
                <dd className="mt-3">
                  <address className="text-title font-extrabold not-italic">
                    {address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <a href={map.link} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-2 text-[15px] font-bold">
                    <span className="u-link">Open in Google Maps</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div className="p-8">
                <dt className="eyebrow text-gold-deep">{phone.label}</dt>
                <dd className="mt-3">
                  <a href={phone.href} className="text-title font-extrabold hover:underline">
                    {phone.display}
                  </a>
                </dd>
              </div>
              <div className="p-8">
                <dt className="eyebrow text-gold-deep">{email.label}</dt>
                <dd className="mt-3">
                  <a href={email.href} className="text-title font-extrabold hover:underline">
                    {email.display}
                  </a>
                </dd>
              </div>
            </dl>
            <a href={email.href} className="btn-primary group mt-6 w-full">
              Email SICIM
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
