import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IMG, STOCK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sustainability Framework',
  description:
    "Geomysore's four-step sustainable framework: OB/waste rock management, tailing management, drilling roads re-utilisation and rebuilding the land — plus our tree translocation program.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Sustainability Framework | Geomysore',
    description:
      "Geomysore's four-step sustainable framework — OB/waste rock management, tailing management, drilling roads re-utilisation and rebuilding the land.",
  },
};

const steps = [
  {
    title: 'OB/Waste Rock Management',
    text: 'We prioritise responsible handling of overburden (OB) and waste rock through systematic sorting and utilisation. These materials are no longer considered waste but are repurposed into Aggregates and M-Sand for construction and infrastructure projects, reducing environmental footprint and supporting local development.',
  },
  {
    title: 'Tailing Management',
    text: 'Tailings, often regarded as unusable, are now being transformed. Through innovative processing, we convert tailings into Tailing Bricks, promoting circular economy principles and reducing the need for virgin materials in construction.',
  },
  {
    title: 'Drilling Roads Re-Utilisation',
    text: 'Old drilling roads are re-evaluated and repurposed, minimising land degradation and preserving natural topography. This approach reduces demand for new roads, saving energy and resources.',
  },
  {
    title: 'Rebuild',
    text: 'Our final step focuses on rebuilding and rejuvenating the land. Reclamation activities are integrated early into the mining lifecycle, ensuring long-term ecological balance and support for post-mining land use.',
  },
];

const treeSteps = [
  {
    image: IMG.treeStep1,
    alt: 'A tree being lifted from its original location by crane',
    text: 'Using specialised equipment like cranes, the tree is gently lifted from its original location. Great care is taken to protect the roots and minimise stress during transportation.',
  },
  {
    image: IMG.treeStep2,
    alt: 'A deep hole being prepared at the new planting location',
    text: "A large, deep hole is carefully dug at the new location, ensuring it matches the size and needs of the tree's root system. Preparing the site properly is essential for the tree's successful re-establishment.",
  },
  {
    image: IMG.treeStep3,
    alt: 'The tree placed and stabilised in its new location',
    text: 'The tree is carefully placed into the prepared hole. Once positioned, the roots are covered and the tree is stabilised to help it adapt and thrive in its new environment.',
  },
];

export default function SustainabilityOverviewPage() {
  return (
    <>
      <PageHero image={STOCK.field}
        eyebrow="Sustainability"
        title="Our Sustainable Framework"
        lead="At Geomysore, sustainability is at the core of our mining operations. We are committed to minimising environmental impact while enhancing resource efficiency and community value. Our sustainable framework follows a four-step approach."
      />

      <section className="py-16 sm:py-20" aria-labelledby="four-steps">
        <div className="container-x">
          <SectionHeading eyebrow="The Framework" title="Four steps, one circular system" />
          <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="h-full">
                <Reveal className="h-full">
                  <article className="h-full rounded-2xl border bg-white p-6 shadow-md">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent font-mono text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    <h2 className="mt-4 font-display text-lg leading-snug text-ink">{step.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="tree-program">
        <div className="container-x">
          <SectionHeading
            eyebrow="Green Initiative"
            title="Tree Translocation Program"
            lead="Rather than felling mature trees, we move them — carefully lifting, transporting and re-establishing each tree in a new location."
          />
          <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {treeSteps.map((step, index) => (
              <li key={step.image}>
                <Reveal className="h-full">
                  <article className="h-full overflow-hidden rounded-2xl border bg-canvas shadow-md">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Step {index + 1}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
