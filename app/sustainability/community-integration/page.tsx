import type { Metadata } from 'next';
import { STOCK } from '@/lib/site';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconArrowRight, IconDroplet, IconGraduationCap, IconHeart, IconUsers } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Integration With Society',
  description:
    'Geomysore integrates deeply with its host communities — local employment, education support, water supply and healthcare around the Jonnagiri project.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Integration With Society | Geomysore',
    description:
      'Geomysore integrates deeply with its host communities — local employment, education support, water supply and healthcare around the Jonnagiri project.',
  },
};

const programmes = [
  {
    title: 'Local Employment',
    icon: <IconUsers />,
    text: 'School teachers, sanitary staff, a local vet and trained field assistants — the project employs from its host villages first, including training in drill core handling, resistivity surveys and geochemical sampling.',
  },
  {
    title: 'Education',
    icon: <IconGraduationCap />,
    text: 'Around 30 teachers, aides and helpers employed across 7 schools, free computer training centres, school transport and infrastructure support.',
  },
  {
    title: 'Water for Villages',
    icon: <IconDroplet />,
    text: 'Continuous drinking water to all 3 surrounding villages via mineral water stalls, bore wells with pumps, a 1 km pipeline to Pagadrayi village and tanker supply in peak summer.',
  },
  {
    title: 'Health & Culture',
    icon: <IconHeart />,
    text: 'Eye camps and health check-ups, hospital support, and community life — cricket tournaments, bull race programs and village festivals.',
  },
];

export default function CommunityIntegrationPage() {
  return (
    <>
      <PageHero image={STOCK.landscape}
        eyebrow="Sustainability"
        title="Integration With Society"
        lead="A mine can only succeed with its neighbours. Geomysore has been part of daily life in Jonnagiri, Erragudi and Pagadirayi since operations began."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Shared Value"
            title="Rooted in our host communities"
            lead="Employment, education, water and healthcare — delivered alongside the mine, not as an afterthought."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {programmes.map((programme) => (
              <Reveal key={programme.title}>
                <ContentCard title={programme.title} icon={programme.icon}>
                  {programme.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-muted">
              Explore the full breadth of our community work on the{' '}
              <Link
                href="/csr"
                className="inline-flex items-center gap-1 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
              >
                CSR page <IconArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
