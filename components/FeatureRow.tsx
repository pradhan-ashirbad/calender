import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { IconArrowRight } from '@/components/icons';

type Stat = { value: string; label: string };

type Props = {
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  href?: string;
  ctaLabel?: string;
  badge?: Stat;
  points?: string[];
};

export default function FeatureRow({
  kicker,
  title,
  image,
  imageAlt,
  children,
  reverse = false,
  href,
  ctaLabel,
  badge,
  points,
}: Props) {
  return (
    <div className="container-x grid items-center gap-12 lg:grid-cols-2">
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-sidebar shadow-soft">
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" aria-hidden="true" />
          </div>
          {badge && (
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-line bg-white px-6 py-4 shadow-lift sm:left-8">
              <p className="font-mono text-3xl font-medium text-gradient-gold">{badge.value}</p>
              <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">{badge.label}</p>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal className={reverse ? 'lg:order-1' : ''}>
        <div className={badge ? 'mt-8 lg:mt-0' : ''}>
          <p className="eyebrow text-gold">{kicker}</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] text-ink sm:text-4xl">{title}</h2>
          <div className="prose-body mt-4">{children}</div>
          {points && (
            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.1" />
                    <path d="m6 10.5 2.5 2.5 5-5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {href && (
            <Link href={href} className="link-arrow mt-7">
              {ctaLabel ?? 'Learn more'}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </Reveal>
    </div>
  );
}
