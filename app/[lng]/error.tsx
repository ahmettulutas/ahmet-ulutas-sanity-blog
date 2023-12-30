'use client';
import { Container } from '@/components/containers/Container';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/header/Header';
import { fallbackLng } from '@/i18n/settings';

import errorImage from '../../public/images/error.svg';

// eslint-disable-next-line no-unused-vars
const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <Container>
      <Header currentLocale={fallbackLng} />
      <div className='h-screen w-full grid place-items-center'>
        <div className='flex flex-col gap-2 max-w-40'>
          <Image
            src={errorImage}
            className='m-auto'
            alt='not-found-error'
            width={200}
            height={200}
          />
          <h1 className='text-xl md:text-2xl  text-center'>
            Looks like some things are not correct.
          </h1>
          {error?.message && <p className='text-center'>Error : {error?.message}</p>}
          <Link href='/' className='btn-primary m-auto'>
            Go Back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error;
