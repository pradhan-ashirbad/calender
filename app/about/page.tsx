import type { Metadata } from 'next';
import Image from 'next/image';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconFileText, IconShield, IconUsers } from '@/components/icons';
import { IMG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Geomysore Services India Pvt Ltd — exploring and developing the precious and base metal resources of India since 1994. More than 35,000 sq.km explored and several gold discoveries.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'About Us | Geomysore',
    description:
      'Geomysore Services India Pvt Ltd — exploring and developing the precious and base metal resources of India since 1994.',
  },
};

const aboutImages = [
  { src: IMG.banner1, alt: 'Operations at the Jonnagiri Gold Project' },
  { src: IMG.banner2, alt: 'Open-pit mine development at Jonnagiri' },
  { src: IMG.banner3, alt: 'Processing facilities under construction' },
  { src: IMG.banner4, alt: 'The Jonnagiri project landscape in Kurnool District' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1994"
        title="About Geomysore"
        lead="A company focused on exploration and development of precious and base metal resources of India."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal className="prose-body">
            <p>
              Geomysore Services India Pvt Ltd is a company focused on exploration and development of precious and
              base metal resources of India. Established in 1994 by experienced Australian promoters, Geomysore has
              explored more than 35,000 sq.km across India and made several discoveries of gold and precious metals.
            </p>
            <p>
              Blocks explored by Geomysore and its associated companies were spread over Andhra Pradesh, Karnataka,
              Madhya Pradesh, Chhattisgarh, Rajasthan, Maharashtra, Arunachal Pradesh and Nagaland. Exploration
              activities were mainly in Archaean–Proterozoic belts — Kolar, Hutti, Ramagiri, Sakoli, Mahakoshal and
              Betul Belts.
            </p>
            <p>
              Geomysore has obtained a Mining Lease over the Jonnagiri Project, currently being developed into an
              integrated open-pit mine and processing facility. Once commissioned, Jonnagiri would be the first large
              greenfield gold project with integrated mining and processing to be developed in Independent India.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {aboutImages.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="people-title">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our People"
            title="The people behind Geomysore"
            lead="Geologists, mining engineers and business leaders with international experience, backed by committed long-term shareholders."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <ContentCard title="Site Team" href="/about/team" icon={<IconUsers />}>
                The team on the ground at Jonnagiri — leading geology, operations and corporate functions day to day.
              </ContentCard>
            </Reveal>
            <Reveal className="md:[transition-delay:100ms]">
              <ContentCard title="Board of Directors" href="/about/board" icon={<IconShield />}>
                A board blending international mining investment experience with hands-on Indian operating expertise.
              </ContentCard>
            </Reveal>
            <Reveal className="md:[transition-delay:200ms]">
              <ContentCard title="Share Holders" href="/about/shareholders" icon={<IconFileText />}>
                Committed long-term shareholders supporting exploration and development programmes across India.
              </ContentCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
