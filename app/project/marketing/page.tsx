import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Marketing',
  description: 'Marketing at Geomysore — this section is being developed.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Marketing | Geomysore', description: 'Marketing at Geomysore — this section is being developed.' },
};

export default function MarketingPage() {
  return (
    <>
      <PageHero eyebrow="Jonnagiri Project" title="Marketing" />
      <ComingSoon />
    </>
  );
}
