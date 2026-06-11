import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { IconArrowRight } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Site Team',
  description: 'The Geomysore team on the ground — day-to-day leadership across geology, operations and corporate functions.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Site Team | Geomysore',
    description: 'The Geomysore team on the ground — day-to-day leadership across geology, operations and corporate functions.',
  },
};

const team = [
  {
    initials: 'HP',
    name: 'Dr. Hanuma Prasad',
    role: 'Managing Director',
    bio: 'Overall leadership of exploration, development and production strategy.',
  },
  {
    initials: 'MB',
    name: 'Manas Biswal',
    role: 'Director of Operations',
    bio: 'Responsible for safe, efficient mining and processing operations at Jonnagiri.',
  },
  {
    initials: 'VS',
    name: 'Vedanandareddy S',
    role: 'Geology Manager',
    bio: 'Leads resource geology, grade control and the ongoing exploration programmes that extend mine life.',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Site Team"
        lead="Day-to-day leadership across geology, operations and corporate functions at the Jonnagiri Gold Project."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <Reveal key={person.name}>
                <article className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sidebar font-display text-lg text-white"
                    aria-hidden="true"
                  >
                    {person.initials}
                  </span>
                  <h2 className="mt-4 font-display text-xl text-ink">{person.name}</h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="rounded-lg border border-dashed bg-white p-6 text-sm text-muted">
              Full team profiles are coming soon. In the meantime, learn more about the{' '}
              <Link href="/about/board" className="font-medium text-accent hover:text-accent-dark">
                Board of Directors
              </Link>{' '}
              or{' '}
              <Link href="/careers" className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-dark">
                join the team <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
