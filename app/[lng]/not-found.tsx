'use client';
import { Container } from '@/app/[lng]/components/containers/Container';
import { LocaleType, defaultLanguage } from '@/i18n/settings';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Header from '@/app/[lng]/components/layout/header/Header';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import error from '../../public/images/error.svg';

const NotFound = () => {
  const lang = useParams().lng as LocaleType;
  const { t } = useTranslation(lang, 'translation');

  return (
    <Container>
      <Header currentLocale={lang || defaultLanguage} />
      <div className='my-10 w-full grid place-items-center'>
        <div className='flex flex-col gap-2 max-w-40'>
          <Image
            className='m-auto'
            src={error}
            alt='not-found-error'
            width={200}
            height={200}
            priority
          />
          <h1 className='text-lg md:text-xl text-center'>{t('incorrectURL')}</h1>
          <Link href='/' className='m-auto'>
            <button className='btn-primary m-auto px-4 py-1'>{t('goBack')}</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
