'use client';

import { useState } from 'react';

const inputClass = (invalid: boolean) =>
  `block w-full rounded-lg border bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 ${
    invalid ? 'border-red-500' : 'focus:border-accent'
  }`;

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {sent && (
        <p role="status" className="mb-6 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white">
          Thank you — your message has been received. We will get back to you shortly.
        </p>
      )}
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={6}
            value={values.message}
            onChange={set('message')}
            className={inputClass(!!errors.message)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-accent-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
