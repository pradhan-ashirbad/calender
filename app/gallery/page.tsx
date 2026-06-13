import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photographs from the Jonnagiri Gold Project — operations, sustainability programmes and community work.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Gallery | Geomysore',
    description: 'Photographs from the Jonnagiri Gold Project — operations, sustainability programmes and community work.',
  },
};

const items = [
  { src: IMG.banner1, alt: 'The Jonnagiri Gold Project site, Kurnool District' },
  { src: IMG.banner2, alt: 'Open-pit mine development at Jonnagiri' },
  { src: IMG.banner3, alt: 'Mining operations in the East Block' },
  { src: IMG.banner4, alt: 'The integrated processing facility' },
  { src: IMG.heroTeam, alt: 'The Geomysore team on site' },
  { src: IMG.treeStep1, alt: 'Tree translocation — lifting a mature tree by crane' },
  { src: IMG.treeStep2, alt: 'Tree translocation — preparing the new planting site' },
  { src: IMG.treeStep3, alt: 'Tree translocation — the tree re-established in its new location' },
  { src: IMG.csrHealth, alt: 'A community blood donation camp' },
  { src: IMG.csrWater, alt: 'Drinking water supply for surrounding villages' },
  { src: IMG.csrVillage, alt: 'Village infrastructure supported by Geomysore' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero image={STOCK.minePit}
        eyebrow="In Pictures"
        title="Gallery"
        lead="Operations, sustainability programmes and community work at the Jonnagiri Gold Project."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <GalleryGrid items={items} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
