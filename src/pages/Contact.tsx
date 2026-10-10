import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Pending from '../components/Pending';
import { audiences, company } from '../data/site';
import { useAudience } from '../hooks/useAudience';
import { useTitle } from '../hooks/useTitle';

const input =
  'mt-2 w-full border-2 border-line bg-white px-4 py-3.5 text-[16px] text-ink transition-colors placeholder:text-mute focus:border-ink focus:outline-none focus:ring-0';

export default function Contact() {
  useTitle('Contact us');
  const { audience } = useAudience();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No submission endpoint is configured yet; connect one before launch.
    setSent(true);
  };

  return (
    <>
      <PageHeader crumb="Contact us" title="Let’s start a conversation." intro="For investor, institutional and general enquiries." art="atrium" seed={11} />

      <section aria-label="Contact details and enquiry form" className="bg-surface py-16 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="bg-white p-6 sm:p-10 lg:col-span-8">
            <h2 className="text-headline font-extrabold">Send an enquiry</h2>
            <p className="mt-3 text-[15px] text-mute-deep">Fields marked * are required.</p>

            {sent ? (
              <div role="status" className="mt-10 border-l-4 border-ink bg-surface p-6">
                <p className="text-title font-extrabold">Thank you.</p>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mute-deep">
                  This form is not yet connected to SICIM’s inbox. Please contact us by phone in the meantime.
                </p>
                <Pending className="mt-5" label="Connect form endpoint before launch" />
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { id: 'name', text: 'Full name *', type: 'text', auto: 'name', required: true },
                  { id: 'organisation', text: 'Organisation', type: 'text', auto: 'organization', required: false },
                  { id: 'email', text: 'Email address *', type: 'email', auto: 'email', required: true },
                  { id: 'phone', text: 'Phone', type: 'tel', auto: 'tel', required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-[14px] font-bold">
                      {f.text}
                    </label>
                    <input id={f.id} name={f.id} type={f.type} autoComplete={f.auto} required={f.required} className={input} />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry" className="text-[14px] font-bold">
                    I am an
                  </label>
                  <select id="enquiry" name="enquiry" defaultValue={audience} className={input}>
                    {audiences.map((a) => (
                      <option key={a.key} value={a.key}>
                        {a.label}
                      </option>
                    ))}
                    <option value="media">Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-[14px] font-bold">
                    Message *
                  </label>
                  <textarea id="message" name="message" rows={5} required className={`${input} resize-y`} />
                </div>
                <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[13px] leading-relaxed text-mute-deep">
                    Your information will be handled in accordance with our{' '}
                    <Link to="/legal#privacy" className="font-bold text-ink underline underline-offset-4">
                      privacy notice
                    </Link>
                    .
                  </p>
                  <button type="submit" className="btn-primary group">
                    Submit enquiry
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="space-y-6 lg:col-span-4">
            <div className="on-dark bg-ink p-8 text-white">
              <h2 className="text-title font-extrabold">Office</h2>
              <address className="mt-4 text-[16px] not-italic leading-relaxed text-white/85">
                {company.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              {!company.address.verified && <Pending className="mt-4" label="Confirm current address" />}
            </div>
            <div className="bg-white p-8">
              <h2 className="text-title font-extrabold">Call us</h2>
              <a href={company.phone.href} className="mt-3 inline-block text-xl font-bold underline-offset-4 hover:underline">
                {company.phone.display}
              </a>
              <h2 className="mt-8 text-title font-extrabold">Email</h2>
              <div className="mt-3">
                {company.email.href ? (
                  <a href={company.email.href} className="font-bold hover:underline">
                    {company.email.display}
                  </a>
                ) : (
                  <Pending label="Email to be provided" />
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
