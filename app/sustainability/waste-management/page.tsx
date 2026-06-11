import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Waste Management',
  description:
    'Waste management at Geomysore — overburden and waste rock repurposed into aggregates and M-Sand, and tailings converted into tailing bricks.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Waste Management | Geomysore',
    description:
      'Waste management at Geomysore — overburden and waste rock repurposed into aggregates and M-Sand, and tailings converted into tailing bricks.',
  },
};

const streams = [
  {
    name: 'Overburden & Waste Rock',
    becomes: 'Aggregates & M-Sand',
    text: 'Systematic sorting and utilisation turns overburden and waste rock into construction materials for infrastructure projects — reducing environmental footprint and supporting local development.',
  },
  {
    name: 'Tailings',
    becomes: 'Tailing Bricks',
    text: 'Through innovative processing, tailings are converted into tailing bricks, promoting circular economy principles and reducing the need for virgin materials in construction.',
  },
  {
    name: 'Drilling Roads',
    becomes: 'Re-utilised Access',
    text: 'Old drilling roads are re-evaluated and repurposed, minimising land degradation, preserving natural topography and reducing the demand for new road construction.',
  },
];

export default function WasteManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Waste Management"
        lead="At Jonnagiri, 'waste' is a resource waiting for its second use. Every major waste stream has a productive destination."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Circular Economy"
            title="From waste stream to building material"
            lead="Each stream is systematically sorted, processed and redirected into construction and infrastructure."
          />
          <div className="mt-10 space-y-5">
            {streams.map((stream) => (
              <Reveal key={stream.name}>
                <article className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
                  <h2 className="font-display text-xl text-ink">{stream.name}</h2>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent" aria-hidden="true">
                    →
                  </span>
                  <p className="font-mono text-sm font-medium text-gold">{stream.becomes}</p>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-3">{stream.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
