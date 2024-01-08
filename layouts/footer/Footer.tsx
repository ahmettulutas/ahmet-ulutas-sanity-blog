'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { Container } from '@/components/containers/Container';
import { useParams } from 'next/navigation';
import { LocaleType } from '@/i18n/settings';

import ConnectLinks from '../../components/connect-links/ConnectLinks';
import SubscribeForm from '../../components/subscribe-form/SubscribeForm';

export default function Footer() {
  const locale = useParams()?.locale as LocaleType;
  const { t } = useTranslation(locale, 'translation');

  return (
    <footer>
      <Container className='mt-16 mb-2'>
        <div className='rounded-2xl bg-dark-bg dark:bg-brandDark/90 flex flex-col items-center text-dark-text dark:text-light-text '>
          <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
            {t('footerHeading')}
          </h3>
          <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
            {t('footerDescription')}
          </p>
          <SubscribeForm />
          <ConnectLinks />
          <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-center'>
            <Link href='/sitemap.xml' className='text-center underline my-4 md:my-0'>
              sitemap.xml
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
