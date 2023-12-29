import { baseUrl } from '@/lib/constants';
import { getAllBlogsSlugs } from '@/sanity/sanity-lib/sanity-client-fns';
import { MetadataRoute } from 'next';
/* return type must be Sitemap
Reference link : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap */
const staticMapItems: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/en`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${baseUrl}/de`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${baseUrl}/tr`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${baseUrl}/en/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/tr/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/de/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBlogsSlugs = await getAllBlogsSlugs();
  const dynamicMapItems: MetadataRoute.Sitemap = allBlogsSlugs.map(
    ({ language, _updatedAt, slug }) => ({
      url: `${baseUrl}/${language}/blogs/${slug}`,
      lastModified: _updatedAt,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  );

  return [...staticMapItems, ...dynamicMapItems];
}
