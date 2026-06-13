import Link from 'next/link';
import { IconArrowRight } from '@/components/icons';

type Props = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function ContentCard({ title, href, icon, children }: Props) {
  const body = (
    <>
      {href && <span className="card-accent-bar group-hover:scale-x-100" aria-hidden="true" />}
      {icon && (
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 text-accent ring-1 ring-inset ring-accent/10">
          {icon}
        </span>
      )}
      <h3
        className={`font-display text-xl text-ink ${href ? 'transition-colors duration-200 group-hover:text-accent' : ''}`}
      >
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Learn more
          <IconArrowRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card card-hover group">
        {body}
      </Link>
    );
  }
  return <div className="card">{body}</div>;
}
