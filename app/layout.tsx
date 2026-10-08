import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nolanhuyck.com'),
  title: 'Nolan Huyck',
  description: 'I build AI systems and internal tools, concept to production, on my own.',
  openGraph: { title: 'Nolan Huyck', description: 'I build AI systems and internal tools, concept to production, on my own.', url: '/', type: 'website', siteName: 'Nolan Huyck' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
