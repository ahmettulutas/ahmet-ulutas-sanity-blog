import { client } from '@/sanity/lib/client'
import { useTranslation } from '../../../../i18n';
import { PageProps } from '../layout';
import Link from 'next/link';

async function fetchArticles () {
  const query = `*[_type == "article"]`
  const data = await client.fetch(query)
  return data;
}

export default async function Page({ params }: PageProps) {

  const articles = await fetchArticles();
  const {t} = await useTranslation(params.lng, "translation")

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      <div>{t("h1")}</div>
      <div>{t("pageTitle")}</div>
      {articles?.map((item: any) => 
        <Link key={item._id} className='border-2 border-black p-2 rounded-xl' href={item._id}>{item.pageTitle}</Link>
      )}
    </main>
  )
}