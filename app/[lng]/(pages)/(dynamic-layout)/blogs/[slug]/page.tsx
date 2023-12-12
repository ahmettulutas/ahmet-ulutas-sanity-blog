import {
  getAllBlogsSlugs,
  getBlogBySlug,
  getBlogsAndMoreStories,
} from '@/sanity/sanity-lib/sanity-client-fns';
import { notFound, redirect } from 'next/navigation';
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
import Tag from '@/components/tags/Tags';
import CommentsSkeleton from '@/components/loading-skeletons/CommentsList';
import TableOfContent from '@/components/table-of-content/TableOfContent';
import { useServerSideTranslation } from '@/i18n';

async function getPageData(slug: string, language: string) {
  try {
    const { blog, moreBlogs } = await getBlogsAndMoreStories(slug, language);
    if (!blog) return notFound();
    const availableBlogLanguages = blog?._translations?.map((item) => {
      return {
        language: item?.language,
        slug: item?.slug,
      };
    });
    return {
      blog,
      relatedSlugs: availableBlogLanguages.length
        ? availableBlogLanguages
        : [{ language: blog.language, slug: blog.slug }],
      moreBlogs,
    };
  } catch (error) {
    return redirect('/error');
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
  const { t } = await useServerSideTranslation(lng, 'translation');

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
        <AuthorAvatar {...{ ...blog?.author }} />
        <div className='gap-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-2 order-2 md:order-1'>
            <RichTextContent content={blog?.content} />
            <Suspense fallback={<CommentsSkeleton />}>
              <CommentsContainer
                currentLocale={lng}
                currentSlug={blog.slug}
                relatedSlugs={relatedSlugs.map((item) => item?.slug)}
              />
            </Suspense>
          </div>
          <div className='col-span-1 order-1 md:order-2'>
            <details
              className='border-[1px] border-solid border-dark-bg dark:border-light-bg text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto'
              open
            >
              <summary className='text-lg font-semibold capitalize cursor-pointer'>
                {t('tableOfContent')}
              </summary>
              <TableOfContent headings={blog?.headings} language={'lng'} />
            </details>
          </div>
        </div>

        <MoreBlogs moreBlogs={moreBlogs} locale={lng} />
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
