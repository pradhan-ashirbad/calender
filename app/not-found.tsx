import Link from 'next/link';
import { IconArrowRight } from '@/components/icons';

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-x text-center">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-3 font-display text-4xl text-ink">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-accent-dark"
        >
          Back to home
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
