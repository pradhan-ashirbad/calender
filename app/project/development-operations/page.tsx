import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Development & Operations',
  description: 'Development and operations at Geomysore — this section is being developed.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Development & Operations | Geomysore',
    description: 'Development and operations at Geomysore — this section is being developed.',
  },
};

export default function DevelopmentOperationsPage() {
  return (
    <>
      <PageHero eyebrow="Jonnagiri Project" title="Development & Operations" />
      <ComingSoon />
    </>
  );
}
