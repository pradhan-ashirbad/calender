import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { StatStrip } from '@/components/Stat';
import {
  IconArrowRight,
  IconBulb,
  IconCompass,
  IconFactory,
  IconHeart,
  IconLeaf,
  IconMountain,
} from '@/components/icons';
import { IMG } from '@/lib/site';

const services = [
  {
    title: 'Exploration',
    text: 'Advanced geological, geochemical & geophysical surveys',
    href: '/project/exploration',
    icon: <IconCompass />,
  },
  {
    title: 'Mining',
    text: 'Open-pit extraction with 0.4 MTPA capacity',
    href: '/project/mining',
    icon: <IconMountain />,
  },
  {
    title: 'Mineral Processing',
    text: 'Integrated processing plant, 0.3 MTPA',
    href: '/project/processing',
    icon: <IconFactory />,
  },
  {
    title: 'Sustainability',
    text: 'Responsible mining with circular economy principles',
    href: '/sustainability',
    icon: <IconLeaf />,
  },
  {
    title: 'CSR',
    text: 'Deep community integration since operations began',
    href: '/csr',
    icon: <IconHeart />,
  },
  {
    title: 'Innovation',
    text: 'Pilot plant, tree translocation, tailing bricks and more',
    href: '/sustainability/innovations',
    icon: <IconBulb />,
  },
];

const sustainabilityPreview = [
  {
    title: 'OB/Waste Rock Management',
    text: 'Overburden and waste rock repurposed into aggregates and M-Sand for construction and infrastructure.',
    href: '/sustainability/waste-management',
  },
  {
    title: 'Tailing Brick Innovation',
    text: 'Tailings transformed into tailing bricks, promoting circular economy principles in construction.',
    href: '/sustainability/innovations',
  },
  {
    title: 'Tree Translocation Program',
    text: 'Mature trees carefully lifted, moved and re-established rather than felled — preserving the local canopy.',
    href: '/sustainability/overview',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate bg-sidebar">
        <Image
          src={IMG.heroTeam}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-accent/55" aria-hidden="true" />
        <div className="container-x relative py-28 lg:py-40">
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            India&rsquo;s Premier Gold Exploration &amp; Development Company
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
            Operating across India since 1994 — 35,000+ sq.km explored, multiple precious metal discoveries, and
            India&rsquo;s first large greenfield integrated gold mining and processing facility under development.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-bright px-6 py-3 font-medium text-ink transition-colors duration-150 hover:bg-gold-soft"
            >
              Explore the Project
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-white/10"
            >
              About Geomysore
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <StatStrip
        label="Key company figures"
        stats={[
          { value: '35,000+', unit: 'sq.km', label: 'Explored across India' },
          { value: '30+', unit: 'Years', label: 'Operating since 1994' },
          { value: '361,000', unit: 'oz', label: 'Mineral Resource (JORC)' },
          { value: '0.4', unit: 'MTPA', label: 'Mining Capacity' },
        ]}
      />

      {/* What we do */}
      <section className="py-16 sm:py-20" aria-labelledby="what-we-do">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="From discovery to gold, responsibly"
            lead="An end-to-end capability across the mining value chain — built over three decades of exploration in India's most prospective gold belts."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.title}>
                <ContentCard title={service.title} href={service.href} icon={service.icon}>
                  {service.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jonnagiri feature */}
      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="jonnagiri-feature">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src={IMG.banner1}
                alt="The Jonnagiri Gold Project site in Kurnool District, Andhra Pradesh"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold sm:text-sm">Flagship Project</p>
            <h2 id="jonnagiri-feature" className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              The Jonnagiri Gold Project
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              The Jonnagiri project is one of the most development-ready gold projects in India, offering strong cash
              flows over 8–10 years. Located in Kurnool District, Andhra Pradesh, the open-pit mining operation
              combined with straightforward metallurgy makes it highly profitable. Pilot scale production has
              commenced.
            </p>
            <Link
              href="/project"
              className="mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
            >
              Learn more about the project
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sustainability preview */}
      <section className="py-16 sm:py-20" aria-labelledby="sustainability-preview">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sustainability"
            title="Circular by design"
            lead="Waste streams become construction materials, trees are moved rather than felled, and the land is rebuilt as we mine."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {sustainabilityPreview.map((item) => (
              <Reveal key={item.title}>
                <ContentCard title={item.title} href={item.href}>
                  {item.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CSR teaser */}
      <section className="bg-accent" aria-labelledby="csr-teaser">
        <div className="container-x flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="csr-teaser" className="max-w-2xl font-display text-2xl leading-snug text-white sm:text-3xl">
            Mining that gives back — Education, Health, Water Supply, Plantation and Infrastructure for surrounding
            communities.
          </h2>
          <Link
            href="/csr"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-accent transition-colors duration-150 hover:bg-canvas"
          >
            See our CSR work
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
