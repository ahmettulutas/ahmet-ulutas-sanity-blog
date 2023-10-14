
import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
export type Author = {
  name?: string
  picture?: any
}

export type Blog = {
  _id: string
  title?: string
  slug: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  content?: any
}

export const allBlogsQuery = groq`
*[_type == "blog"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const blogBySlugQuery = groq`
*[_type == "blog" && slug.current == $slug][0] {
  ${postFields}
}
`
export const blogSlugsQuery = groq`
*[_type == "blog" && defined(slug.current)][].slug.current
`
export const blogAndMoreBlogsQuery = groq`
{
  "post": *[_type == "blog" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "blog" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`