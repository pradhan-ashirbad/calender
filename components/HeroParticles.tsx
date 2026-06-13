'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight gold-dust particle field for the hero — drifting luminous motes.
 * Canvas-based, capped particle count, pauses when the tab is hidden, and
 * does nothing under prefers-reduced-motion. No dependencies.
 */
export default function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.min(80, Math.round(w / 18));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.08),
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -6) {
          p.y = h + 6;
          p.x = Math.random() * w;
        }
        if (p.x < -6) p.x = w + 6;
        else if (p.x > w + 6) p.x = -6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 176, 84, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      seed();
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    raf = requestAnimationFrame(tick);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
