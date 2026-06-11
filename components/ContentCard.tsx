import Link from 'next/link';

type Props = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function ContentCard({ title, href, icon, children }: Props) {
  const body = (
    <>
      {icon && (
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </span>
      )}
      <h3 className={`font-display text-xl text-ink ${href ? 'transition-colors duration-150 group-hover:text-accent' : ''}`}>
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </>
  );

  const cardClass =
    'block h-full rounded-lg border bg-white p-6 shadow-sm transition duration-150 hover:scale-[1.02] hover:shadow-md';

  if (href) {
    return (
      <Link href={href} className={`group ${cardClass}`}>
        {body}
      </Link>
    );
  }
  return <div className={cardClass}>{body}</div>;
}
