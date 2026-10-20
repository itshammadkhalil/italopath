import type { MetadataRoute } from 'next';

const BASE_URL = 'https://italopath.tech';

const routes = [
  '/',
  '/services',
  '/scholarships',
  '/process',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/contact' ? 0.9 : 0.7,
  }));
}
