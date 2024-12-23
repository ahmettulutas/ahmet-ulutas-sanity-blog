'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { Container } from '@/app/[lng]/components/containers/Container';
import { useParams } from 'next/navigation';
import { LocaleType } from '@/i18n/settings';

import ConnectLinks from '../../connect-links/ConnectLinks';
import SubscribeForm from './SubscribeForm';

export default function Footer(/* { locale }: { locale: string } */) {
  const locale = useParams()?.lng as LocaleType;
  const { t } = useTranslation(locale, 'translation');

  return (
    <footer>
      <Container className='mt-16 mb-2'>
        <div className='rounded-2xl bg-dark-bg dark:bg-brandDark/90 flex flex-col items-center text-dark-text dark:text-light-text '>
          <h3 className='mt-16 font-medium dark:font-bold text-center text-2xl sm:text-3xl lg:text-4xl px-4'>
            {t('footerHeading')}
          </h3>
          <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
            {t('footerDescription')}
          </p>
          <SubscribeForm />
          <div className='flex items-center gap-3'>
            <ConnectLinks size='lg' />
          </div>
          <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-center'>
            <Link
              href='/sitemap.xml'
              className='text-center underline my-4 md:my-0'
              title={'sitemap'}
            >
              sitemap.xml
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
