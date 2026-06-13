import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { StatStrip } from '@/components/Stat';
import { IconArrowRight } from '@/components/icons';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Jonnagiri Project',
  description:
    "The Jonnagiri Gold Project in Kurnool District, Andhra Pradesh — one of the most development-ready gold projects in India, with a 361,000 oz JORC resource and India's first greenfield integrated gold mining and processing facility.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Jonnagiri Project | Geomysore',
    description:
      'The Jonnagiri Gold Project in Kurnool District, Andhra Pradesh — one of the most development-ready gold projects in India.',
  },
};

const subPages = [
  {
    title: 'Executive Summary',
    href: '/project/executive-summary',
    text: 'The project at a glance — resources, mine life, capacity and the path to full-scale commercial production.',
  },
  {
    title: 'Background History',
    href: '/project/background-history',
    text: 'From regional reconnaissance in the 1990s to a granted Mining Lease and a construction-ready gold project.',
  },
  {
    title: 'Statutory Clearances',
    href: '/project/statutory-clearances',
    text: 'Mining Lease, Environmental Clearance, pollution-control consents and water allocation — all major approvals in place.',
  },
  {
    title: 'Exploration',
    href: '/project/exploration',
    text: 'Three decades of geological, geochemical and geophysical surveys across India’s most prospective gold belts.',
  },
  {
    title: 'Resources & Geology',
    href: '/project/resources-geology',
    text: 'Four mineralised blocks — East, West, South and North — underpinning a 361,000 oz JORC Mineral Resource.',
  },
  {
    title: 'Mining',
    href: '/project/mining',
    text: 'Modern open-pit operations at 0.4 MTPA, advancing systematically across the East Block.',
  },
  {
    title: 'Processing',
    href: '/project/processing',
    text: 'An integrated 0.3 MTPA processing plant turning ore into gold on site, proven first at pilot scale.',
  },
];

const upcoming = [
  { title: 'Consulting', href: '/project/consulting' },
  { title: 'Marketing', href: '/project/marketing' },
  { title: 'Development & Operations', href: '/project/development-operations' },
];

export default function ProjectPage() {
  return (
    <>
      <PageHero image={STOCK.minePit}
        eyebrow="Kurnool District, Andhra Pradesh"
        title="The Jonnagiri Gold Project"
        lead="One of the most development-ready gold projects in India, offering strong cash flows over 8–10 years. Open-pit mining combined with straightforward metallurgy makes the project highly profitable — and pilot scale production has commenced."
      />

      <StatStrip
        label="Key project figures"
        stats={[
          { value: '361,000', unit: 'oz', label: 'JORC Mineral Resource' },
          { value: '6.8', unit: 'tonnes', label: 'Mineable Gold (East Block)' },
          { value: '0.4', unit: 'MTPA', label: 'Mining Capacity' },
          { value: '8–9', unit: 'years', label: 'Mine Life (Phase 1)' },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-md">
              <Image
                src={IMG.banner2}
                alt="Open-pit mine development at the Jonnagiri Gold Project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="prose-body">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold sm:text-sm">Overview</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">A first for Independent India</h2>
            <p>
              Located across the villages of Jonnagiri, Erragudi and Pagadirayi in Tuggali Mandal, the project is being
              developed into an integrated open-pit mine and processing facility. Once commissioned, Jonnagiri would be
              the first large greenfield gold project with integrated mining and processing to be developed in
              Independent India.
            </p>
            <Link
              href="/project/executive-summary"
              className="mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
            >
              Read the executive summary
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="explore-project">
        <div className="container-x">
          <SectionHeading eyebrow="Explore the Project" title="Inside Jonnagiri" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subPages.map((page) => (
              <Reveal key={page.href}>
                <ContentCard title={page.title} href={page.href}>
                  {page.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-dashed bg-canvas p-6">
              <p className="text-sm font-medium text-ink">More from the project — in development:</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {upcoming.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-accent"
                    >
                      {page.title}
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
