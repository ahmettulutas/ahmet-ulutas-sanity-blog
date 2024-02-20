'use client';
import { BlogPost } from '@/sanity/sanity-lib/queries';
import React from 'react';
import { useTranslation } from '@/i18n/client';
import { LocaleType } from '@/i18n/settings';

import BlogCard from '../blog-card/BlogCard';

type MoreBlogsProps = {
  moreBlogs: Array<BlogPost>;
  locale: LocaleType;
};

export default function MoreBlogs({ moreBlogs, locale }: MoreBlogsProps) {
  const { t } = useTranslation(locale, 'translation');
  return (
    <section className='my-6 grid'>
      <h4 className='text-lg md:text-2xl font-bold my-6'>{t('moreBlogs')}</h4>
      <div className='flex flex-col gap-2'>
        {moreBlogs.map((blog) => (
          <BlogCard vertical={false} locale={locale} key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
