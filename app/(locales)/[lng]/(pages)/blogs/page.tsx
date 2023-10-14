import { client } from '@/sanity/lib/client'


import Link from 'next/link';
import { getAllBlogs } from '@/lib/sanity-client-fns';
import { useTranslation } from '@/i18n';
import { SharedPageProps } from '../../layout';

export default async function Page({ params }: SharedPageProps) {

  const allBlogs = await getAllBlogs()
  const {t} = await useTranslation(params.lng, "translation")

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      <h1>{t("blogs")}</h1>
      {allBlogs?.map((item) => 
        <Link key={item._id} className='underline p-2 rounded-xl' href={item._id}>{item.title}</Link>
      )}
    </main>
  )
}