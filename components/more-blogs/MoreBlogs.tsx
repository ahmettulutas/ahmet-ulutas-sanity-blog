import { Blog } from '@/sanity/lib/queries';
import React from 'react';
import BlogCard from '../blog-card/BlogCard';
import { useServerSideTranslation } from '@/i18n';

type MoreBlogsProps = {
  moreBlogs: Array<Blog>;
  currentLanguage: string;
};
const MoreBlogs: React.FC<MoreBlogsProps> = async ({
  moreBlogs,
  currentLanguage,
}) => {
  const { t } = await useServerSideTranslation(currentLanguage, 'translation');
  return (
    <section className='my-10 grid'>
      <h2 className='text-3xl font-bold my-6'>{t('moreBlogs')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {moreBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default MoreBlogs;
