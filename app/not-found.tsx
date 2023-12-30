import { Container } from '@/components/containers/Container';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { cookieName, fallbackLng } from '@/i18n/settings';

import error from '../public/images/error.svg';
//  This Page is created to catch all not found routes, since my not-found route
// is inside [lng] I needed this

const NotFound = () => {
  const cookieStore = cookies();
  const lang = cookieStore.get(cookieName);
  return (
    <html lang='en'>
      <body>
        <Header currentLocale='en' />
        <Container>
          <Header currentLocale={lang?.value ? lang.value : fallbackLng} />
          <div className='h-screen w-full grid place-items-center'>
            <div className='flex flex-col gap-2 max-w-40'>
              <Image
                className='m-auto'
                src={error}
                alt='not-found-error'
                width={200}
                height={200}
              />
              <h1 className='text-xl md:text-2xl text-center'>
                Opps. You have navigated to an incorrect Url.
              </h1>
              <Link href='/' className='btn-primary m-auto px-4 py-1'>
                Go Back
              </Link>
            </div>
          </div>
        </Container>
        <Footer language='en' />
      </body>
    </html>
  );
};

export default NotFound;
