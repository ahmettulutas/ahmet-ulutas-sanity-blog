import {
  getAllBlogsSlugs,
  getBlogsAndMoreStories,
} from '@/lib/sanity-client-fns';
import { SharedPageProps } from '../../../layout';
import { notFound } from 'next/navigation';
import { languages } from '@/i18n/settings';
import PostContent from '@/components/PostContent/PostContent';
import { Container } from '@/components/container';

async function getPageData(
  slug: string
): Promise<ReturnType<typeof getBlogsAndMoreStories>> {
  try {
    const { blog, moreBlogs } = await getBlogsAndMoreStories(slug);
    return {
      blog,
      moreBlogs,
    };
  } catch (error) {
    return notFound();
  }
}

type Params = SharedPageProps & {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params & SharedPageProps) {
  const { blog /* moreBlogs */ } = await getPageData(params.slug);
  return (
    <Container>
      <h1 className='mb-4 text-4xl font-bold text-center'>{blog.title}</h1>
      <PostContent content={blog?.content} />
      {/* {blog && <PostContent content={blog}/>  } */}
    </Container>
  );
}

export const getStaticPaths = async () => {
  const allSlugs = await getAllBlogsSlugs();
  const paths: Array<string> = [];

  allSlugs.forEach(({ slug }) => {
    languages.forEach((locale) => {
      paths.push(`/${locale}/blogs/${slug}`);
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};