'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconChevronDown } from '@/components/icons';
import { NAV, SITE } from '@/lib/site';

function navLinkClass(active: boolean) {
  return [
    'relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150',
    'after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:bg-accent-light after:transition-transform after:duration-150',
    active
      ? 'text-white after:scale-x-100'
      : 'text-stone-300 after:scale-x-0 hover:text-white hover:after:scale-x-100',
  ].join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [logoFailed, setLogoFailed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-sidebar/80 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-sidebar/70'
          : 'border-transparent bg-sidebar'
      }`}
    >
      <div
        className={`hidden border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between text-xs text-stone-300/80">
          <span className="font-mono tracking-wide">
            Koramangala, Bengaluru · Jonnagiri, Andhra Pradesh
          </span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-soft">
              {SITE.email}
            </a>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-0.5 font-medium text-gold-soft transition-colors hover:bg-gold/25"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
              We&rsquo;re hiring
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-16 lg:h-20'
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Geomysore — Home">
          {logoFailed ? (
            <span className="font-display text-2xl font-semibold tracking-wide text-white">GEOMYSORE</span>
          ) : (
            <img
              src={SITE.logo}
              alt="Geomysore Services India"
              className="h-10 w-auto lg:h-11"
              onError={() => setLogoFailed(true)}
            />
          )}
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.href} className="group relative">
                  <Link href={item.href} className={navLinkClass(isActive(item.href))}>
                    {item.label}
                    <IconChevronDown className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full translate-y-1 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="w-64 overflow-hidden rounded-xl border border-line bg-white py-2 shadow-2xl ring-1 ring-black/5">
                      <li className="mx-2 mb-1 h-0.5 rounded-full bg-gradient-to-r from-gold-bright to-gold" aria-hidden="true" />
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-150 hover:bg-canvas hover:text-accent ${
                              pathname === child.href ? 'font-medium text-accent' : 'text-ink'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={navLinkClass(isActive(item.href))}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <div id="mobile-nav" className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={`absolute inset-y-0 right-0 w-80 max-w-[85vw] overflow-y-auto bg-sidebar px-6 pb-10 pt-24 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="space-y-1">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-white hover:bg-white/5"
                    aria-expanded={openSection === item.label}
                    onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                  >
                    {item.label}
                    <IconChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${openSection === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openSection === item.label && (
                    <ul className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      <li>
                        <Link href={item.href} className="block rounded-md px-3 py-2 text-sm text-stone-300 hover:text-white">
                          Overview
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-md px-3 py-2 text-sm hover:text-white ${
                              pathname === child.href ? 'text-accent-light' : 'text-stone-300'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 space-y-1 border-t border-white/10 pt-6">
            <Link href="/careers" className="block rounded-md px-3 py-2 text-sm text-stone-300 hover:text-white">
              Careers
            </Link>
            <Link href="/gallery" className="block rounded-md px-3 py-2 text-sm text-stone-300 hover:text-white">
              Gallery
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
