import {
  getAllBlogsSlugs,
  getBlogBySlug,
  getBlogsAndMoreStories,
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
import CommentsContainer from '@/components/comments/CommentsContainer';
import { Suspense } from 'react';
import { SharedPageProps } from '@/app/[lng]/layout';

async function getPageData(slug: string, language: string) {
  try {
    const { blog, moreBlogs } = await getBlogsAndMoreStories(slug, language);
    if (!blog) return notFound();
    const availableBlogLanguages = blog?._translations?.map(({ language, slug }) => ({
      language,
      slug,
    }));
    return {
      blog,
      relatedSlugs: availableBlogLanguages.length
        ? availableBlogLanguages
        : [{ language: blog.language, slug: blog.slug }],
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
  const { slug, lng } = params;
  const { blog, moreBlogs, relatedSlugs } = await getPageData(slug, lng);
  return (
    <main>
      <Header currentLocale={lng} dynamicLinks={relatedSlugs} />
      <Container>
        <h1 className='mb-4 text-3xl md:text-6xl font-bold'>{blog?.title}</h1>
        <AuthorAvatar {...{ ...blog?.author }} />
        <CoverImage
          priority
          height={300}
          width={600}
          image={blog?.coverImage}
          imageStyles='rounded-3xl'
          wrapperStyles='mb-8'
        />
        <RichTextContent content={blog?.content} />
        <Suspense fallback={<p>Loading comments...</p>}>
          <CommentsContainer
            currentLocale={lng}
            currentSlug={blog.slug}
            relatedSlugs={relatedSlugs.map((item) => item.slug)}
          />
        </Suspense>
        <MoreBlogs moreBlogs={moreBlogs} currntLocale={lng} />
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
  const { slug, lng } = params;
  const blogPost = await getBlogBySlug(slug, lng);
  if (!blogPost) return getDefaultMetaData(lng, parent);

  const blogMetaTitle = blogPost.metaFields?.title || blogPost.title;
  const blogMetaDescription = blogPost.metaFields?.description || blogPost.excerpt;
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
      images: generatedOGImages.length > 0 ? [...generatedOGImages] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogMetaTitle,
      description: blogMetaDescription,
      images: generatedTwitterImages.length > 0 ? [...generatedTwitterImages] : [],
    },
    alternates: {
      canonical: `${new URL(process.env.NEXT_PUBLIC_BASE_URL as string)}/${lng}/blogs/${slug}`,
    },
  };
}
