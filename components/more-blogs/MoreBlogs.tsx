'use client';
import { BlogPost } from '@/sanity/sanity-lib/queries';
import React from 'react';
import { useTranslation } from '@/i18n/client';

import BlogCard from '../blog-card/BlogCard';

type MoreBlogsProps = {
  moreBlogs: Array<BlogPost>;
  locale: string;
};
export default function MoreBlogs({ moreBlogs, locale }: MoreBlogsProps) {
  const { t } = useTranslation(locale, 'translation');
  return (
    <section className='my-6 grid'>
      <h2 className='text-3xl font-bold my-6'>{t('moreBlogs')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {moreBlogs.map((blog) => (
          <BlogCard locale={locale} key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
