import { useServerSideTranslation } from '@/i18n';
import { Container } from '@/components/container';
import { SharedPageProps } from '@/app/[lng]/layout';

export default async function Page({ params }: SharedPageProps) {
  const { t } = await useServerSideTranslation(params.lng, 'translation');
  return (
    <main>
      <Container className='flex min-h-screen flex-col items-center gap-2 py-10'>
        <h1 className='mb-4 text-3xl md:text-6xl font-bold'>{t('aboutMe')}</h1>
        <p>{t('about')}</p>
      </Container>
    </main>
  );
}
