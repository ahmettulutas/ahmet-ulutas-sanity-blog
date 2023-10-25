import {
  getBlogsAndMoreStories,
  getAllBlogsSlugs,
} from '@/sanity/lib/sanity-client-fns';
import { SharedPageProps } from '../../../layout';
import { notFound } from 'next/navigation';
import PostContent from '@/components/post-content/PostContent';
import { Container } from '@/components/container';

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
      <h1 className='mb-4 text-4xl font-bold text-center'>{blog.title}</h1>
      <PostContent content={blog?.content} />
      {/* {blog && <PostContent content={blog}/>  } */}
      <h1>{JSON.stringify(moreBlogs)}</h1>
    </Container>
  );
}

export async function generateStaticParams() {
  const allSlugs = await getAllBlogsSlugs();
  return allSlugs.map((post) => ({
    slug: post.slug,
  }));
}
