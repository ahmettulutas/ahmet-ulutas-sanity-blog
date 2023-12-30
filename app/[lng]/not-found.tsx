import { Container } from '@/components/containers/Container';
import Header from '@/components/layout/header/Header';
import { cookieName, fallbackLng } from '@/i18n/settings';
import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers';
import Image from 'next/image';

import error from '../../public/images/error.svg';

const NotFound = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get(cookieName);
  return (
    <Container>
      <Header currentLocale={lang?.value ? lang.value : fallbackLng} />
      <div className='my-10 w-full grid place-items-center'>
        <div className='flex flex-col gap-2 max-w-40'>
          <Image className='m-auto' src={error} alt='not-found-error' width={200} height={200} />
          <h1 className='text-xl md:text-2xl text-center'>
            Opps. You have navigated to an incorrect Url.
          </h1>
          <Link href='/' className='btn-primary m-auto px-4 py-1'>
            Go Back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
