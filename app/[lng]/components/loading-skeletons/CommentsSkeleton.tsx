import React from 'react';

const CommentsSkeleton = () => {
  return (
    <div role='status' className='grid gap-4 animate-pulse my-4'>
      {Array.from({ length: 3 }).map((item, idx) => (
        <div key={idx} className='rounded-md max-w-[95%] flex gap-2'>
          <div className='bg-gray-200 dark:bg-gray-700 w-9 h-9 rounded-full' />
          <div className='rounded-md grid gap-2 w-[75%]'>
            <div className=' bg-gray-200 rounded-md dark:bg-gray-700 flex gap-2'>
              <div className='bg-gray-200 rounded-md dark:bg-gray-700  h-4' />
              <div className='bg-gray-200 rounded-md dark:bg-gray-700  h-4' />
            </div>
            <div className='rounded-md bg-gray-200 dark:bg-gray-700 max-w-[95%]  h-4' />
          </div>
        </div>
      ))}
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default CommentsSkeleton;
