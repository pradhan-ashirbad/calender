import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';

export type StatItem = {
  value: string;
  unit?: string;
  label: string;
};

export function StatStrip({ stats, label }: { stats: StatItem[]; label: string }) {
  return (
    <section className="bg-ink" aria-label={label}>
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label}>
            <p className="font-mono text-2xl text-white sm:text-3xl">
              <StatCounter value={stat.value} />
              {stat.unit && <span className="ml-1.5 text-base text-accent-light sm:text-lg">{stat.unit}</span>}
            </p>
            <p className="mt-2 text-sm text-stone-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StatGrid({ stats, tone = 'accent' }: { stats: StatItem[]; tone?: 'accent' | 'gold' }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Reveal key={stat.label}>
          <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
            <p className={`font-mono text-2xl sm:text-3xl ${tone === 'gold' ? 'text-gold' : 'text-accent'}`}>
              <StatCounter value={stat.value} />
              {stat.unit && <span className="ml-1.5 text-base">{stat.unit}</span>}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
