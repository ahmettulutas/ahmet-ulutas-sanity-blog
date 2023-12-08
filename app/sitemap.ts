import { getAllBlogsSlugs } from '@/sanity/sanity-lib/sanity-client-fns';
import { MetadataRoute } from 'next';
/* return type must be Sitemap
Reference link : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap */
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
export const staticMapItems: MetadataRoute.Sitemap = [
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
    url: `${baseUrl}/en/blogs`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/tr/blogs`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/de/blogs`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBlogs = await getAllBlogsSlugs();
  const dynamicMapItems: MetadataRoute.Sitemap = allBlogs.map(({ language, _updatedAt, slug }) => ({
    url: `${baseUrl}/${language}/${slug}`,
    lastModified: _updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticMapItems, ...dynamicMapItems];
}
