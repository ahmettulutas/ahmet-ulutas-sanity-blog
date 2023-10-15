import { useTranslation } from '@/i18n';
import { SharedPageProps } from '../layout';

export default async function Page({ params }: SharedPageProps) {
  const { t } = await useTranslation(params.lng, 'translation');

  return (
    <main className='flex min-h-screen flex-col items-center gap-2 p-24'>
      <h1>{t('homePageTitle')}</h1>
      <div>{t('welcome')}</div>
      <p>{t('lorem')}</p>
    </main>
  );
}
