import { useLocation, Link } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-paper">
      <div className="max-w-md w-full text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-tiffany-700 mb-6">Error 404</div>
        <h1 className="font-display text-7xl text-ink-900 mb-6">404</h1>
        <div className="h-px w-16 bg-ink-900/15 mx-auto mb-6" />
        <h2 className="font-display text-2xl text-ink-900 mb-3">Page Not Found</h2>
        <p className="text-ink-500 leading-relaxed mb-10">
          The page <span className="text-ink-700 font-medium">&ldquo;{pageName}&rdquo;</span> could not be found.
        </p>
        <Link
          to="/Home"
          className="inline-flex items-center gap-3 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
