import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ItaloPath — Italy Study Visa & Scholarships',
    short_name: 'ItaloPath',
    description: 'Specialized study visa & DSU regional scholarships advisory for Italian universities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090D16',
    theme_color: '#090D16',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
