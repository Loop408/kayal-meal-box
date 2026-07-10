import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Caveat, Dancing_Script } from 'next/font/google';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kayal Meal Box – Homely Food Like Home',
  description: 'Premium South Indian home‑style meal subscription delivered daily across Hyderabad.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kayalkerala.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kayal Meal Box – Homely Food Like Home',
    description: 'Premium South Indian home‑style meal subscription delivered daily across Hyderabad.',
    url: '/',
    siteName: 'Kayal Meal Box',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayal Meal Box – Homely Food Like Home',
    description: 'Premium South Indian home‑style meal subscription delivered daily across Hyderabad.',
    images: ['/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
          <link rel="icon" type="image/png" href="/newlogo.png" />
          <link rel="shortcut icon" href="/newlogo.png" />
          <meta name="theme-color" content="#1B5E20" />
          <link rel="manifest" href="/manifest.json" />
        </head>
      <body className={`${poppins.variable} ${caveat.variable} ${dancingScript.variable} min-h-screen bg-background text-text font-sans`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
