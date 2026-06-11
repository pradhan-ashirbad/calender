import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Background History',
  description:
    'The journey of the Jonnagiri Gold Project — from regional reconnaissance in the 1990s to a granted Mining Lease and the start of gold production.',
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Background History | Geomysore',
    description:
      'The journey of the Jonnagiri Gold Project — from regional reconnaissance in the 1990s to a granted Mining Lease and the start of gold production.',
  },
};

const milestones = [
  {
    year: '1994',
    title: 'Geomysore is born',
    text: 'Incorporated by experienced Australian promoters — among the very first private mineral exploration companies in India.',
  },
  {
    year: '1990s–2000s',
    title: 'India-wide exploration',
    text: 'Reconnaissance Permit applications covering 18,490 sq.km; systematic exploration across the Kolar, Ramagiri, Shimoga, Chitradurga, Nellore and Veligallu schist belts of southern India and the Mahakoshal, Sakoli, Kotri and Pathalgaon belts of central India.',
  },
  {
    year: '2010s',
    title: 'Jonnagiri takes shape',
    text: 'Detailed drilling delineates the Jonnagiri deposit in Kurnool District, Andhra Pradesh. A Mining Lease over 597.82 ha is granted (valid to 2063) and an NI 43-101 compliant feasibility study is completed.',
  },
  {
    year: '2023–2025',
    title: 'From permits to plant',
    text: 'Environmental Clearance, Consent for Establishment and Consent to Operate secured; over ₹400 crore invested in building the open-pit mine and integrated 0.3 MTPA processing facility.',
  },
  {
    year: '2025 onwards',
    title: "India's gold renaissance begins",
    text: 'Pilot scale production commences ahead of full-scale commercial production — the first private-sector gold mine with an integrated processing facility in India in 70 years.',
  },
];

export default function BackgroundHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Jonnagiri Project"
        title="Background History"
        lead="Three decades of patient, science-led exploration culminating in one of India's most significant gold developments."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <Reveal className="prose-body">
            <p>
              The Jonnagiri story begins with Geomysore&rsquo;s founding in 1994 at the very dawn of private mineral
              exploration in India. Regional reconnaissance across the Archaean–Proterozoic gold belts of southern
              India progressively narrowed to the Jonnagiri prospect in Kurnool District, where detailed drilling
              outlined a gold system distributed across four mineralised blocks.
            </p>
            <p>
              A granted Mining Lease, an NI 43-101 compliant feasibility study and the full suite of statutory
              clearances followed — transforming a regional exploration target into a construction-ready gold project
              with an integrated processing facility.
            </p>
          </Reveal>
          <ol className="mt-12 space-y-0 border-l-2 border-line">
            {milestones.map((milestone) => (
              <li key={milestone.year}>
                <Reveal className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                  <p className="font-mono text-sm text-gold">{milestone.year}</p>
                  <h2 className="mt-1 font-display text-xl text-ink">{milestone.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{milestone.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
