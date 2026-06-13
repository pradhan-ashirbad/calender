import Image from 'next/image';
import Link from 'next/link';
import Contours from '@/components/Contours';
import FeatureRow from '@/components/FeatureRow';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatCounter from '@/components/StatCounter';
import {
  IconArrowRight,
  IconBulb,
  IconCompass,
  IconFactory,
  IconHeart,
  IconLeaf,
  IconMountain,
} from '@/components/icons';
import { IMG, PARTNERS, STOCK } from '@/lib/site';

const heroStats = [
  { value: '35,000+', unit: 'sq.km', label: 'Explored across India' },
  { value: '30+', unit: 'yrs', label: 'Operating since 1994' },
  { value: '361,000', unit: 'oz', label: 'JORC Resource' },
  { value: '0.4', unit: 'MTPA', label: 'Mining capacity' },
];

const capabilities = [
  {
    title: 'Exploration',
    text: 'Advanced geological, geochemical & geophysical surveys across India’s gold belts.',
    href: '/project/exploration',
    icon: <IconCompass />,
  },
  {
    title: 'Mining',
    text: 'Modern open-pit extraction with 0.4 MTPA approved capacity.',
    href: '/project/mining',
    icon: <IconMountain />,
  },
  {
    title: 'Mineral Processing',
    text: 'An integrated 0.3 MTPA processing plant turning ore into gold on site.',
    href: '/project/processing',
    icon: <IconFactory />,
  },
  {
    title: 'Sustainability',
    text: 'Responsible mining built on circular-economy principles.',
    href: '/sustainability',
    icon: <IconLeaf />,
  },
  {
    title: 'Community & CSR',
    text: 'Deep community integration since operations began.',
    href: '/csr',
    icon: <IconHeart />,
  },
  {
    title: 'Innovation',
    text: 'Pilot plant, tree translocation, tailing bricks and more.',
    href: '/sustainability/innovations',
    icon: <IconBulb />,
  },
];

const sustainabilityCards = [
  {
    title: 'Waste Rock → Aggregates',
    text: 'Overburden repurposed into M-Sand and aggregates.',
    href: '/sustainability/waste-management',
    image: IMG.banner3,
  },
  {
    title: 'Tailings → Bricks',
    text: 'Tailings transformed into construction bricks.',
    href: '/sustainability/innovations',
    image: IMG.treeStep2,
  },
  {
    title: 'Tree Translocation',
    text: 'Mature trees moved and re-established, not felled.',
    href: '/sustainability/overview',
    image: IMG.treeStep1,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink">
        <Image
          src={IMG.heroTeam}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-accent/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" aria-hidden="true" />
        <Contours className="absolute inset-0 h-full w-full text-gold/10" />
        <div className="container-x relative pb-24 pt-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft/30 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
            Gold exploration since 1994
          </span>
          <h1 className="mt-7 max-w-5xl font-display text-[2.9rem] leading-[1.01] text-white sm:text-6xl lg:text-[5.5rem]">
            India&rsquo;s premier <span className="text-gradient-gold">gold exploration</span> &amp; development
            company
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 sm:text-xl">
            35,000+ sq.km explored, multiple precious-metal discoveries, and India&rsquo;s first large greenfield
            integrated gold mining and processing facility under development.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/project" className="btn-gold">
              Explore the Project
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-ghost">
              About Geomysore
            </Link>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="container-x flex items-center justify-between py-5 font-mono text-xs uppercase tracking-[0.2em] text-stone-400">
            <span>Geomysore Services (India) Pvt. Ltd.</span>
            <span className="hidden items-center gap-2 sm:flex">
              Scroll to explore
              <span className="animate-float" aria-hidden="true">
                ↓
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Overlapping stat band */}
      <div className="container-x relative z-10 -mt-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-soft md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center">
                <dd className="font-mono text-3xl font-medium sm:text-4xl">
                  <span className="text-gradient-gold">
                    <StatCounter value={stat.value} />
                  </span>
                  <span className="ml-1 text-base text-gold">{stat.unit}</span>
                </dd>
                <dt className="mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Partners marquee */}
      <div className="mt-16 sm:mt-20">
        <Marquee items={PARTNERS} label="Shareholders, partners & reporting standards" />
      </div>

      {/* Vision statement */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Contours className="absolute inset-0 h-full w-full text-gold/[0.06]" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow text-gold">Our purpose</p>
            <p className="mt-7 max-w-5xl font-display text-3xl leading-[1.28] text-ink sm:text-4xl lg:text-[2.9rem] lg:leading-[1.25]">
              We find and develop India&rsquo;s gold to the highest international standards —{' '}
              <span className="text-gradient-gold">JORC and NI 43-101 compliant</span> — and in lasting partnership
              with the communities who host our work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 sm:py-28">
        <FeatureRow
          kicker="Who we are"
          title="Three decades proving India’s gold potential"
          image={STOCK.landscape}
          imageAlt="Aerial view of the prospective gold-belt landscape"
          badge={{ value: '30+', label: 'Years exploring India' }}
          href="/about"
          ctaLabel="About Geomysore"
        >
          <p>
            Established in 1994 by experienced Australian promoters, Geomysore has explored more than 35,000 sq.km
            across eight Indian states and made several discoveries of gold and precious metals.
          </p>
          <p>
            That patient, science-led approach culminated in the Jonnagiri Gold Project — the first private-sector gold
            mine with an integrated processing facility to be developed in India in 70 years.
          </p>
        </FeatureRow>
      </section>

      {/* Capabilities */}
      <section className="border-y border-line bg-white py-20 sm:py-28" aria-labelledby="capabilities">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-gold">What we do</p>
            <h2 id="capabilities" className="mt-4 font-display text-3xl leading-[1.1] text-ink sm:text-4xl">
              An end-to-end capability across the mining value chain
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              From the first geochemical sample to refined gold poured on site — built over three decades in India’s
              most prospective greenstone and schist belts.
            </p>
            <Link href="/project" className="link-arrow mt-7">
              Explore the project
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="border-b border-line">
            {capabilities.map((cap, index) => (
              <li key={cap.title}>
                <Link
                  href={cap.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-line py-6 transition-colors duration-200 hover:bg-canvas/70 sm:gap-8"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-sm text-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 text-accent ring-1 ring-inset ring-accent/10 sm:flex">
                      {cap.icon}
                    </span>
                  </span>
                  <span>
                    <span className="block font-display text-xl text-ink transition-colors duration-200 group-hover:text-accent">
                      {cap.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{cap.text}</span>
                  </span>
                  <IconArrowRight className="h-5 w-5 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flagship project — full-bleed band */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="flagship">
        <Image
          src={STOCK.minePit}
          alt=""
          fill
          sizes="100vw"
          className="animate-kenburns object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" aria-hidden="true" />
        <Contours className="absolute inset-0 h-full w-full text-gold/10" />
        <div className="container-x relative py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-soft">Flagship project · Kurnool, Andhra Pradesh</p>
            <h2 id="flagship" className="mt-4 font-display text-3xl leading-[1.1] text-white sm:text-5xl">
              The Jonnagiri Gold Project
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-200/90">
              One of the most development-ready gold projects in India — an open-pit operation with straightforward
              metallurgy and strong cash flows over 8–10 years. Pilot-scale production has commenced.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {[
                { v: '361,000', u: 'oz', l: 'JORC Resource' },
                { v: '6.8', u: 't', l: 'Mineable gold' },
                { v: '8–9', u: 'yrs', l: 'Mine life' },
              ].map((s) => (
                <div key={s.l} className="bg-ink/60 px-4 py-5 text-center backdrop-blur-sm">
                  <p className="font-mono text-2xl font-medium text-gold-soft">
                    {s.v}
                    <span className="ml-0.5 text-sm">{s.u}</span>
                  </p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-stone-400">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/project" className="btn-gold">
                Explore the Project
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability image cards */}
      <section className="py-20 sm:py-28" aria-labelledby="sustainability">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Sustainability"
              title="Circular by design"
              lead="Waste streams become construction materials, trees are moved rather than felled, and the land is rebuilt as we mine."
            />
            <Link href="/sustainability" className="link-arrow shrink-0">
              All sustainability work
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sustainabilityCards.map((card) => (
              <Reveal key={card.title}>
                <Link
                  href={card.href}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-sidebar shadow-soft"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl text-white">{card.title}</h3>
                    <p className="mt-1 text-sm text-stone-200/90">{card.text}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft">
                      Learn more
                      <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CSR teaser */}
      <section className="pb-24" aria-labelledby="csr-teaser">
        <div className="container-x">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-dark via-accent to-sidebar px-8 py-14 sm:px-12 lg:py-16">
            <Contours className="absolute inset-0 h-full w-full text-gold/15" />
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
              <h2 id="csr-teaser" className="max-w-2xl font-display text-2xl leading-snug text-white sm:text-3xl">
                Mining that gives back — Education, Health, Water Supply, Plantation and Infrastructure for
                surrounding communities.
              </h2>
              <Link href="/csr" className="btn-gold shrink-0">
                See our CSR work
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
