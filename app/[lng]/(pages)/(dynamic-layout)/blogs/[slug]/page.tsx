import { getAllBlogsSlugs, getBlogBySlug } from '@/sanity/sanity-lib/sanity-client-fns';
import { notFound } from 'next/navigation';
import RichTextContent from '@/app/[lng]/components/rich-text-content/RichTextContent';
import type { Metadata, ResolvingMetadata } from 'next';
import MoreBlogs from '@/app/[lng]/components/more-blogs/MoreBlogs';
import { generateMetaImages, getDefaultMetaData } from '@/lib/helpers';
import { ogImageSizes, twitterImageSizes } from '@/lib/constants';
import AuthorAvatar from '@/app/[lng]/components/author-avatar/AuthorAvatar';
import CoverImage from '@/app/[lng]/components/sanity-image/CoverImage';
import CommentsContainer from '@/app/[lng]/components/comments/CommentsContainer';
import { Suspense } from 'react';
import { SharedPageProps } from '@/app/[lng]/layout';
import Tag from '@/app/[lng]/components/tags/Tags';
import CommentsSkeleton from '@/app/[lng]/components/loading-skeletons/CommentsSkeleton';
import TableOfContents from '@/app/[lng]/components/table-of-content/TableOfContent';
import { createTranslation } from '@/i18n';
import PostDate from '@/app/[lng]/components/post-date/PostDate';
import { LocaleType } from '@/i18n/settings';
import { Container } from '@/app/[lng]/components/containers/Container';
import Header from '@/app/[lng]/components/layout/header';
import MoreBlogsSkeleton from '@/app/[lng]/components/loading-skeletons/MoreBlogSkeleton';

async function getPageData(slug: string, language: LocaleType) {
  try {
    const blog = await getBlogBySlug(slug, language);
    if (!blog) return notFound();
    const availableBlogLanguages = blog?._translations?.filter(Boolean).map((item) => {
      return {
        language: item?.language,
        slug: item?.slug,
      };
    });
    return {
      blog,
      relatedSlugs: availableBlogLanguages.length
        ? availableBlogLanguages
        : [{ language: blog.language, slug: blog.slug }], // return the locale of the current blogpost if no alternative locale exist.
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
  language: LocaleType;
  slug: string;
};

export default async function Page({ params }: PageProps) {
  const { slug, lng } = params;
  const { blog, relatedSlugs } = await getPageData(slug, lng);
  const { t } = await createTranslation(lng, 'translation');

  return (
    <main>
      <Header currentLocale={lng} dynamicLinks={relatedSlugs} />
      <div className='mb-8 text-center relative w-full h-[85vh]'>
        <div className='w-full z-20 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Tag name={blog.category} className='px-6 text-sm py-2' />
          <h1 className='inline-block mt-6 font-semibold text-dark-text text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6'>
            {blog.title}
          </h1>
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 h-full bg-dark-bg/60 dark:bg-dark-bg/40 z-10' />
        <CoverImage
          fill
          height={1000}
          width={1000}
          priority
          imageStyles='object-center object-cover w-full'
          wrapperStyles='-z-10'
          image={blog.coverImage}
        />
      </div>
      <Container>
        <section className='grid mb-2'>
          <AuthorAvatar {...{ ...blog?.author }} />
          <PostDate dateString={blog.date} />
        </section>
        <div className='grid gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-2 order-2 lg:order-1'>
            <RichTextContent content={blog?.content} />
            <Suspense fallback={<CommentsSkeleton />}>
              <CommentsContainer
                currentLocale={params.lng}
                currentSlug={blog.slug}
                relatedSlugs={relatedSlugs.map((item) => item?.slug)}
              />
            </Suspense>
          </div>
          <div className='col-span-1 order-1 lg:order-2'>
            <details
              className='border-[1px] border-solid border-dark-bg dark:border-light-bg text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto'
              open
            >
              <summary className='text-lg font-semibold cursor-pointer'>
                {t('tableOfContents')}
              </summary>
              <TableOfContents headings={blog?.headings} language={'lng'} />
            </details>
          </div>
        </div>
        <Suspense fallback={<MoreBlogsSkeleton />}>
          <MoreBlogs locale={lng} slug={slug} />
        </Suspense>
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await createTranslation(params.lng, 'translation');
  if (!slug || !lng) {
    return getDefaultMetaData(lng, parent);
  }

  let blogPost = null;
  try {
    blogPost = await getBlogBySlug(slug, lng);
  } catch (error) {
    return getDefaultMetaData(lng, parent);
  }

  if (!blogPost) return getDefaultMetaData(lng, parent);

  const blogMetaTitle = blogPost.metaFields?.title || blogPost.title || t('metaData.pageTitle');
  const blogMetaDescription =
    blogPost.metaFields?.description || blogPost.excerpt || t('metaData.pageDescription');

  const generatedOGImages = generateMetaImages({
    sanityImage: blogPost.metaFields?.shareImage,
    sizes: ogImageSizes,
  });
  const generatedTwitterImages = generateMetaImages({
    sanityImage: blogPost.metaFields?.shareImage,
    sizes: twitterImageSizes,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title: blogMetaTitle,
    description: blogMetaDescription,

    openGraph: {
      type: 'article',
      title: blogMetaTitle,
      description: blogMetaDescription,
      url: `${baseUrl}/${lng}/blogs/${slug}`,
      siteName: 'Ahmet Ulutaş Blog',
      locale: lng,
      ...(generatedOGImages.length > 0 && { images: [...generatedOGImages] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: blogMetaTitle,
      description: blogMetaDescription,
      ...(generatedTwitterImages.length > 0 && { images: [...generatedTwitterImages] }),
    },
    alternates: {
      canonical: `${baseUrl}/${lng}/blogs/${slug}`,
    },
  };
}
