import { BlogPost } from '@/sanity/lib/queries';
import React from 'react';
import { useServerSideTranslation } from '@/i18n';

import BlogCard from '../blog-card/BlogCard';

type MoreBlogsProps = {
  moreBlogs: Array<BlogPost>;
  currntLocale: string;
};
const MoreBlogs: React.FC<MoreBlogsProps> = async ({ moreBlogs, currntLocale }) => {
  const { t } = await useServerSideTranslation(currntLocale, 'translation');
  return (
    <section className='my-6 grid'>
      <h2 className='text-3xl font-bold my-6'>{t('moreBlogs')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {moreBlogs.map((blog) => (
          <BlogCard currntLocale={currntLocale} key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default MoreBlogs;
