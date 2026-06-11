import Link from 'next/link';
import { FOOTER_COMPANY_LINKS, FOOTER_QUICK_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-stone-300">
      <div className="container-x grid gap-12 py-14 lg:grid-cols-2">
        <div>
          <Link href="/" className="font-display text-3xl font-semibold tracking-wide text-white">
            GEOMYSORE
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Geomysore Services India Pvt Ltd is a gold exploration and development company operating across India
            since 1994. With a focus on precious and base metals, Geomysore has explored over 35,000 sq.km and made
            significant discoveries across multiple states.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <nav aria-label="Quick links">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company links">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} Geomysore Services. All Rights Reserved.</p>
          <a href={`mailto:${SITE.email}`} className="transition-colors duration-150 hover:text-accent-light">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
