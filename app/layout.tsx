import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Caveat, Dancing_Script } from 'next/font/google';

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/newlogo.png" />
        <link rel="shortcut icon" href="/newlogo.png" />
      </head>
      <body className={`${poppins.variable} ${caveat.variable} ${dancingScript.variable} min-h-screen bg-background text-text font-sans`}>
        {children}
      </body>
    </html>
  );
}
