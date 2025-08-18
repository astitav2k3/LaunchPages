import { useEffect, useState } from 'react';

export default function Contact() {
  const [template, setTemplate] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTemplate(params.get('template') || '');
  }, []);

  return (
    <div className="py-12">
      <div className="container">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold">Start Your Website</h2>
          <p className="text-slate-400 mt-2">
            Fill the quick form and I’ll prepare a free preview for your business.
          </p>

          {/* Connect directly to FormSubmit */}
          <form
            className="mt-6 grid gap-4"
            action="https://formsubmit.co/launchpages2025@gmail.com"
            method="POST"
          >
            {/* FormSubmit hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Website Preview Request" />

            {/* Form fields */}
            <input
              className="border border-slate-700 bg-slate-900 rounded-md px-3 py-2"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="border border-slate-700 bg-slate-900 rounded-md px-3 py-2"
              name="business"
              placeholder="Business name"
              required
            />
            <input
              className="border border-slate-700 bg-slate-900 rounded-md px-3 py-2"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
            <select
              className="border border-slate-700 bg-slate-900 rounded-md px-3 py-2"
              name="template"
              defaultValue={template || ''}
            >
              <option value="">Choose template</option>
              <option value="gym">GymPro</option>
              <option value="cafe">CafeRapture</option>
              <option value="salon">Salon</option>
            </select>
            <textarea
              className="border border-slate-700 bg-slate-900 rounded-md px-3 py-2"
              name="message"
              rows="4"
              placeholder="Tell us about your business (services, goals)"
            ></textarea>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="btn btn-primary" type="submit">
                Request Preview
              </button>
              <a
                className="btn border border-slate-700 px-4 py-2 rounded-lg"
                href="https://wa.me/+917009171767?text=Hi%20there!%20I%20want%20to%20start%20my%20website."
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
