import { BlogPost } from '@/sanity/sanity-lib/queries';
import Link from 'next/link';
import React from 'react';
import { LocaleType } from '@/i18n/settings';

import CoverImage from '../sanity-image/CoverImage';
import Tag from '../tags/Tags';

type BlogCoverSectionProps = {
  blog: BlogPost;
  locale: LocaleType;
};

export default function BlogCoverSection({ blog, locale }: BlogCoverSectionProps) {
  return (
    <div className='w-full inline-block text-white'>
      <article className='flex flex-col items-start justify-end relative h-[50vh] md:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-overlaydark rounded-3xl z-0' />
        <CoverImage
          fill
          height={500}
          width={1000}
          priority
          imageStyles='object-center object-cover rounded-3xl -z-10'
          wrapperStyles='-z-10 absolute w-full h-full'
          image={blog.coverImage}
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light overflow-hidden'>
          <Tag name={blog.category} className='px-6 text-sm py-2' />
          <Link className='mt-6' href={`/${locale}/blogs/${blog.slug}`}>
            <h1 className='font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span
                className='bg-gradient-to-r from-brand to-brand dark:from-brandDark/90 
                dark:to-brandDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
              >
                {blog.title}
              </span>
            </h1>
          </Link>
        </div>
      </article>
    </div>
  );
}
