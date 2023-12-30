import { Container } from '@/components/containers/Container';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <Container>
      <div className='h-screen w-full grid place-items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl md:text-4xl text-center'>
            You have navigated to an incorrect URL.
          </h1>
          <h2 className='text-xl md:text-2xl text-center'>Apologies :/</h2>
          <Link href='/' className='btn-primary m-auto'>
            Go Back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
