import {
  Blog,
  allBlogsQuery,
  blogAndMoreBlogsQuery,
  blogBySlugQuery,
  blogSlugsQuery,
} from './queries';
import { getClient } from '@/sanity/lib/client';

const client = getClient();

export async function getAllBlogs(): Promise<Blog[]> {
  return (await client.fetch(allBlogsQuery)) || [];
}

export async function getAllBlogsSlugs(): Promise<Pick<Blog, 'slug'>[]> {
  const slugs = (await client.fetch<string[]>(blogSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return (await client.fetch(blogBySlugQuery, { slug })) || ({} as any);
}

export async function getBlogsAndMoreStories(
  slug: string
): Promise<{ blog: Blog; moreBlogs: Blog[] }> {
  return await client.fetch(blogAndMoreBlogsQuery, { slug });
}
