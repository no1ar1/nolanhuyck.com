import type { Metadata } from 'next';
import { Footer } from './components';

export const metadata: Metadata = {
  title: 'Not found | Nolan Huyck',
  robots: { index: false },
};

export default function NotFound() {
  return <div className="measure">
    <header className="case-header not-found-header">
      <span className="section-label not-found-label">404</span>
      <h1>Nothing here</h1>
    </header>
    <main className="not-found-body">
      <p>This page reports itself as unresolved rather than rendering something plausible.</p>
      <a className="not-found-back" href="/">Back to the homepage →</a>
    </main>
    <Footer />
  </div>;
}
