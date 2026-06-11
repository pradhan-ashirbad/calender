import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconArrowRight, IconDroplet, IconLeaf, IconSun } from '@/components/icons';
import { IMG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Green Initiatives',
  description:
    'Green initiatives at Geomysore — plantation along village roads, the tree translocation program and responsible canal-water sourcing.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Green Initiatives | Geomysore',
    description:
      'Green initiatives at Geomysore — plantation along village roads, the tree translocation program and responsible canal-water sourcing.',
  },
};

const initiatives = [
  {
    title: 'Plantation',
    icon: <IconLeaf />,
    text: 'Active plantation in and around the lease area, including along village roads — building green cover that outlasts the mine itself.',
  },
  {
    title: 'Tree Translocation',
    icon: <IconSun />,
    text: 'Mature trees in the project footprint are lifted, transported and re-established rather than felled, preserving the existing canopy.',
  },
  {
    title: 'Responsible Water Sourcing',
    icon: <IconDroplet />,
    text: 'Process water is drawn from an approved canal allocation rather than community groundwater, protecting local supplies.',
  },
];

export default function GreenInitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Green Initiatives"
        lead="Practical environmental programmes woven into day-to-day operations at Jonnagiri."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="On the Ground"
            title="Greener by default"
            lead="From the trees we move to the water we use, every operational choice is made with the surrounding environment in mind."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {initiatives.map((initiative) => (
              <Reveal key={initiative.title}>
                <ContentCard title={initiative.title} icon={initiative.icon}>
                  {initiative.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
              <Image
                src={IMG.treeStep3}
                alt="A translocated tree stabilised in its new location"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="prose-body">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">The tree translocation program</h2>
            <p>
              Our flagship green initiative uses cranes and careful site preparation to move mature trees out of the
              mining footprint and re-establish them nearby — a three-step process of lifting, site preparation and
              replanting.
            </p>
            <Link
              href="/sustainability/overview"
              className="mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
            >
              See the three-step process
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
