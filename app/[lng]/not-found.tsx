import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <div className='flex align-middle flex-col gap-2'>
        <h1 className='text-4xl'>Not Found!</h1>
        <Link href='/' className='btn-primary m-auto'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;