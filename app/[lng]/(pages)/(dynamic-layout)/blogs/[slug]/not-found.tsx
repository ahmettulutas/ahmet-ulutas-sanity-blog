import { Container } from '@/components/containers/Container';
import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <article>
      <Header currentLocale='en' />
      <Container>
        <div className='h-screen w-full grid place-items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl md:text-4xl'>You have navigated to an incorrect URL.</h1>
            <h2 className='text-xl md:text-2xl text-center'>Apologies :/</h2>
            <Link href='/' className='btn-primary m-auto'>
              Go Back
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default NotFound;
