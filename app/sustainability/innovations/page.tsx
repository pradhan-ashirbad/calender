import type { Metadata } from 'next';
import { STOCK } from '@/lib/site';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconBulb, IconFactory, IconLeaf, IconRecycle } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Innovations',
  description:
    'Innovation at Geomysore — pilot plant metallurgy, tailing bricks, tree translocation and waste-to-material processing.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Innovations | Geomysore',
    description:
      'Innovation at Geomysore — pilot plant metallurgy, tailing bricks, tree translocation and waste-to-material processing.',
  },
};

const innovations = [
  {
    title: 'Pilot Plant',
    icon: <IconFactory />,
    text: 'A state-of-the-art pilot plant bridges exploration and full-scale production, allowing the team to test, refine and optimise gold extraction processes before they are scaled.',
  },
  {
    title: 'Tailing Bricks',
    icon: <IconRecycle />,
    text: 'Tailings — usually a liability — are converted into construction bricks, cutting the need for virgin materials and giving mine waste a productive second life.',
  },
  {
    title: 'Tree Translocation',
    icon: <IconLeaf />,
    text: 'Specialised crane-based translocation moves mature trees out of the mining footprint intact, instead of felling and replanting saplings.',
  },
  {
    title: 'Waste-to-Material Processing',
    icon: <IconBulb />,
    text: 'Overburden and waste rock are sorted and processed into aggregates and M-Sand, feeding regional construction and infrastructure demand.',
  },
];

export default function InnovationsPage() {
  return (
    <>
      <PageHero image={STOCK.plant}
        eyebrow="Sustainability"
        title="Innovations"
        lead="Practical innovation — tested at pilot scale, proven in the field and applied across mining, processing and rehabilitation."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Test, Refine, Scale"
            title="Innovation you can hold in your hand"
            lead="From bricks made of tailings to trees moved whole, our innovations are tangible — and already working."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {innovations.map((innovation) => (
              <Reveal key={innovation.title}>
                <ContentCard title={innovation.title} icon={innovation.icon}>
                  {innovation.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
