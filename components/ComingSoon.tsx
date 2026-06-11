import Link from 'next/link';
import { IconArrowRight, IconFileText } from '@/components/icons';

type Props = {
  backHref?: string;
  backLabel?: string;
};

export default function ComingSoon({ backHref = '/project', backLabel = 'Back to project overview' }: Props) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-xl rounded-lg border bg-white p-10 text-center shadow-sm">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-sidebar/10 text-sidebar">
            <IconFileText className="h-7 w-7" />
          </span>
          <h2 className="mt-5 font-display text-2xl text-ink">Coming Soon</h2>
          <p className="mt-3 text-muted">This section is being developed. Check back soon.</p>
          <Link
            href={backHref}
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent transition-colors duration-150 hover:text-accent-dark"
          >
            {backLabel}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
