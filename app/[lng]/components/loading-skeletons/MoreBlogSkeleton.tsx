import React from 'react';

const MoreBlogsSkeleton = () => {
  return (
    <div role='status' className='grid gap-2 animate-pulse my-2'>
      <div className=' bg-gray-200 dark:bg-gray-700 rounded-xl h-7 my-6 w-full' />
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className='flex gap-2 w-full'>
          <div className='h-20 w-20 rounded-xl bg-gray-200 dark:bg-gray-700' />
          <div className='flex flex-col gap-2 w-full'>
            <div className=' bg-gray-200 dark:bg-gray-700 rounded-xl h-5 w-full' />
            <div className='bg-gray-200 dark:bg-gray-700 rounded-xl h-5 w-full' />
          </div>
        </div>
      ))}
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default MoreBlogsSkeleton;
