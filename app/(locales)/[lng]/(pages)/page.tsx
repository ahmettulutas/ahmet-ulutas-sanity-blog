import { client } from '@/sanity/lib/client'
import { useTranslation } from '../../../../i18n';
import { PageProps } from '../layout';


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
        <h1 className='border-2 border-black p-2' key={item.id}> {item.pageTitle}</h1>
      )}
    </main>
  )
}

