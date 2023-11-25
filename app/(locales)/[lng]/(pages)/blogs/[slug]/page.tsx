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
import MoreBlogs from '@/components/more-blogs/MoreBlogs';
import { generateMetaImages, getDefaultMetaData } from '@/lib/helpers';
import { ogImageSizes, twitterImageSizes } from '@/lib/constants';
import AuthorAvatar from '@/components/author-avatar/AuthorAvatar';
import CoverImage from '@/components/sanity-image/CoverImage';

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

export default async function Page({ params }: PageProps & SharedPageProps) {
  const { blog, moreBlogs } = await getPageData(params.slug, params.lng);
  return (
    <Container>
      <h1 className='mb-4 text-3xl md:text-6xl font-bold'>{blog?.title}</h1>
      <AuthorAvatar {...{ ...blog?.author }} />
      <CoverImage width={600} height={1000} image={blog?.coverImage} />
      <RichTextContent content={blog?.content} />
      <MoreBlogs moreBlogs={moreBlogs} currntLocale={params.lng} />
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

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const blogPost = await getBlogBySlug(slug, params.lng);
  if (!blogPost) return getDefaultMetaData(params.lng, parent);

  const previousImages = (await parent).openGraph?.images || [];
  const blogMetaTitle = blogPost.metaFields?.title || blogPost.title;
  const blogMetaDescription =
    blogPost.metaFields?.description || blogPost.excerpt;
  const generatedOGImages = generateMetaImages({
    sanityImage: blogPost.metaFields?.shareImage,
    sizes: ogImageSizes,
  });
  const generatedTwitterImages = generateMetaImages({
    sanityImage: blogPost.metaFields?.shareImage,
    sizes: twitterImageSizes,
  });

  return {
    title: blogMetaTitle,
    description: blogMetaDescription,

    openGraph: {
      images:
        generatedOGImages.length > 0
          ? [...generatedOGImages, ...previousImages]
          : previousImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: blogMetaTitle,
      description: blogMetaDescription,
      images:
        generatedTwitterImages.length > 0
          ? [...generatedTwitterImages, ...previousImages]
          : previousImages,
    },
    alternates: {
      canonical: `${new URL(process.env.NEXT_PUBLIC_BASE_URL as string)}/${
        params.lng
      }/blogs/${slug}`,
    },
  };
}
