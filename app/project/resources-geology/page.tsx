import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { StatGrid } from '@/components/Stat';

export const metadata: Metadata = {
  title: 'Resources & Geology',
  description:
    'Gold mineralisation at Jonnagiri is distributed across four blocks — East, West, South and North — underpinning a 361,000 oz JORC Mineral Resource with significant upside.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Resources & Geology | Geomysore',
    description:
      'Gold mineralisation at Jonnagiri is distributed across four blocks, underpinning a 361,000 oz JORC Mineral Resource.',
  },
};

const blocks = [
  {
    title: 'East Block',
    text: 'The most advanced block and site of the current open pit. Detailed drilling and rigorous internal evaluation indicate 6.8 tonnes of mineable gold to a total depth of 180m, supporting a mine life of 8–9 years.',
  },
  {
    title: 'West Block',
    text: "Detailed exploration alongside the East Block contributes to the project's 361,000 oz JORC Mineral Resource (Indicated and Inferred), of which roughly 271,000 oz is accessible via open pit.",
  },
  {
    title: 'North & South Blocks',
    text: 'Earlier-stage mineralised blocks offering clear brownfield growth. Further detailed drilling could increase resources to 14 tonnes of mineable gold with a mine life of approximately 15 years.',
  },
];

export default function ResourcesGeologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Jonnagiri Project"
        title="Resources & Geology"
        lead="Four mineralised blocks, one proven gold system — detailed exploration in the East and West Blocks underpins the current resource, with significant upside remaining."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Resource"
            title="Four mineralised blocks, one proven system"
            lead="Gold mineralisation within the Mining Lease is distributed across four blocks: East, West, South and North."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {blocks.map((block) => (
              <Reveal key={block.title}>
                <ContentCard title={block.title}>{block.text}</ContentCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <StatGrid
              tone="gold"
              stats={[
                { value: '361,000', unit: 'oz', label: 'JORC Mineral Resource (Indicated + Inferred)' },
                { value: '271,000', unit: 'oz', label: 'Accessible via open pit' },
                { value: '180', unit: 'm', label: 'East Block open pit depth' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
