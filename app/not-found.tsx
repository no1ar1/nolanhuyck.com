import type { Metadata } from 'next';
import { Footer } from './components';

export const metadata: Metadata = {
  title: '404 — Page not found | Nolan Huyck',
  robots: { index: false },
};

export default function NotFound() {
  return <div className="measure">
    <header className="case-header not-found-header">
      <span className="section-label not-found-label">404</span>
      <h1>Page not found</h1>
    </header>
    <main className="not-found-body">
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <a className="not-found-back" href="/">Back to the homepage →</a>
    </main>
    <Footer />
  </div>;
}
