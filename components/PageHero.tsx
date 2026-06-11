type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export default function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="bg-gradient-to-r from-sidebar via-sidebar to-accent">
      <div className="container-x py-16 sm:py-20">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-light sm:text-sm">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-300">{lead}</p>}
      </div>
    </section>
  );
}
