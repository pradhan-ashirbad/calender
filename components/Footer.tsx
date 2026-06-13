import Link from 'next/link';
import Contours from '@/components/Contours';
import { IconArrowRight, IconMail, IconMapPin } from '@/components/icons';
import { FOOTER_COMPANY_LINKS, FOOTER_QUICK_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Pre-footer call to action */}
      <section className="bg-canvas pb-0 pt-4">
        <div className="container-x">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-sidebar via-ink to-accent-dark px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
            <Contours className="absolute inset-0 h-full w-full text-gold/15" />
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-gold-soft">Get in touch</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                Let&rsquo;s build India&rsquo;s gold future together.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-200/90">
                Whether you&rsquo;re an investor, partner or prospective team member, we&rsquo;d love to talk about the
                Jonnagiri project and what comes next.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold">
                  Contact Us
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/careers" className="btn-ghost">
                  View Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-sidebar text-stone-300">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="font-display text-3xl font-semibold tracking-wide text-white">
              GEOMYSORE
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              A gold exploration and development company operating across India since 1994. With a focus on precious
              and base metals, Geomysore has explored over 35,000 sq.km and made significant discoveries across
              multiple states.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" />
                <span>{SITE.address.join(' ')}</span>
              </p>
              <p className="flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0 text-gold-soft" />
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-soft">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <nav className="lg:col-span-3 lg:col-start-8" aria-label="Quick links">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-gold-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Company links">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">Company</h2>
            <ul className="mt-5 space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-gold-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x flex flex-col gap-2 py-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © {year} Geomysore Services. All Rights Reserved.</p>
            <p>CIN: U74899KA1994PTC044275</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
