import {
  getAllBlogsSlugs,
  getBlogBySlug,
  getBlogsAndMoreStories,
  extractLocaleFieldsFromBlog,
} from '@/sanity/lib/sanity-client-fns';
import { notFound } from 'next/navigation';
import RichTextContent from '@/components/rich-text-content/RichTextContent';
import { Container } from '@/components/container';
import type { Metadata, ResolvingMetadata } from 'next';
import MoreBlogs from '@/components/more-blogs/MoreBlogs';
import { generateMetaImages, getDefaultMetaData } from '@/lib/helpers';
import { ogImageSizes, twitterImageSizes } from '@/lib/constants';
import AuthorAvatar from '@/components/author-avatar/AuthorAvatar';
import CoverImage from '@/components/sanity-image/CoverImage';
import Header from '@/components/header/Header';

import { SharedPageProps } from '../../../../layout';

async function getPageData(slug: string, language: string) {
  try {
    const { blog, moreBlogs } = await getBlogsAndMoreStories(slug, language);
    if (!blog) return notFound();
    const headerLinks = blog._translations?.map(({ language, slug }) => ({
      language,
      slug,
    }));
    return {
      blog: extractLocaleFieldsFromBlog(blog, language),
      headerLinks,
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
export type DynamicLink = {
  language: string;
  slug: string;
};

export default async function Page({ params }: PageProps & SharedPageProps) {
  const { blog, moreBlogs, headerLinks } = await getPageData(
    params.slug,
    params.lng
  );

  return (
    <main>
      <Container>
        <Header currentLocale={params.lng} dynamicLinks={headerLinks} />
        <h1 className='mb-4 text-3xl md:text-6xl font-bold'>{blog?.title}</h1>
        <AuthorAvatar {...{ ...blog?.author }} />
        <CoverImage height={300} width={600} image={blog?.coverImage} />
        <RichTextContent content={blog?.content} />
        <MoreBlogs moreBlogs={moreBlogs} currntLocale={params.lng} />
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const allSlugs = await getAllBlogsSlugs();
  const params = allSlugs.filter(Boolean).map(({ slug, language }) => ({
    lng: language,
    slug: `${slug}`,
  }));
  return params;
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
