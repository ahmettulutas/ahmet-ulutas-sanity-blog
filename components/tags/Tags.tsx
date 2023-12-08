import React from 'react';
import { twMerge } from 'tailwind-merge';

type TagProps = { name: string; className: string };

const Tag = (props: TagProps) => {
  const { className, name } = props;
  return (
    <div
      className={twMerge(
        'inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark-bg text-dark-text rounded-full capitalize font-semibold border-2 border-solid border-light text-sm sm:text-base',
        className
      )}
    >
      {name}
    </div>
  );
};

export default Tag;
