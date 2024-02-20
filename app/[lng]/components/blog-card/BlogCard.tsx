import { BlogPost } from '@/sanity/sanity-lib/queries';
import Link from 'next/link';
import { LocaleType } from '@/i18n/settings';
import { twMerge } from 'tailwind-merge';

import PostDate from '../post-date/PostDate';
import CoverImage from '../sanity-image/CoverImage';

type BlogCardProps = {
  blog: BlogPost;
  locale: LocaleType;
  vertical: boolean;
};

export default function BlogCard({ blog, locale, vertical }: BlogCardProps) {
  return (
    <article className='h-full'>
      <Link
        href={`/${locale}/blogs/${blog.slug}`} /* I needed to add current locale to prevent previous locale page caching */
        className={twMerge('group flex gap-2 rounded-xl', vertical ? 'flex-col' : '')}
      >
        <CoverImage
          height={1000}
          width={1000}
          image={blog.coverImage}
          wrapperStyles={twMerge(
            'rounded-xl overflow-hidden relative',
            vertical ? '' : 'w-20 h-20'
          )}
          imageStyles='group-hover:scale-105 object-cover object-center transition-all ease duration-300'
        />
        <div className='flex flex-col'>
          <h2 className='font-semibold text-base sm:text-lg'>
            <span
              className='bg-gradient-to-r from-brand/50 to-brand/50  dark:from-brandDark/90
              dark:to-brandDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'
            >
              {blog.title}
            </span>
          </h2>
          <PostDate dateString={blog.date} />
        </div>
      </Link>
    </article>
  );
}
