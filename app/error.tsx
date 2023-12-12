'use client';
import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl md:text-4xl'>Looks like some things are not correct.</h1>
        <h2 className='text-xl md:text-2xl text-center'>Apologies :/</h2>
        <Link href='/' className='btn-primary m-auto'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Error;
