import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { FormEvent } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Pending from '../components/Pending';
import { company } from '../data/site';
import { useTitle } from '../hooks/useTitle';

const field =
  'peer w-full border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-7 text-[17px] text-ink placeholder-transparent transition-colors focus:border-ink focus:outline-none focus:ring-0';
const label =
  'pointer-events-none absolute left-0 top-7 text-[15px] text-mute-deep transition-all duration-300 ease-quiet peer-focus:top-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]';

export default function Contact() {
  useTitle('Contact');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No submission endpoint is configured yet; connect one before launch.
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={['Let’s start', <span className="text-mute">a conversation.</span>]}
        art="atrium"
        seed={11}
      />

      <section data-header="light" aria-label="Contact details and enquiry form" className="bg-stone py-28 text-ink sm:py-36 lg:py-44">
        <div className="container-site grid gap-20 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h2 className="eyebrow mb-8 flex items-center gap-4 text-gold-deep">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Office
            </h2>
            <address className="text-title font-light not-italic">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            {!company.address.verified && <Pending className="mt-6" label="Confirm current address" />}

            <dl className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
              <div className="grid grid-cols-[6rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-mute-deep">Phone</dt>
                <dd>
                  <a href={company.phone.href} className="link-line pb-0.5 text-[17px]">
                    {company.phone.display}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-mute-deep">Email</dt>
                <dd className="text-[17px]">
                  {company.email.href ? (
                    <a href={company.email.href} className="link-line pb-0.5">
                      {company.email.display}
                    </a>
                  ) : (
                    <Pending label="Email to be provided" />
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-headline font-light">Enquiries</h2>
            <p className="mt-5 max-w-lg text-[16px] leading-[1.7] text-mute-deep">
              For investor, institutional and general enquiries, please share a few details and the appropriate member of our team will respond.
            </p>

            {sent ? (
              <div role="status" className="mt-14 border-t border-ink/15 pt-10">
                <p className="text-title font-light">Thank you.</p>
                <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-mute-deep">
                  This form is not yet connected to SICIM’s inbox. Please contact us by phone in the meantime.
                </p>
                <Pending className="mt-6" label="Connect form endpoint before launch" />
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2" noValidate={false}>
                {[
                  { id: 'name', text: 'Full name', type: 'text', auto: 'name', required: true },
                  { id: 'organisation', text: 'Organisation', type: 'text', auto: 'organization', required: false },
                  { id: 'email', text: 'Email address', type: 'email', auto: 'email', required: true },
                  { id: 'phone', text: 'Phone (optional)', type: 'tel', auto: 'tel', required: false },
                ].map((f) => (
                  <div key={f.id} className="relative">
                    <input id={f.id} name={f.id} type={f.type} autoComplete={f.auto} required={f.required} placeholder={f.text} className={field} />
                    <label htmlFor={f.id} className={label}>
                      {f.text}
                    </label>
                  </div>
                ))}
                <div className="relative sm:col-span-2">
                  <select
                    id="enquiry"
                    name="enquiry"
                    defaultValue="General"
                    className="w-full appearance-none border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-7 text-[17px] text-ink focus:border-ink focus:outline-none focus:ring-0"
                  >
                    <option>General</option>
                    <option>Individual investor</option>
                    <option>Institutional investor</option>
                    <option>Media</option>
                  </select>
                  <label htmlFor="enquiry" className="eyebrow absolute left-0 top-0 text-mute-deep">
                    Nature of enquiry
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <textarea id="message" name="message" rows={4} required placeholder="Message" className={`${field} resize-none`} />
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                </div>
                <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[12px] leading-relaxed text-mute-deep">
                    Information submitted will be handled in accordance with our <Link to="/legal#privacy" className="underline underline-offset-4">privacy notice</Link>.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-4 bg-ink px-9 py-5 text-[11px] font-medium uppercase tracking-[0.22em] text-paper transition-colors duration-500 hover:bg-ink-2"
                  >
                    Send enquiry
                    <span className="arrow text-gold" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
