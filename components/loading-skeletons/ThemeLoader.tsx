import React from 'react';

const ThemeSkeleton = () => {
  return (
    <div role='status' className='grid gap-4 animate-pulse w-6 h-6 rounded-full'>
      <div className='bg-gray-200 dark:bg-gray-700 rounded-full' />
      <span className='sr-only'>Theme Switch Loading...</span>
    </div>
  );
};
export default ThemeSkeleton;
