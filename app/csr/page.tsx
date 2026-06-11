import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconGraduationCap } from '@/components/icons';
import { IMG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'CSR',
  description:
    "Geomysore's CSR initiatives focus on environmental conservation, community development and ethical mining practices — education, health, plantation, water supply, infrastructure and skill development.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'CSR | Geomysore',
    description:
      "Geomysore's CSR initiatives — education, health, plantation, water supply, infrastructure and skill development for the communities around Jonnagiri.",
  },
};

type Pillar = {
  title: string;
  image?: { src: string; alt: string };
  intro: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    title: 'Education',
    image: { src: IMG.csrEducation, alt: 'School children supported by Geomysore education initiatives' },
    intro: 'Education plays a crucial role in development and progress. Our initiatives include:',
    points: [
      'Transportation for students to/from schools within villages',
      'Free drinking water to schools',
      '~30 school teachers, aides and helpers employed across 7 schools',
      'Free computer training centres for school children',
      'Infrastructure support: computers, compound walls, dining sheds, books and sports equipment',
      'Sports competitions and cricket matches organised in schools',
    ],
  },
  {
    title: 'Health',
    image: { src: IMG.csrHealth, alt: 'A blood donation camp organised by Geomysore' },
    intro: 'Since the very beginning, Geomysore has assisted with healthcare for local communities:',
    points: [
      'Eye camps and health check-up camps (350 farmers eye check-up, 150 underwent surgery)',
      'Free drinking water for the local hospital',
      'Back-up battery power unit installed at the hospital for emergency night operations',
      'Local vet employed to assist with livestock insemination and medical needs',
    ],
  },
  {
    title: 'Plantation',
    image: { src: IMG.csrPlantation, alt: 'Plantation activity around the Jonnagiri lease area' },
    intro:
      'Geomysore has been actively involved in plantation activities in and around the lease area, including plantation along village roads and integration with the tree translocation sustainability program.',
    points: [],
  },
  {
    title: 'Water Supply',
    image: { src: IMG.csrWater, alt: 'Drinking water supply infrastructure provided to surrounding villages' },
    intro: 'Intensive efforts have been made to provide water to surrounding villages, schools and hospitals:',
    points: [
      '40 bore wells drilled, 10 yielding water with pumps installed at Jonnagiri and Pagadrayi',
      'Continuous drinking water supply to all 3 surrounding villages via mineral water stalls',
      '1 km water pipeline installed connecting Pagadrayi village to supply line',
      'Tanker supply during peak summer',
    ],
  },
  {
    title: 'Infrastructure & Sanitation',
    image: { src: IMG.csrVillage, alt: 'Village infrastructure maintained with Geomysore support' },
    intro: 'Permanent sanitary staff deployed in surrounding villages and schools. Activities include:',
    points: [
      'Maintaining local roads and drainage systems',
      'Village cleaning activities',
      'Road construction and maintenance',
      'Cultural activities: cricket tournaments, bull race programs',
    ],
  },
  {
    title: 'Skill Development',
    intro: 'Skill development to empower the local community:',
    points: [
      'Rural youth trained in Green Belt Development, Modern Agricultural Practices and Soil Rejuvenation',
      'Spoken English classes and skill development programs for local unemployed youth',
      'Free computer training centres for unemployed youth',
      'Training in drill core handling, resistivity surveys, and geochemical sample collection',
    ],
  },
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        eyebrow="Giving Back"
        title="Corporate Social Responsibility"
        lead="At Geomysore Services India Pvt Ltd, we believe in responsible and sustainable business practices that contribute to the well-being of communities and the environment. Our CSR initiatives focus on environmental conservation, community development, and ethical mining practices to create a positive and lasting impact."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Pillars" title="Six ways we show up for our communities" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <article className="h-full overflow-hidden rounded-lg border bg-white shadow-sm">
                  {pillar.image ? (
                    <div className="relative aspect-video">
                      <Image
                        src={pillar.image.src}
                        alt={pillar.image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-sidebar text-accent-light">
                      <IconGraduationCap className="h-16 w-16" />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="font-display text-2xl text-ink">{pillar.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.intro}</p>
                    {pillar.points.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                        {pillar.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
