import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0F12',
    theme_color: '#C5A059',
    icons: [
      {
        src: '/images/brand/logo-transparent.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/brand/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
