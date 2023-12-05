import { BlogPost } from '@/sanity/lib/queries';
import Link from 'next/link';

import PostDate from '../post-date/PostDate';
import CoverImage from '../sanity-image/CoverImage';

type BlogCardProps = {
  blog: BlogPost;
  currntLocale: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, currntLocale }) => {
  return (
    <article className='h-full'>
      <Link
        href={`/${currntLocale}/blogs/${blog.slug}`} /* you need to ad currentlocale to prevent previous locale page caching */
        className='group flex justify-between flex-col gap-4 rounded-xl'
      >
        <CoverImage
          height={300}
          width={500}
          image={blog.coverImage}
          wrapperStyles='rounded-xl overflow-hidden'
          imageStyles='group-hover:scale-105 object-cover object-center transition-all ease duration-300'
        />
        <h3 className='hover:underline text-2xl font-semibold'>{blog.title}</h3>
        <PostDate dateString={blog.date} />
        <p className='leading-7 font-light'>{blog.excerpt}</p>
      </Link>
    </article>
  );
};

export default BlogCard;
