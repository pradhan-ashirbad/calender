import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IconShield, IconSun, IconUsers } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Share Holders',
  description:
    'Geomysore combines committed long-term shareholders with experienced operating partners across the mining value chain.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Share Holders | Geomysore',
    description:
      'Geomysore combines committed long-term shareholders with experienced operating partners across the mining value chain.',
  },
};

const shareholders = [
  {
    title: 'Australian Indian Resources',
    icon: <IconShield />,
    text: 'Perth-based Australian Indian Resources (AIR) holds the majority stake in Geomysore, bringing decades of international exploration and mine-development experience.',
  },
  {
    title: 'Sun Mining Corporation',
    icon: <IconSun />,
    text: "Sun Mining Corporation is a long-standing co-shareholder, supporting Geomysore's exploration and development programmes across India.",
  },
  {
    title: 'Deccan Gold Mines & Thriveni',
    icon: <IconUsers />,
    text: "Associate company Deccan Gold Mines Ltd and mining partner Thriveni Earthmovers & Infra strengthen the Jonnagiri project's funding, development and operations.",
  },
];

export default function ShareholdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Ownership & Partners"
        title="Share Holders"
        lead="International backing, Indian execution — committed long-term shareholders with experienced operating partners across the mining value chain."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {shareholders.map((item) => (
              <Reveal key={item.title}>
                <ContentCard title={item.title} icon={item.icon}>
                  {item.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="rounded-lg border border-dashed bg-white p-6 text-sm text-muted">
              Detailed shareholding information is coming soon. Check back for updates.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
