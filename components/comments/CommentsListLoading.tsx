import React from 'react';

const CommentsListLoading = () => {
  return (
    <div role='status' className='grid gap-4 animate-pulse my-4'>
      {Array.from({ length: 6 }).map((item, idx) => (
        <div key={idx} className='rounded-md max-w-[95%] flex gap-2'>
          <div className='bg-gray-200 dark:bg-gray-700 w-9 h-9 rounded-full' />
          <div className='rounded-md grid gap-2 w-[75%]'>
            <div className=' bg-gray-200 rounded-md dark:bg-gray-700 flex gap-2'>
              <div className='bg-gray-200 rounded-md dark:bg-gray-700 text-gray-400 h-4' />
              <div className='bg-gray-200 rounded-md dark:bg-gray-700 text-gray-400 h-4' />
            </div>
            <div className='rounded-md dark:bg-gray-700 max-w-[95%] text-gray-400 h-4' />
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      ))}
    </div>
  );
};

export default CommentsListLoading;
