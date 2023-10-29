import {
  getBlogsAndMoreStories,
  getAllBlogsSlugs,
} from '@/sanity/lib/sanity-client-fns';
import { SharedPageProps } from '../../../layout';
import { notFound } from 'next/navigation';
import RichTextContent from '@/components/rich-text-content/RichTextContent';
import { Container } from '@/components/container';
import Link from 'next/link';
import SanityImage from '@/components/sanity-image/SanityImage';

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
  console.log(moreBlogs);
  return (
    <Container>
      <h1 className='mb-4 text-4xl font-bold text-center'>{blog?.title}</h1>
      <SanityImage image={blog.coverImage} classesWrapper='my-10' />
      <RichTextContent content={blog?.content} />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {moreBlogs.map((item) => (
          <Link href={item.slug} key={item._id}>
            <SanityImage image={item.coverImage} />
            <h1>{item.title}</h1>
          </Link>
        ))}
      </section>
    </Container>
  );
}

export async function generateStaticParams() {
  const allSlugs = await getAllBlogsSlugs();
  return allSlugs.map((post) => ({
    slug: post.slug,
  }));
}
