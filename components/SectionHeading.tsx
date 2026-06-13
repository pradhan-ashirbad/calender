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
        <p className={`eyebrow ${dark ? 'text-gold-soft' : 'text-gold'}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-[2.6rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-stone-300' : 'text-muted'}`}>{lead}</p>}
    </Reveal>
  );
}
