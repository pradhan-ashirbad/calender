import Image from 'next/image';
import Contours from '@/components/Contours';

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, lead, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink via-sidebar to-accent-dark">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-accent-dark/70" aria-hidden="true" />
        </>
      )}
      <Contours className="absolute inset-0 h-full w-full text-gold/15" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft/30 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-200/90">{lead}</p>}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
