import { SharedPageProps } from '../../../layout';
import {
  getAllBlogsSlugs,
  getBlogBySlug,
  getBlogsAndMoreStories,
} from '@/sanity/lib/sanity-client-fns';
import { notFound } from 'next/navigation';
import RichTextContent from '@/components/rich-text-content/RichTextContent';
import { Container } from '@/components/container';

import type { Metadata, ResolvingMetadata } from 'next';
import { languages } from '@/i18n/settings';
import SanityImage from '@/components/sanity-image/SanityImage';
import MoreBlogs from '@/components/more-blogs/MoreBlogs';

async function getPageData(
  slug: string,
  language: string
): Promise<ReturnType<typeof getBlogsAndMoreStories>> {
  try {
    const { blog, moreBlogs } = await getBlogsAndMoreStories(slug, language);
    return {
      blog,
      moreBlogs,
    };
  } catch (error) {
    return notFound();
  }
}

type PageProps = SharedPageProps & {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const blogPost = await getBlogBySlug(slug, params.lng);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blogPost.metaFields?.title || blogPost.title,
    description: blogPost.metaFields?.description || blogPost.excerpt,
    openGraph: {
      images: [blogPost.metaFields?.shareImage, ...previousImages],
    },
  };
}

export default async function Page({ params }: PageProps & SharedPageProps) {
  const { blog, moreBlogs } = await getPageData(params.slug, params.lng);
  return (
    <Container>
      <h1 className='mb-4 text-4xl font-bold text-center'>{blog?.title}</h1>
      <SanityImage image={blog?.coverImage} classesWrapper='my-10' priority />
      <RichTextContent content={blog?.content} />
      <MoreBlogs moreBlogs={moreBlogs} currentLanguage={params.lng} />
    </Container>
  );
}

/**
 * generates individual localized slugs from all blog posts slugs
 * 
 * @returns Array 
 * @example [{ slug: 'en/how-to-add-meta-tags-in-nextjs-13-s-new-app-router' },
  { slug: 'tr/how-to-add-meta-tags-in-nextjs-13-s-new-app-router' },
  { slug: 'de/how-to-add-meta-tags-in-nextjs-13-s-new-app-router' }]
 * @
 */
export async function generateStaticParams() {
  /* todo map over all locales and get pageData accordingly */
  const allSlugs = await getAllBlogsSlugs();
  const allSlugsPerLocale: Array<Record<'slug', string>> = [];

  for (const language of languages) {
    /* I need to remove duplicates using a Set because I'm using the same slug for each localized document. */
    const uniqueSlugs = new Set<string>();
    for (const { slug } of allSlugs) {
      uniqueSlugs.add(`${language}/${slug}`);
    }
    allSlugsPerLocale.push(...[...uniqueSlugs].map((slug) => ({ slug })));
  }
  return allSlugsPerLocale;
}
