import { getAllBlogs } from '@/sanity/lib/sanity-client-fns';
import { useServerSideTranslation } from '@/i18n';
import { Container } from '@/components/container';
import BlogCard from '@/components/blog-card/BlogCard';
import BlogCoverSection from '@/components/blog-cover/BlogCover';
import { SharedPageProps } from '@/app/[lng]/layout';

export default async function Page({ params }: SharedPageProps) {
  const allBlogs = await getAllBlogs(params.lng);
  const { t } = await useServerSideTranslation(params.lng, 'translation');

  return (
    <Container>
      <main className='py-8 flex flex-col items-center gap-2'>
        <BlogCoverSection blog={allBlogs[0]} />
        <h1 className='mb-4 text-4xl font-bold text-center'>{t('blogPosts')}</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {allBlogs?.map((item) => (
            <BlogCard currntLocale={params.lng} key={item._id} blog={item} />
          ))}
        </section>
      </main>
    </Container>
  );
}
