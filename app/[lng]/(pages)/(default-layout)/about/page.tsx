import { createTranslation } from '@/i18n';
import { SharedPageProps } from '@/app/[lng]/layout';
import Experiences from '@/components/experiences/Experiences';
import profileImg from '@/public/images/profile2.png';
import Image from 'next/image';
import { aboutPageData, staticAboutData } from '@/lib/constants';
import { Container } from '@/components/containers/Container';
import Link from 'next/link';
import { ResumeIcon } from '@/components/icons/Icons';

export default async function Page({ params }: SharedPageProps) {
  const { t } = await createTranslation(params.lng, 'translation');
  const translatedData = { ...aboutPageData[params.lng], ...staticAboutData };
  return (
    <Container className='py-10'>
      <h1 className='mb-4 text-3xl md:text-6xl font-bold'>{t('aboutMe')}</h1>
      <article className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4'>
        <div className='pt-4 h-min xl:sticky xl:top-0 col-span-1 flex flex-col items-center mr-auto'>
          <Image
            alt='ahmet ulutaş profile image'
            width={500}
            height={500}
            src={profileImg}
            className='w-full h-auto rounded-full'
          />
          <h3 className='text-2xl pt-4 pb-2'>{translatedData.name}</h3>
          <h3 className='text-gray-600 dark:text-dark-text/50'>{t('softwareDev')}</h3>
          <p className='text-gray-600 dark:text-dark-text/50'>{translatedData.currentCompany}</p>

          <Link href='/cv.pdf' target='_blank' className='btn-primary flex gap-2 items-center'>
            <ResumeIcon className='inline-block' />
            {t('resume')}
          </Link>
        </div>

        <section className='col-span-3 pt-4'>
          <p className='text-lg leading-8'>{translatedData.aboutMe}</p>
          <Experiences language={params.lng} />
        </section>
      </article>
    </Container>
  );
}
