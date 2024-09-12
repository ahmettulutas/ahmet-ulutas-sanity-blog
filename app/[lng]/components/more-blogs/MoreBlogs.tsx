import React from 'react';
import { LocaleType } from '@/i18n/settings';
import { createTranslation } from '@/i18n';
import { getMoreBlogs } from '@/sanity/sanity-lib/sanity-client-fns';

import BlogCard from '../blog-card/BlogCard';

type MoreBlogsProps = {
  locale: LocaleType;
  slug: string;
};

export default async function MoreBlogs({ locale, slug }: MoreBlogsProps) {
  const { t } = await createTranslation(locale, 'translation');
  const moreBlogs = await getMoreBlogs(slug, locale);
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
