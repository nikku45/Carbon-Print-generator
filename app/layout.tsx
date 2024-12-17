import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

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
        url: '/footprint-calculator-logo.png',
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
    images: ['/footprint-calculator-logo.png'],
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
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}