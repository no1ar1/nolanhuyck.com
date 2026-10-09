import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
const inter = localFont({ src: './fonts/inter-latin-variable.woff2', weight: '100 900', display: 'swap', preload: true, variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nolanhuyck.com'),
  alternates: { canonical: '/' },
  title: 'Nolan Huyck',
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico', sizes: 'any' }], apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }] },
  description: 'I build AI systems and internal tools, concept to production, on my own.',
  openGraph: { title: 'Nolan Huyck', description: 'I build AI systems and internal tools, concept to production, on my own.', url: '/', type: 'website', siteName: 'Nolan Huyck', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nolan Huyck — AI systems and internal tools' }] },
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#121317' },
  ],
};
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nolan Huyck',
  url: 'https://nolanhuyck.com/',
  email: 'nrhuyck@gmail.com',
  jobTitle: 'Software developer',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'Michigan State University' },
  sameAs: ['https://github.com/no1ar1', 'https://www.linkedin.com/in/nolanhuyck/'],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} /></head><body>{children}</body></html>;
}
