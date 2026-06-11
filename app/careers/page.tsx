import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ResumeForm from '@/components/ResumeForm';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Join Geomysore — we are actively hiring for the Jonnagiri Gold Project across mechanical and operations roles, from graduate trainees to department heads.",
  openGraph: {
    siteName: 'Geomysore Services India Pvt Ltd',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif' }],
    title: 'Careers | Geomysore',
    description:
      'Join Geomysore — we are actively hiring for the Jonnagiri Gold Project across mechanical and operations roles.',
  },
};

type Job = {
  title: string;
  department: 'Mechanical' | 'Operations';
  experience: string;
  vacancies: number;
};

const jobs: Job[] = [
  { title: 'Head Mechanical', department: 'Mechanical', experience: '10+ yrs', vacancies: 1 },
  { title: 'GET - Mechanical', department: 'Mechanical', experience: '0–1 yr', vacancies: 3 },
  { title: 'Mechanical Senior Engineer', department: 'Mechanical', experience: '7+ yrs', vacancies: 2 },
  { title: 'Shift Mechanical Engineer', department: 'Mechanical', experience: '4+ yrs', vacancies: 4 },
  { title: 'Technician - Precise Works', department: 'Mechanical', experience: '10+ yrs', vacancies: 2 },
  { title: 'Sr Fitter', department: 'Mechanical', experience: '8+ yrs', vacancies: 4 },
  { title: 'Fitter', department: 'Mechanical', experience: '6+ yrs', vacancies: 3 },
  { title: 'Jr Fitter', department: 'Mechanical', experience: '3+ yrs', vacancies: 5 },
  { title: 'Sr Welder', department: 'Mechanical', experience: '8+ yrs', vacancies: 1 },
  { title: 'Welder', department: 'Mechanical', experience: '6+ yrs', vacancies: 4 },
  { title: 'Operator (Crushing, Screening & Conveying)', department: 'Operations', experience: '5+ yrs', vacancies: 7 },
  { title: 'Milling Section Operator', department: 'Operations', experience: '6+ yrs', vacancies: 4 },
  { title: 'CIL Operator', department: 'Operations', experience: '4+ yrs', vacancies: 4 },
  { title: 'Neutralisation Operator', department: 'Operations', experience: '4+ yrs', vacancies: 3 },
  { title: 'Elution Operator', department: 'Operations', experience: '5+ yrs', vacancies: 2 },
  { title: 'Smelting Operator', department: 'Operations', experience: '6+ yrs', vacancies: 2 },
  { title: 'Thickener Operator', department: 'Operations', experience: '4+ yrs', vacancies: 3 },
  { title: 'Filter Press Operator', department: 'Operations', experience: '5+ yrs', vacancies: 4 },
  { title: 'Junior Operator', department: 'Operations', experience: '2+ yrs', vacancies: 30 },
  { title: 'STP Operator', department: 'Operations', experience: '4+ yrs', vacancies: 2 },
  { title: 'Shift Incharge - Crushing & Grinding', department: 'Operations', experience: '8+ yrs', vacancies: 2 },
  { title: 'Shift Incharge - CIL & Elution', department: 'Operations', experience: '8+ yrs', vacancies: 2 },
  { title: 'Shift Incharge - Filtration & Tailings', department: 'Operations', experience: '8+ yrs', vacancies: 2 },
  { title: 'Head - C&S', department: 'Operations', experience: '15+ yrs', vacancies: 1 },
  { title: 'Head L&P', department: 'Operations', experience: '15+ yrs', vacancies: 1 },
  { title: 'Asst. Manager - Operations', department: 'Operations', experience: '12+ yrs', vacancies: 1 },
  { title: 'Process Engineer', department: 'Operations', experience: '3+ yrs', vacancies: 2 },
  { title: 'Shift Incharge', department: 'Operations', experience: '7+ yrs', vacancies: 8 },
  { title: 'Head Utilities', department: 'Operations', experience: '10+ yrs', vacancies: 1 },
  { title: 'Head Elution & Smelting', department: 'Operations', experience: '10+ yrs', vacancies: 1 },
  { title: 'Graduate Trainees', department: 'Operations', experience: '0–1 yr', vacancies: 20 },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="We Are Hiring"
        title="Join Geomysore"
        lead="We are actively hiring for our Jonnagiri Gold Project. If you are passionate about mining, processing, and building India's first greenfield integrated gold project, we'd love to hear from you."
      />

      <section className="py-16 sm:py-20" aria-labelledby="open-positions">
        <div className="container-x">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current openings"
            lead="All open positions close on 30-07-2025."
          />
          <Reveal className="mt-10">
            <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b bg-canvas font-mono text-xs uppercase tracking-wider text-muted">
                    <th scope="col" className="px-5 py-3.5 font-medium">#</th>
                    <th scope="col" className="px-5 py-3.5 font-medium">Job Title</th>
                    <th scope="col" className="px-5 py-3.5 font-medium">Department</th>
                    <th scope="col" className="px-5 py-3.5 font-medium">Experience</th>
                    <th scope="col" className="px-5 py-3.5 text-right font-medium">Vacancies</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={job.title} className="border-b last:border-0">
                      <td className="px-5 py-3.5 font-mono text-xs text-muted">{index + 1}</td>
                      <td className="px-5 py-3.5 font-medium text-ink">{job.title}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            job.department === 'Mechanical'
                              ? 'bg-gold/10 text-gold'
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {job.department}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-mono text-xs text-muted">{job.experience}</td>
                      <td className="px-5 py-3.5 text-right font-mono text-xs text-ink">{job.vacancies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t bg-white py-16 sm:py-20" aria-labelledby="resume-upload">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Open Application"
            title="Don't see a role that fits?"
            lead="Upload your resume and we'll get in touch when a suitable position opens."
          />
          <Reveal>
            <ResumeForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
