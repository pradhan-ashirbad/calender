import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconDroplet, IconLeaf, IconRecycle, IconSun } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Net Zero',
  description:
    "Geomysore's pathway towards net zero — circular materials, early land reclamation, water stewardship and energy-efficient operations.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Net Zero | Geomysore',
    description:
      "Geomysore's pathway towards net zero — circular materials, early land reclamation, water stewardship and energy-efficient operations.",
  },
};

const pillars = [
  {
    title: 'Circular Materials',
    icon: <IconRecycle />,
    text: 'Repurposing overburden, waste rock and tailings into construction materials avoids the emissions of quarrying and manufacturing virgin equivalents.',
  },
  {
    title: 'Land & Carbon',
    icon: <IconLeaf />,
    text: 'Plantation, tree translocation and early reclamation keep green cover growing throughout the mining lifecycle, not just after closure.',
  },
  {
    title: 'Water Stewardship',
    icon: <IconDroplet />,
    text: 'Canal-sourced process water and careful water management reduce pressure on groundwater and the energy spent pumping it.',
  },
  {
    title: 'Efficient Operations',
    icon: <IconSun />,
    text: 'Compact mine-to-plant logistics, re-used drilling roads and simple metallurgy keep energy intensity per ounce low by design.',
  },
];

export default function NetZeroPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Net Zero"
        lead="Minimising emissions is built into how Jonnagiri is designed and operated — from circular materials to energy-efficient processing."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Pathway"
            title="Designed for a lower-carbon mine"
            lead="Rather than offsetting impact after the fact, we reduce it at the source across four operational pillars."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <ContentCard title={pillar.title} icon={pillar.icon}>
                  {pillar.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
