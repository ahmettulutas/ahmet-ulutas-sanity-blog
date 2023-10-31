import { useServerSideTranslation } from '@/i18n';
import { SharedPageProps } from '../layout';
import { Container } from '@/components/container';

export default async function Page({ params }: SharedPageProps) {
  const { t } = await useServerSideTranslation(params.lng, 'translation');

  return (
    <Container>
      <main className='flex min-h-screen flex-col items-center gap-2'>
        <h1 className='mb-4 text-4xl font-bold text-center'>
          {t('homePageTitle')}
        </h1>
        <div>{t('welcome')}</div>
        <p>{t('lorem')}</p>
      </main>
    </Container>
  );
}
