import Link from 'next/link';
import { getAllBlogs } from '@/sanity/lib/sanity-client-fns';
import { useServerSideTranslation } from '@/i18n';
import { SharedPageProps } from '../../layout';

export default async function Page({ params }: SharedPageProps) {
  const allBlogs = await getAllBlogs(params.lng);
  const { t } = await useServerSideTranslation(params.lng, 'translation');

  return (
    <main className='flex min-h-screen flex-col items-center gap-2 p-24'>
      <h1 className='mb-4 text-4xl font-bold text-center'>{t('blogs')}</h1>
      {allBlogs?.map((item) => (
        <Link
          key={item._id}
          className='underline p-2 rounded-xl'
          href={`/${params.lng}/blogs/${item.slug}`}
        >
          {item.title}
        </Link>
      ))}
    </main>
  );
}
