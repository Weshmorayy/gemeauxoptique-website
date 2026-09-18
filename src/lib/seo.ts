import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'fr_SN',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/images/brand/logo.png`,
          width: 800,
          height: 600,
          alt: siteConfig.name,
        },
      ],
    },
  };
}
