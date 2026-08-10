import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    '',
    '/about',
    '/motivational-speaker',
    '/anchor',
    '/programs',
    '/gallery',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
