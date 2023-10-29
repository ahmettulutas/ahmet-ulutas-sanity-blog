import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  content,
  language,
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

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  coverImage: any;
  date?: string;
  _updatedAt?: string;
  excerpt: string;
  author: Author;
  content?: any;
  language: string;
  _translations: Array<Blog>;
};

export const allBlogsQuery = groq`
*[_type == "blogs" && language == $language] | order(date desc, _updatedAt desc){
  ${postFields}
}`;

export const blogBySlugQuery = groq`
*[_type == "blogs" && slug.current == $slug][0] {
  ${postFields}
}
`;
export const blogSlugsQuery = groq`
*[_type == "blogs" && defined(slug.current)][].slug.current
`;

export const blogAndMoreBlogsQuery = groq`
{
  "blog": *[_type == "blogs" && slug.current == $slug && language == $language] | order(_updatedAt desc) [0] {
    ${postFields}
  },
  "moreBlogs": *[_type == "blogs" && slug.current != $slug && language == $language] | order(date desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;
