import { getAllBlogs } from '@/sanity/lib/sanity-client-fns';
import { useServerSideTranslation } from '@/i18n';
import { SharedPageProps } from '../../layout';
import { Container } from '@/components/container';
import BlogCard from '@/components/blog-card/BlogCard';

export default async function Page({ params }: SharedPageProps) {
  const allBlogs = await getAllBlogs(params.lng);
  const { t } = await useServerSideTranslation(params.lng, 'translation');

  return (
    <Container>
      <main className='py-16 flex flex-col items-center gap-2'>
        <h1 className='mb-4 text-4xl font-bold text-center'>
          {t('blogPosts')}
        </h1>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {allBlogs?.map((item) => (
            <BlogCard currntLocale={params.lng} key={item._id} blog={item} />
          ))}
          {allBlogs?.map((item) => (
            <BlogCard currntLocale={params.lng} key={item._id} blog={item} />
          ))}
        </section>
      </main>
    </Container>
  );
}

/* import { getAllBlogs } from '@/sanity/lib/sanity-client-fns';
import { useServerSideTranslation } from '@/i18n';
import { SharedPageProps } from '../../layout';
import { Container } from '@/components/container';
import BlogCard from '@/components/blog-card/BlogCard';

export default async function Page({ params }: SharedPageProps) {
  const allBlogs = await getAllBlogs(params.lng);
  const { t } = await useServerSideTranslation(params.lng, 'translation');

  return (
    <Container>
      <main className='py-16 flex flex-col items-center gap-2'>
        <h1 className='mb-4 text-4xl font-bold text-center'>
          {t('blogPosts')}
        </h1>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {allBlogs?.map((item) => (
            <BlogCard key={item._id} blog={item} />
          ))}
        </section>
      </main>
    </Container>
  );
}
 */
