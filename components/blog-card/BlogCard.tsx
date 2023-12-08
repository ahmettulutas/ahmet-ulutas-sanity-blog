import { BlogPost } from '@/sanity/sanity-lib/queries';
import Link from 'next/link';

import PostDate from '../post-date/PostDate';
import CoverImage from '../sanity-image/CoverImage';

type BlogCardProps = {
  blog: BlogPost;
  currntLocale: string;
};

export default function BlogCard({ blog, currntLocale }: BlogCardProps) {
  return (
    <article className='h-full'>
      <Link
        href={`/${currntLocale}/blogs/${blog.slug}`} /* you need to ad currentlocale to prevent previous locale page caching */
        className='group flex justify-between flex-col gap-2 rounded-xl'
      >
        <CoverImage
          height={300}
          width={500}
          image={blog.coverImage}
          wrapperStyles='rounded-xl overflow-hidden relative'
          imageStyles='group-hover:scale-105 object-cover object-center transition-all ease duration-300'
        />
        <h2 className='font-semibold capitalize  text-base sm:text-lg'>
          <span
            className='bg-gradient-to-r from-brand/50 to-brand/50  dark:from-brandDark/50
              dark:to-brandDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
          >
            {blog.title}
          </span>
        </h2>
        <PostDate dateString={blog.date} />
      </Link>
    </article>
  );
}
