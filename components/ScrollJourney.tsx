'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Contours from '@/components/Contours';
import { IconArrowRight } from '@/components/icons';

export type JourneyStep = {
  n: string;
  title: string;
  text: string;
  image: string;
  stats?: { v: string; u?: string; l: string }[];
  cta?: { href: string; label: string };
};

export default function ScrollJourney({ steps, intro }: { steps: JourneyStep[]; intro: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const last = steps.length - 1;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      return;
    }
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled]);

  const activeIndex = Math.round(progress * last);

  const Panel = ({ step }: { step: JourneyStep }) => (
    <article
      className={
        enabled
          ? 'relative flex h-screen w-screen shrink-0 items-center overflow-hidden'
          : 'relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-3xl sm:aspect-[16/10]'
      }
    >
      <Image src={step.image} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" aria-hidden="true" />
      <Contours className="absolute inset-0 h-full w-full text-gold/10" />
      <div className="container-x relative z-10 w-full pb-12 lg:pb-0">
        <div className="max-w-xl">
          <span className="font-mono text-6xl font-medium leading-none text-gradient-gold lg:text-8xl">{step.n}</span>
          <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl lg:text-5xl">{step.title}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-200/90">{step.text}</p>
          {step.stats && (
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
              {step.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-mono text-2xl font-medium text-gold-soft">
                    {s.v}
                    {s.u && <span className="ml-0.5 text-sm">{s.u}</span>}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-stone-400">{s.l}</p>
                </div>
              ))}
            </div>
          )}
          {step.cta && (
            <Link href={step.cta.href} className="btn-gold mt-8">
              {step.cta.label}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section
      ref={outerRef}
      aria-label="From rock to gold — our process"
      className="relative bg-ink"
      style={enabled ? { height: `${steps.length * 100}vh` } : undefined}
    >
      <div className={enabled ? 'sticky top-0 h-screen overflow-hidden' : ''}>
        {/* Section intro overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 pt-24 lg:pt-28">
          <div className="container-x">
            <p className="eyebrow text-gold-soft">{intro}</p>
          </div>
        </div>

        <div
          className={enabled ? 'flex h-full flex-nowrap will-change-transform' : 'space-y-6 px-4 py-16 sm:px-6 lg:px-8'}
          style={enabled ? { transform: `translate3d(${-progress * last * 100}vw, 0, 0)` } : undefined}
        >
          {steps.map((step) => (
            <Panel key={step.n} step={step} />
          ))}
        </div>

        {/* Progress UI (desktop pinned only) */}
        {enabled && (
          <div className="absolute inset-x-0 bottom-0 z-20">
            <div className="container-x flex items-center gap-4 pb-6">
              <span className="font-mono text-xs text-stone-400">
                {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 bg-white/15">
                <div
                  className="h-full bg-gradient-to-r from-gold-bright to-gold transition-[width] duration-150 ease-out"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
