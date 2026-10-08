import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
const inter = localFont({ src: './fonts/inter-latin-variable.woff2', weight: '100 900', display: 'swap', preload: true, variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nolanhuyck.com'),
  title: 'Nolan Huyck',
  icons: { icon: '/icon.svg' },
  description: 'I build AI systems and internal tools, concept to production, on my own.',
  openGraph: { title: 'Nolan Huyck', description: 'I build AI systems and internal tools, concept to production, on my own.', url: '/', type: 'website', siteName: 'Nolan Huyck' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>;
}
