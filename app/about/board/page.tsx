import type { Metadata } from 'next';
import { STOCK } from '@/lib/site';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'The Geomysore board of directors — blending international mining investment experience with hands-on Indian operating expertise.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Board of Directors | Geomysore',
    description:
      'The Geomysore board of directors — blending international mining investment experience with hands-on Indian operating expertise.',
  },
};

const board = [
  {
    initials: 'NL',
    name: 'Naveen Chandra Lal',
    role: 'Chairman',
    bio: 'Chairs the board, guiding corporate strategy and governance as the company transitions from explorer to gold producer.',
  },
  {
    initials: 'HP',
    name: 'Dr. Hanuma Prasad Modali',
    role: 'Managing Director',
    bio: 'A career gold-exploration geologist who began with the Geological Survey of India in 1994 and joined the Australian Indian Resources group in 2001. Has led exploration and the development of Jonnagiri.',
  },
  {
    initials: 'MB',
    name: 'Manas Ranjan Biswal',
    role: 'Director — Operations',
    bio: 'Leads mining and processing operations, bringing deep experience in project execution and large-scale earthmoving operations.',
  },
  {
    initials: 'BP',
    name: 'Balasubramanian Prabhakaran',
    role: 'Director',
    bio: "Managing Director of Thriveni Earthmovers & Infra, Geomysore's mine development partner, with decades of experience operating some of India's largest mines.",
  },
  {
    initials: 'JD',
    name: 'Jade Gemma Devenish',
    role: 'Director',
    bio: "Represents Australian Indian Resources, Geomysore's principal shareholder, continuing a long family legacy of championing Indian mineral exploration.",
  },
  {
    initials: 'SJ',
    name: 'Siddharth Jain',
    role: 'Director',
    bio: 'Brings corporate, financial and strategic expertise to the board as Geomysore scales into commercial gold production.',
  },
];

export default function BoardPage() {
  return (
    <>
      <PageHero image={STOCK.landscape}
        eyebrow="Governance"
        title="Board of Directors"
        lead="A board that blends international mining investment experience with hands-on Indian operating expertise."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((person) => (
            <Reveal key={person.name}>
              <article className="h-full rounded-2xl border bg-white p-6 shadow-md">
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
      </section>
    </>
  );
}
