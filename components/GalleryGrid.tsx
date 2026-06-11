'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight, IconClose } from '@/components/icons';

export type GalleryItem = { src: string; alt: string };

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((current) => (current === null ? current : (current + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border bg-sidebar/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`View larger: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].alt}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full p-2 text-white transition-colors duration-150 hover:bg-white/10"
            aria-label="Close"
          >
            <IconClose className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors duration-150 hover:bg-white/10 sm:left-6"
            aria-label="Previous image"
          >
            <IconChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors duration-150 hover:bg-white/10 sm:right-6"
            aria-label="Next image"
          >
            <IconChevronRight className="h-8 w-8" />
          </button>
          <div className="relative h-[72vh] w-full max-w-5xl">
            <Image src={items[active].src} alt={items[active].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="mt-4 max-w-2xl text-center text-sm text-stone-300">
            {items[active].alt}
            <span className="ml-3 font-mono text-xs text-stone-500">
              {active + 1} / {items.length}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
