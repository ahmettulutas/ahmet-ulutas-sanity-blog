import { Blog } from '@/sanity/lib/queries';
import SanityImage from '../sanity-image/SanityImage';
import Link from 'next/link';
import PostDate from '../post-date/PostDate';
import AuthorAvatar from '../author-avatar/AuthorAvatar';

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className='h-full'>
      <Link href={blog.slug} className='flex justify-between flex-col gap-4'>
        <div className='shadow-md transition-shadow duration-200 hover:shadow-lg'>
          <SanityImage image={blog.coverImage} />
        </div>
        <h3 className='hover:underline text-2xl'>{blog.title}</h3>
        <PostDate dateString={blog.date} />
        <p>{blog.excerpt}</p>
        <AuthorAvatar {...{ ...blog.author }} />
      </Link>
    </article>
  );
};

export default BlogCard;
