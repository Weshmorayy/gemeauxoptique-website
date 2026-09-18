import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { CartProvider } from '@/lib/cart-context';
import CartDrawer from '@/components/ui/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/images/brand/logo-transparent.png',
    apple: '/images/brand/logo-transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/brand/logo.png',
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Optician',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phonePrimary,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    openingHours: 'Mo-Sa 08:30-20:30',
    priceRange: '10000-25000 XOF',
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F7F4] text-[#1A1D20] antialiased selection:bg-[#C5A059]/20 selection:text-[#0D0F12]">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
