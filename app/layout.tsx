import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Kayal Meal Box – Homely Food Like Home',
  description: 'Premium South Indian home‑style meal subscription delivered daily across Hyderabad.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
        <link rel="icon" type="image/png" href="/newlogo.png" />
        <link rel="shortcut icon" href="/newlogo.png" />
      <body className="min-h-screen bg-background text-text font-poppins">
        {children}
      </body>
    </html>
  );
}
