import { ImageType } from '@/lib/helpers';
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
  coverImage,
  category,
  featured,
  "headings": content[length(style) == 2 && string::startsWith(style, "h")],
  "slug": slug.current,
  "author": author->{name, picture},
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    _id,
    language,
    "slug": slug.current,
},
`;

export type Author = {
  name?: any;
  picture?: any;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  coverImage: ImageType;
  date?: string;
  _updatedAt?: string;
  excerpt: string;
  author: Author;
  headings: any;
  content?: any;
  category: string;
  language: string;
  featured: boolean;
  metaFields?: {
    shareImage: any /* todo. change any here */;
    description: string;
    title: string;
  };
  _translations: Array<BlogPost>;
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
*[_type == "blogs"] | order(date desc, _updatedAt desc) {
  "slug": slug.current,
  language,
  _updatedAt,
}`;

export const blogAndMoreBlogsQuery = groq`
{
  "blog": *[_type == "blogs" && slug.current == $slug && language == $language] | order(_updatedAt desc) [0] {
    ${blogPostFields}
  },
  "moreBlogs": *[_type == "blogs" && slug.current != $slug && language == $language] | order(date desc, _updatedAt desc) [0...2] {
    ${blogPostFields}
  }
}`;
