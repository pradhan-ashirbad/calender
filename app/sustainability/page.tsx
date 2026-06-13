import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconArrowRight, IconBulb, IconHeart, IconLeaf, IconMountain, IconRecycle, IconSun } from '@/components/icons';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'At Geomysore, sustainability is at the core of our mining operations — minimising environmental impact while enhancing resource efficiency and community value.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Sustainability | Geomysore',
    description:
      'At Geomysore, sustainability is at the core of our mining operations — minimising environmental impact while enhancing resource efficiency and community value.',
  },
};

const subPages = [
  {
    title: 'Sustainability',
    href: '/sustainability/overview',
    icon: <IconLeaf />,
    text: 'Our four-step sustainable framework — from waste rock management to rebuilding the land.',
  },
  {
    title: 'Green Initiatives',
    href: '/sustainability/green-initiatives',
    icon: <IconSun />,
    text: 'Plantation, tree translocation and responsible water sourcing across our operations.',
  },
  {
    title: 'Integration With Society',
    href: '/sustainability/community-integration',
    icon: <IconHeart />,
    text: 'Local employment, education and shared infrastructure that root the project in its communities.',
  },
  {
    title: 'Waste Management',
    href: '/sustainability/waste-management',
    icon: <IconMountain />,
    text: 'Overburden, waste rock and tailings repurposed into aggregates, M-Sand and tailing bricks.',
  },
  {
    title: 'Innovations',
    href: '/sustainability/innovations',
    icon: <IconBulb />,
    text: 'Pilot plant metallurgy, tailing bricks and tree translocation — practical innovation in action.',
  },
  {
    title: 'Net Zero',
    href: '/sustainability/net-zero',
    icon: <IconSun />,
    text: 'Our pathway towards minimising emissions across mining and processing operations.',
  },
  {
    title: 'Recycle & Rebuild',
    href: '/sustainability/recycle-rebuild',
    icon: <IconRecycle />,
    text: 'Reusing drilling roads, reclaiming land early and rebuilding ecological balance for post-mining land use.',
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero image={STOCK.aerial}
        eyebrow="Responsible Mining"
        title="Sustainability"
        lead="At Geomysore, sustainability is at the core of our mining operations. We are committed to minimising environmental impact while enhancing resource efficiency and community value."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="prose-body">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">A circular approach to mining</h2>
            <p>
              Our sustainable framework follows a four-step approach: responsible OB/waste rock management, tailing
              management, drilling-roads re-utilisation, and rebuilding the land. Materials once considered waste are
              repurposed into aggregates, M-Sand and tailing bricks — reducing environmental footprint while supporting
              local development.
            </p>
            <Link
              href="/sustainability/overview"
              className="mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
            >
              Explore the four-step framework
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-md">
              <Image
                src={IMG.treeStep1}
                alt="A mature tree being lifted by crane during the tree translocation program"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="sustainability-areas">
        <div className="container-x">
          <SectionHeading eyebrow="Explore" title="Our sustainability programmes" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subPages.map((page) => (
              <Reveal key={page.href}>
                <ContentCard title={page.title} href={page.href} icon={page.icon}>
                  {page.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
