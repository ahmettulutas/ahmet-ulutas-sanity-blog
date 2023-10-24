import { SlugValidationContext } from 'sanity';
import {
  Blog,
  allBlogsQuery,
  blogAndMoreBlogsQuery,
  blogBySlugQuery,
  blogSlugsQuery,
} from './queries';
import { getClient } from '@/sanity/lib/client';

const client = getClient();

export async function getAllBlogs(lang: string): Promise<Blog[]> {
  return (await client.fetch(allBlogsQuery, { language: lang })) || [];
}

export async function getAllBlogsSlugs(): Promise<Pick<Blog, 'slug'>[]> {
  const slugs = (await client.fetch<string[]>(blogSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return (await client.fetch(blogBySlugQuery, { slug })) || ({} as any);
}

export async function getBlogsAndMoreStories(
  slug: string,
  language: string
): Promise<{ blog: Blog; moreBlogs: Blog[] }> {
  return await client.fetch(blogAndMoreBlogsQuery, { slug, language });
}

export async function isUniqueOtherThanLanguage(
  slug: string,
  context: SlugValidationContext
) {
  const { document, getClient } = context;
  if (!document?.language) {
    return true;
  }
  const client = getClient({ apiVersion: '2023-04-24' });
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}
