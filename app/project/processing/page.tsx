import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Processing',
  description:
    "Jonnagiri's integrated 0.3 MTPA processing facility turns ore into gold on site — simple metallurgy keeps recoveries high and operating costs competitive.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Processing | Geomysore',
    description:
      "Jonnagiri's integrated 0.3 MTPA processing facility turns ore into gold on site — simple metallurgy keeps recoveries high and operating costs competitive.",
  },
};

const points = [
  'Integrated mine-to-gold flowsheet with simple, proven metallurgy',
  'Pilot plant for continuous metallurgical test work and optimisation',
  'Environmental Clearance for the processing plant granted in 2025',
];

export default function ProcessingPage() {
  return (
    <>
      <PageHero image={STOCK.plant}
        eyebrow="Jonnagiri Project"
        title="Processing"
        lead="From ore to gold, on one site — India's first integrated private-sector gold processing facility in 70 years."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-md">
              <Image
                src={IMG.banner4}
                alt="The integrated gold processing plant at Jonnagiri"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="prose-body">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">From ore to gold, on one site</h2>
            <p>
              Jonnagiri&rsquo;s integrated 0.3 MTPA processing facility turns ore into refined gold on site — the
              simple metallurgy of the deposit keeps recoveries high and operating costs competitive.
            </p>
            <p>
              Our state-of-the-art pilot plant serves as the bridge between exploration and full-scale production,
              allowing the team to test, refine and optimise gold extraction processes before they are scaled.
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
        </div>
      </section>
    </>
  );
}
