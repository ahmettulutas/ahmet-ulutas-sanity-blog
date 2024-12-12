import { getClient } from '@/sanity/sanity-lib/client';

import {
  BlogPost,
  allBlogsQuery,
  // blogByIdQuery,
  blogBySlugQuery,
  blogSlugsQuery,
  moreBlogs,
} from './queries';

const client = getClient();

export async function getAllBlogs(language: string): Promise<BlogPost[]> {
  const res = await client.fetch(allBlogsQuery, { language });
  return res || [];
}

export async function getAllBlogsSlugs(): Promise<
  Pick<BlogPost, 'slug' | 'language' | '_updatedAt'>[]
> {
  const slugs =
    (await client.fetch<{ slug: string; language: string; _updatedAt: string }[]>(
      blogSlugsQuery
    )) || [];
  return slugs.map(({ slug, language, _updatedAt }) => ({ slug, language, _updatedAt }));
}

export async function getBlogBySlug(slug: string, language: string): Promise<BlogPost> {
  return await client.fetch<BlogPost>(blogBySlugQuery, { slug, language });
}

// export async function getBlogById(
//   slug: string,
//   language: string
// ): Promise<{ blog: BlogPost; moreBlogs: BlogPost[] }> {
//   return await client.fetch(blogByIdQuery, { slug, language }, { next: { revalidate: 60 } });
// }

export async function getMoreBlogs(slug: string, language: string): Promise<BlogPost[]> {
  return await client.fetch(moreBlogs, { slug, language }, { next: { revalidate: 60 } });
}

// export const extractLocaleFieldsFromBlog = (
//   blog: BlogPost,
//   language: string
// ): BlogPost => {
//   const blogTranslation = blog._translations.find(
//     (item) => item.language === language
//   );
//   if (!language || !blogTranslation) return blog;
//   return blogTranslation;
// };
