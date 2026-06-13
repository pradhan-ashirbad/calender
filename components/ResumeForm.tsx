'use client';

import { useRef, useState } from 'react';

const inputClass = (invalid: boolean) =>
  `block w-full rounded-xl border bg-white px-4 py-3 text-ink shadow-sm transition-colors placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-accent/15 ${
    invalid ? 'border-red-500' : 'border-line focus:border-accent'
  }`;

type Field = {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
};

const FIELDS: Field[] = [
  { id: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { id: 'qualification', label: 'Qualification', type: 'text' },
];

export default function ResumeForm() {
  const [values, setValues] = useState<Record<string, string>>({ name: '', email: '', phone: '', qualification: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!values.qualification.trim()) next.qualification = 'Please enter your qualification.';
    if (!fileRef.current?.files?.length) next.resume = 'Please attach your resume.';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues({ name: '', email: '', phone: '', qualification: '' });
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {sent && (
        <p role="status" className="mb-6 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white">
          Thank you — your resume has been received. We will be in touch when a suitable position opens.
        </p>
      )}
      <div className="space-y-5">
        {FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={`resume-${field.id}`} className="mb-1.5 block text-sm font-medium text-ink">
              {field.label} <span className="text-red-600">*</span>
            </label>
            <input
              id={`resume-${field.id}`}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.id]}
              onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
              className={inputClass(!!errors[field.id])}
              aria-invalid={!!errors[field.id]}
              aria-describedby={errors[field.id] ? `resume-${field.id}-error` : undefined}
            />
            {errors[field.id] && (
              <p id={`resume-${field.id}-error`} className="mt-1.5 text-sm text-red-600">
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}
        <div>
          <label htmlFor="resume-file" className="mb-1.5 block text-sm font-medium text-ink">
            Resume <span className="text-red-600">*</span>
          </label>
          <input
            id="resume-file"
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className={`block w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-muted shadow-sm file:mr-4 file:rounded-lg file:border-0 file:bg-accent/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-accent hover:file:bg-accent/15 ${
              errors.resume ? 'border-red-500' : 'border-line'
            }`}
            aria-invalid={!!errors.resume}
            aria-describedby={errors.resume ? 'resume-file-error' : undefined}
          />
          {errors.resume && (
            <p id="resume-file-error" className="mt-1.5 text-sm text-red-600">
              {errors.resume}
            </p>
          )}
        </div>
        <button type="submit" className="btn-maroon">
          Submit Application
        </button>
      </div>
    </form>
  );
}
