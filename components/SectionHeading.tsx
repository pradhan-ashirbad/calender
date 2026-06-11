import Reveal from '@/components/Reveal';

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, lead, center = false, dark = false }: Props) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p
          className={`font-mono text-xs uppercase tracking-[0.25em] sm:text-sm ${
            dark ? 'text-accent-light' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lead && (
        <p className={`mt-4 leading-relaxed ${dark ? 'text-slate-300' : 'text-muted'}`}>{lead}</p>
      )}
    </Reveal>
  );
}
