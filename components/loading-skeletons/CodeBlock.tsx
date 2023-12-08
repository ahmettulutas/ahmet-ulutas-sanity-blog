import React from 'react';

const CodeBlockSkeleton = () => {
  return (
    <div role='status' className='grid gap-4 animate-pulse my-4 w-full'>
      <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default CodeBlockSkeleton;
