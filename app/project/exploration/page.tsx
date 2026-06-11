import type { Metadata } from 'next';
import ContentCard from '@/components/ContentCard';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { StatStrip } from '@/components/Stat';
import { IconCompass, IconDroplet, IconMountain } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Exploration',
  description:
    "Three decades of systematic gold exploration across India's most prospective greenstone and schist belts — guided by advanced geological, geochemical and geophysical science.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Exploration | Geomysore',
    description:
      "Three decades of systematic gold exploration across India's most prospective greenstone and schist belts.",
  },
};

const methods = [
  {
    icon: <IconMountain />,
    title: 'Geological Surveys',
    text: 'Detailed mapping of lithology, structure and alteration — building the geological framework that vectors towards mineralised systems.',
  },
  {
    icon: <IconDroplet />,
    title: 'Geochemical Sampling',
    text: 'Soil, stream-sediment and rock-chip geochemistry that traces pathfinder elements back to their golden source.',
  },
  {
    icon: <IconCompass />,
    title: 'Geophysical Surveys',
    text: 'Magnetic, electrical and gravity methods that image structure beneath cover — finding what the surface cannot show.',
  },
];

const southernBelts = ['Kolar', 'Ramagiri', 'Shimoga', 'Chitradurga', 'Jonnagiri', 'Nellore', 'Veligallu', 'Hutti'];
const centralBelts = ['Mahakoshal', 'Sakoli', 'Kotri', 'Pathalgaon', 'Betul'];

export default function ExplorationPage() {
  return (
    <>
      <PageHero
        eyebrow="Jonnagiri Project"
        title="Exploration"
        lead="Three decades of systematic gold exploration in the subcontinent's most prospective greenstone and schist belts — guided by advanced geological, geochemical and geophysical science."
      />

      <StatStrip
        label="Exploration tenement figures"
        stats={[
          { value: '18,490', unit: 'sq.km', label: 'Under 25 RP applications' },
          { value: '819.2', unit: 'sq.km', label: 'Across 39 PL applications' },
          { value: '33.4', unit: 'sq.km', label: 'Across 7 ML applications' },
          { value: '8', unit: 'states', label: 'Explored across India' },
        ]}
      />

      <section className="py-16 sm:py-20" aria-labelledby="methods">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Explore"
            title="Science-led discovery"
            lead="We identify potential gold-bearing deposits with precision and responsibility, integrating three complementary disciplines."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {methods.map((method) => (
              <Reveal key={method.title}>
                <ContentCard title={method.title} icon={method.icon}>
                  {method.text}
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="belts">
        <div className="container-x">
          <SectionHeading
            eyebrow="Where We Work"
            title="India's most prospective gold belts"
            lead="Geomysore and its associated companies have explored blocks across Andhra Pradesh, Karnataka, Madhya Pradesh, Chhattisgarh, Rajasthan, Maharashtra, Arunachal Pradesh and Nagaland — focused on Archaean–Proterozoic terranes."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border bg-canvas p-6">
                <h3 className="font-display text-xl text-ink">Southern India</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  The granite-greenstone heartland of Indian gold, including the legendary Kolar camp where granted
                  Prospecting Licences surround the historic Kolar Gold Field.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {southernBelts.map((belt) => (
                    <li
                      key={belt}
                      className={`rounded-full border px-3 py-1 font-mono text-xs ${
                        belt === 'Jonnagiri' ? 'border-gold bg-gold/10 text-gold' : 'bg-white text-muted'
                      }`}
                    >
                      {belt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-lg border bg-canvas p-6">
                <h3 className="font-display text-xl text-ink">Central India</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Proterozoic mobile belts with proven gold and base-metal endowment, systematically tested through
                  regional reconnaissance programmes.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {centralBelts.map((belt) => (
                    <li key={belt} className="rounded-full border bg-white px-3 py-1 font-mono text-xs text-muted">
                      {belt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="pipeline">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="From Permit to Production"
            title="A disciplined exploration pipeline"
            lead="Exploration succeeds through discipline: regional reconnaissance narrows to prospecting, prospecting to drilling, and drilling to mining — exactly the path that took Jonnagiri from a regional target to India's first private gold mine."
          />
          <Reveal className="mt-8">
            <ul className="space-y-4">
              <li className="rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">Reconnaissance Permits</strong> — 18,490 sq.km of ground
                  secured under 25 RP applications
                </p>
              </li>
              <li className="rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">Prospecting Licences</strong> — 39 PL applications over
                  819.2 sq.km, with key grants around the Kolar Gold Field
                </p>
              </li>
              <li className="rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">Mining Leases</strong> — 7 ML applications over 33.4
                  sq.km; the Jonnagiri ML granted and now in production
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
