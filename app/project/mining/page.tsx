import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { StatGrid } from '@/components/Stat';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mining',
  description:
    'Modern open-pit mining at the Jonnagiri Gold Project — conventional drilling and blasting at 0.4 MTPA, advancing systematically across the East Block.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Mining | Geomysore',
    description: 'Modern open-pit mining at the Jonnagiri Gold Project — conventional drilling and blasting at 0.4 MTPA.',
  },
};

const points = [
  'Bench heights of 7.5m with 10m operating widths',
  'Pit progresses systematically from north to south',
  'Safe, efficient extraction designed to maximise recovery and minimise environmental impact',
  'Mine development and operations with partner Thriveni Earthmovers & Infra',
];

export default function MiningPage() {
  return (
    <>
      <PageHero image={STOCK.machinery}
        eyebrow="Jonnagiri Project"
        title="Mining"
        lead="Modern open-pit operations using conventional drilling and blasting, designed for safe and efficient extraction."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="prose-body">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Modern open-pit operations</h2>
            <p>
              Mining in the East Block is an open-pit operation using conventional drilling and blasting, planned from
              pit-optimisation outputs targeting 495 ktpa at a 0.6 g/t cut-off grade. The approved Mining Plan permits
              operations at 0.4 MTPA — approximately 1,000 tonnes of ore per day.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-md">
              <Image
                src={IMG.banner3}
                alt="Open-pit bench mining at the Jonnagiri Gold Project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="container-x mt-12">
          <StatGrid
            stats={[
              { value: '0.4', unit: 'MTPA', label: 'Approved mining capacity (~1,000 TPD)' },
              { value: '495', unit: 'ktpa', label: 'Pit optimisation throughput' },
              { value: '0.6', unit: 'g/t', label: 'Cut-off grade' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
