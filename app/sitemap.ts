import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://nolanhuyck.com/' },
    { url: 'https://nolanhuyck.com/work/campaign-hub/' },
  ];
}
