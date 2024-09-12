import { Container } from '@/app/[lng]/components/containers/Container';
import React from 'react';

const Loading = () => {
  return (
    <Container>
      <div role='status' className='grid gap-4 animate-pulse my-10'>
        <div className='h-10 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[95%]' />
        <div className='h-10 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[88%]' />
        <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[94%]' />
        <div className='h-80 bg-gray-200 rounded-md dark:bg-gray-700' />
        <div className='h-10 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[91%]' />
        <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[92%]' />
        <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[90%]' />
        <span className='sr-only'>Loading...</span>
      </div>
    </Container>
  );
};

export default Loading;
