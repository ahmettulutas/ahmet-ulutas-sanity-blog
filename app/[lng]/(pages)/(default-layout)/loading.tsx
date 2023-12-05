import { Container } from '@/components/container';
import React from 'react';

const Loading = () => {
  return (
    <Container>
      <main className='py-16 flex flex-col items-center gap-2'>
        <h1 className='mb-4 text-4xl font-bold text-center bg-gray-200 dark:bg-gray-700 animate-pulse' />
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div role='status' className='grid gap-4 animate-pulse'>
            <div className='h-60 bg-gray-200 rounded-[3px] dark:bg-gray-700 max-w-[95%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[88%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[94%]' />
          </div>
          <div role='status' className='grid gap-4 animate-pulse'>
            <div className='h-60 bg-gray-200 rounded-[3px] dark:bg-gray-700 max-w-[95%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[88%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[94%]' />
          </div>
          <div role='status' className='grid gap-4 animate-pulse'>
            <div className='h-60 bg-gray-200 rounded-[3px] dark:bg-gray-700 max-w-[95%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[88%]' />
            <div className='h-6 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[94%]' />
          </div>
        </section>
        <span className='sr-only'>Loading...</span>
      </main>
    </Container>
  );
};

export default Loading;
