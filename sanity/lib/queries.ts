import { groq } from 'next-sanity';

const blogPostFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  content,
  language,
  metaFields,
  coverImage {
      asset->{
    ...,
    metadata
  }
  },
  "slug": slug.current,
  "author": author->{name, picture},
`;
export type Author = {
  name: string;
  picture: any;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  coverImage: any /* todo. change any here */;
  date?: string;
  _updatedAt?: string;
  excerpt: string;
  author: Author;
  content?: any;
  language: string;
  _translations: Array<BlogPost>;
  metaFields?: {
    shareImage: any /* todo. change any here */;
    description: string;
    title: string;
  };
};

export const allBlogsQuery = groq`
*[_type == "blogs" && language == $language] | order(date desc, _updatedAt desc) {
  ${blogPostFields}
}`;

export const blogBySlugQuery = groq`
*[_type == "blogs" && slug.current == $slug && language == $language] [0] {
  ${blogPostFields}
}
`;
export const blogSlugsQuery = groq`
*[_type == "blogs" && defined(slug.current)][].slug.current
`;

export const blogAndMoreBlogsQuery = groq`
{
  "blog": *[_type == "blogs" && slug.current == $slug && language == $language] | order(_updatedAt desc) [0] {
    ${blogPostFields}
  },
  "moreBlogs": *[_type == "blogs" && slug.current != $slug && language == $language] | order(date desc, _updatedAt desc) [0...2] {
    ${blogPostFields}
  }
}`;
