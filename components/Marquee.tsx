type Props = {
  items: string[];
  label?: string;
};

export default function Marquee({ items, label }: Props) {
  const row = [...items, ...items];
  return (
    <section className="border-y border-line bg-white py-8" aria-label={label ?? 'Partners and credentials'}>
      <div className="container-x">
        {label && (
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted">{label}</p>
        )}
        <div className="marquee-mask group relative overflow-hidden">
          <ul className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {row.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex shrink-0 items-center gap-3 font-display text-lg text-ink/70"
                aria-hidden={index >= items.length}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
