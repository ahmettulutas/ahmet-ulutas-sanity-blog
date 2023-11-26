import { getClient } from '@/sanity/lib/client';

import {
  BlogPost,
  allBlogsQuery,
  blogAndMoreBlogsQuery,
  blogBySlugQuery,
  blogSlugsQuery,
} from './queries';

const client = getClient();

export async function getAllBlogs(language: string): Promise<BlogPost[]> {
  const res = await client.fetch(allBlogsQuery, { language });
  return res || [];
}

export async function getAllBlogsSlugs(): Promise<
  Pick<BlogPost, 'slug' | 'language'>[]
> {
  const slugs =
    (await client.fetch<{ slug: string; language: string }[]>(
      blogSlugsQuery
    )) || [];
  return slugs.map(({ slug, language }) => ({ slug, language }));
}

export async function getBlogBySlug(
  slug: string,
  language: string
): Promise<BlogPost> {
  return await client.fetch<BlogPost>(
    blogBySlugQuery,
    { slug, language },
    { next: { revalidate: 60 * 60 } }
  );
}

export async function getBlogsAndMoreStories(
  slug: string,
  language: string
): Promise<{ blog: BlogPost; moreBlogs: BlogPost[] }> {
  return await client.fetch(
    blogAndMoreBlogsQuery,
    { slug, language },
    { next: { revalidate: 60 * 60 } }
  );
}

export const extractLocaleFieldsFromBlog = (
  blog: BlogPost,
  language: string
): BlogPost => {
  const blogTranslation = blog._translations.find(
    (item) => item.language === language
  );
  if (!language || !blogTranslation) return blog;
  return blogTranslation;
};
