'use client';
import React, { FormEvent } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';

import ConnectLinks from '../connect-links/ConnectLinks';
import { Container } from '../container';

const Footer = ({ language }: { language: string }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const { t } = useTranslation(language, 'translation');
  return (
    <Container>
      <footer className='mt-16 rounded-2xl bg-dark-bg dark:bg-brandDark/90 flex flex-col items-center text-dark-text dark:text-light-text'>
        <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
          {t('footerHeading')}
        </h3>
        <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
          {t('footerDescription')}
        </p>

        <form
          onSubmit={handleSubmit}
          className='my-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark-bg p-1 sm:p-2 rounded mx04'
        >
          <input
            type='email'
            placeholder='Enter your email'
            className='px-2 w-full bg-transparent pl-2 sm:pl-0 text-dark-text focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
          />

          <input
            type='submit'
            className='bg-dark-bg cursor-pointer font-medium rounded px-3 sm:px-5 py-1 text-dark-text'
          />
        </form>
        <ConnectLinks />

        <div className='w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-center'>
          <Link href='/sitemap.xml' className='text-center underline my-4 md:my-0'>
            sitemap.xml
          </Link>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
