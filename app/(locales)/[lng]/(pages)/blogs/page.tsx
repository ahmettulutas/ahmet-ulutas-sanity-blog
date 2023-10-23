import Link from 'next/link';

import { useTranslation } from '@/i18n';
import { SharedPageProps } from '../../layout';
import { getAllBlogs } from '@/sanity/lib/sanity-client-fns';

export default async function Page({ params }: SharedPageProps) {
  const allBlogs = await getAllBlogs();
  const { t } = await useTranslation(params.lng, 'translation');

  return (
    <main className='flex min-h-screen flex-col items-center gap-2 p-24'>
      <h1>{t('blogs')}</h1>
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
