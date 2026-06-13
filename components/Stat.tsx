import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';

export type StatItem = {
  value: string;
  unit?: string;
  label: string;
};

export function StatStrip({ stats, label }: { stats: StatItem[]; label: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-sidebar to-ink" aria-label={label}>
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="lg:px-8 lg:first:pl-0">
            <p className="font-mono text-3xl font-medium sm:text-4xl">
              <span className="text-gradient-gold">
                <StatCounter value={stat.value} />
              </span>
              {stat.unit && <span className="ml-1.5 text-base text-gold-soft sm:text-lg">{stat.unit}</span>}
            </p>
            <p className="mt-2 text-sm text-stone-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

export function StatGrid({ stats, tone = 'accent' }: { stats: StatItem[]; tone?: 'accent' | 'gold' }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Reveal key={stat.label}>
          <div className="card card-hover group">
            <span className="card-accent-bar group-hover:scale-x-100" aria-hidden="true" />
            <p className={`font-mono text-3xl font-medium sm:text-4xl ${tone === 'gold' ? 'text-gradient-gold' : 'text-accent'}`}>
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
