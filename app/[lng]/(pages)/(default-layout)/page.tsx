import { getAllBlogs } from '@/sanity/sanity-lib/sanity-client-fns';
import { createTranslation } from '@/i18n';
import BlogCard from '@/app/[lng]/components/blog-card/BlogCard';
import BlogCoverSection from '@/app/[lng]/components/blog-cover/BlogCover';
import { SharedPageProps } from '@/app/[lng]/layout';
import { Container } from '@/app/[lng]/components/containers/Container';

export default async function Page({ params }: Readonly<SharedPageProps>) {
  const allBlogs = await getAllBlogs(params.lng);
  const { t } = await createTranslation(params.lng, 'translation');
  const featuredBlog = allBlogs?.find((item) => item.featured);
  return (
    <Container className='py-10 flex flex-col items-center gap-2'>
      <BlogCoverSection blog={featuredBlog || allBlogs?.[0]} locale={params.lng} />
      <h1 className='mb-4 text-4xl font-bold text-center mt-10'>{t('blogPosts')}</h1>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {allBlogs?.map((item) => (
          <BlogCard vertical={true} locale={params.lng} key={item._id} blog={item} />
        ))}
      </section>
    </Container>
  );
}
