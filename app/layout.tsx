import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'Carbon Footprint Calculator',
  description: 'Calculate and understand your annual carbon footprint',
  keywords: ['carbon footprint', 'sustainability', 'environmental impact', 'CO2 emissions'],
  authors: [{ name: 'Carbon Calculator Team' }],
  openGraph: {
    title: 'Carbon Footprint Calculator',
    description: 'Calculate and understand your annual carbon footprint',
    type: 'website',
    url: '/',
    siteName: 'Carbon Footprint Calculator',
    images: [
      {
        url: '/footprint-calculator-logo.png', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Carbon Footprint Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carbon Footprint Calculator',
    description: 'Calculate and understand your annual carbon footprint',
    images: ['/footprint-calculator-logo.png'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}