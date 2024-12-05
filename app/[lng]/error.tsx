'use client';
import { Container } from '@/app/[lng]/components/containers/Container';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/[lng]/components/layout/header';
import { LocaleType, defaultLanguage } from '@/i18n/settings';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import errorImage from '../../public/images/error.svg';

// eslint-disable-next-line no-unused-vars
const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const lang = useParams()?.lng as LocaleType;
  const { t } = useTranslation(lang, 'translation');
  return (
    <Container>
      <Header currentLocale={lang || defaultLanguage} />
      <div className='my-10 w-full grid place-items-center'>
        <div className='flex flex-col gap-2 max-w-[400px]'>
          <Image src={errorImage} className='m-auto' alt='error-icon' width={200} height={200} />
          <h1 className='text-xl md:text-xl text-center'>{t('errorOccured')}</h1>
          {error?.message && <p className='text-center'>{error?.message}</p>}
          <Link href='/' className='m-auto'>
            <button className='btn-primary m-auto px-4 py-1'>{t('goBack')}</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error;
