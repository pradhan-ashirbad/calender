import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Recycle & Rebuild',
  description:
    'Recycle and rebuild at Geomysore — re-using drilling roads, recycling waste streams and rebuilding the land with reclamation integrated early into the mining lifecycle.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Recycle & Rebuild | Geomysore',
    description:
      'Recycle and rebuild at Geomysore — re-using drilling roads, recycling waste streams and rebuilding the land.',
  },
};

const phases = [
  {
    label: 'Recycle',
    title: 'Every stream gets a second life',
    text: 'Overburden becomes aggregates and M-Sand. Tailings become bricks. Old drilling roads become permanent access. Recycling is not a programme at Jonnagiri — it is how the mine works.',
  },
  {
    label: 'Rebuild',
    title: 'Reclamation starts on day one',
    text: 'Rebuilding and rejuvenating the land is integrated early into the mining lifecycle. Progressive reclamation, plantation and translocated trees ensure long-term ecological balance and support for post-mining land use.',
  },
];

export default function RecycleRebuildPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Recycle & Rebuild"
        lead="The final steps of our four-step framework — closing the loop on materials and returning the land better than mining found it."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Closing the Loop"
            title="A mine that plans its own legacy"
            lead="Most mines treat closure as the end. We treat it as a design input from the very beginning."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {phases.map((phase) => (
              <Reveal key={phase.label}>
                <article className="h-full rounded-lg border bg-white p-8 shadow-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{phase.label}</p>
                  <h2 className="mt-3 font-display text-2xl text-ink">{phase.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{phase.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
