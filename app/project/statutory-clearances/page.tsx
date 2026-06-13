import type { Metadata } from 'next';
import { STOCK } from '@/lib/site';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { IconDroplet, IconFileText, IconLeaf, IconShield } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Statutory Clearances',
  description:
    'The Jonnagiri Gold Project holds all major government approvals required for full-scale mining and processing — Mining Lease, Environmental Clearance, CFE/CTO and water allocation.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Statutory Clearances | Geomysore',
    description:
      'The Jonnagiri Gold Project holds all major government approvals required for full-scale mining and processing.',
  },
};

const clearances = [
  {
    icon: <IconFileText />,
    title: 'Mining Lease (ML)',
    text: 'Mining Lease granted over 597.82 ha in favour of Geomysore Services (India) Pvt Ltd — approved by the Government of India and valid until 2063.',
  },
  {
    icon: <IconLeaf />,
    title: 'Environmental Clearance (EC)',
    text: 'Environmental Clearance for mining operations, with the EC for the gold ore processing plant granted by the MoEF&CC Expert Appraisal Committee (Non-Coal Mining Sector) in 2025 following public hearing.',
  },
  {
    icon: <IconShield />,
    title: 'Consent for Establishment & Consent to Operate',
    text: 'CFE and CTO issued by the Andhra Pradesh Pollution Control Board, permitting 0.4 MTPA mining and 0.3 MTPA ore processing operations.',
  },
  {
    icon: <IconDroplet />,
    title: 'Water Allocation',
    text: "Approval for water withdrawal from a nearby canal secures the project's process-water requirements without burdening community sources.",
  },
];

export default function StatutoryClearancesPage() {
  return (
    <>
      <PageHero image={STOCK.plant}
        eyebrow="Jonnagiri Project"
        title="Statutory Clearances"
        lead="Jonnagiri holds all major government approvals required for full-scale mining and processing."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Compliance"
            title="Fully permitted, ready to operate"
            lead="Each approval below has been secured through the prescribed statutory process, including public hearing where required."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {clearances.map((clearance) => (
              <Reveal key={clearance.title}>
                <article className="flex h-full gap-5 rounded-2xl border bg-white p-6 shadow-md">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {clearance.icon}
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-ink">{clearance.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{clearance.text}</p>
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
