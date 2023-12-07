import { BlogPost } from '@/sanity/lib/queries';
import Link from 'next/link';
import React from 'react';

import CoverImage from '../sanity-image/CoverImage';
type BlogCoverSection = {
  blog: BlogPost;
};
const BlogCoverSection = ({ blog }: BlogCoverSection) => {
  return (
    <div className='w-full inline-block text-white'>
      <article className='flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-overlaydark rounded-3xl z-0' />
        <CoverImage
          fill
          height={500}
          width={1000}
          priority
          imageStyles='w-full h-full object-center object-cover rounded-3xl -z-10'
          wrapperStyles='-z-10'
          image={blog.coverImage}
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          <Link href={`blogs/${blog.slug}`} className='mt-6'>
            <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span
                className='bg-gradient-to-r from-brand to-brand dark:from-brandDark/50 
                dark:to-brandDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
            {blog.excerpt}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogCoverSection;
