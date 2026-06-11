import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { StatGrid } from '@/components/Stat';

export const metadata: Metadata = {
  title: 'Executive Summary',
  description:
    'The Jonnagiri gold project executive summary — 361,000 oz JORC Mineral Resource, 6.8 tonnes of mineable gold in the East Block open pit and a mine life of 8–9 years.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Executive Summary | Geomysore',
    description:
      'The Jonnagiri gold project executive summary — 361,000 oz JORC Mineral Resource, 6.8 tonnes of mineable gold in the East Block open pit and a mine life of 8–9 years.',
  },
};

const stats = [
  { value: '361,000', unit: 'oz', label: 'JORC Mineral Resource' },
  { value: '6.8', unit: 'tonnes', label: 'Mineable Gold (East Block)' },
  { value: '180', unit: 'm', label: 'Open Pit Depth' },
  { value: '8–9', unit: 'years', label: 'Mine Life (Phase 1)' },
  { value: '14', unit: 'tonnes', label: 'Potential Total Resource' },
  { value: '0.4', unit: 'MTPA', label: 'Mining Capacity' },
];

export default function ExecutiveSummaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Jonnagiri Project"
        title="Executive Summary"
        lead="A well developed, construction-ready gold project offering strong cash flows over the next 8–10 years."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <Reveal className="prose-body lg:col-span-3">
            <p>
              The Jonnagiri project is one of the most well developed, construction-ready gold projects in the country
              offering strong cash flows over the next 8–10 years. Open-pit mining operations and simple metallurgy of
              the gold ore make this project highly profitable.
            </p>
            <p>
              Gold mineralisation in the ML area is distributed across 4 blocks: East, West, South and North Blocks.
              Geomysore has conducted detailed exploration in the East and West Blocks, achieving a Mineral Resource of{' '}
              <strong>361,000 ounces</strong> (JORC Indicated and Inferred categories), of which approximately 271,000
              ounces is accessible via open pit.
            </p>
            <p>
              Detailed drilling and rigorous internal evaluation indicate the presence of{' '}
              <strong>6.8 tonnes of mineable gold</strong> in the open pit of the East Block to a total depth of 180m,
              with a mine life of 8 to 9 years. Upon further detailed drilling in the remaining blocks, resources could
              potentially increase to 14 tonnes of mineable gold with a mine life of approximately 15 years.
            </p>
            <p>
              The project is expected to start full-scale commercial production from the second quarter of 2025. Pilot
              scale production has already commenced.
            </p>
          </Reveal>
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Key Numbers" title="At a glance" />
          </div>
        </div>
        <div className="container-x mt-10">
          <StatGrid tone="gold" stats={stats} />
        </div>
      </section>
    </>
  );
}
