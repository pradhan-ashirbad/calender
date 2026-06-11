import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IconMail, IconMapPin } from '@/components/icons';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Geomysore Services India Pvt Ltd — Pagidirai Village, Tuggali Mandal, Kurnool District, Andhra Pradesh. Email reception@geomysore.com.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Contact Us | Geomysore',
    description:
      'Contact Geomysore Services India Pvt Ltd — Pagidirai Village, Tuggali Mandal, Kurnool District, Andhra Pradesh.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        lead="Questions about the project, partnerships, careers or our community programmes — we'd love to hear from you."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl text-ink">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink">Contact information</h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <IconMapPin />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Address</h3>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-muted">
                    {SITE.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <IconMail />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Email</h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 inline-block text-sm text-accent transition-colors duration-150 hover:text-accent-dark"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <iframe
                title="Map of the Geomysore office in Tuggali Mandal, Kurnool District, Andhra Pradesh"
                src="https://www.google.com/maps?q=Tuggali+Mandal,+Kurnool+District,+Andhra+Pradesh+518390&output=embed"
                className="h-72 w-full rounded-lg border shadow-sm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
