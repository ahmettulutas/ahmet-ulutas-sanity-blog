'use client';
import { useTranslation } from '@/i18n/client';
import { experiences } from '@/lib/constants';
import React from 'react';

export default function Experiences({ language }: { language: string }) {
  const { t } = useTranslation(language, 'translation');
  return (
    <div>
      <h3 className='my-4 text-2xl md:text-4xl font-bold'>{t('experiences')}</h3>
      <article>
        {experiences.map((item) => {
          const translated = item[language as keyof typeof item];
          return (
            <div key={translated.companyName} className='mt-6 mx-2 md:mx-4 leading-8'>
              <div className='flex gap-1 text-xl'>
                <p className='text-brand dark:text-brandDark'>{translated.title}</p>
                <span>@</span>
                <span>{translated.companyName}</span>
              </div>
              <span className='text-sm text-gray-600 dark:text-dark-text/50 m-2'>
                {translated.date}
              </span>
              <section className='m-2'>
                {translated.responsibilities.map((item) => (
                  <div className='flex gap-2 my-2 text-lg' key={item.id}>
                    <span className='text-brand dark:text-brandDark'>+</span>
                    <p>{item.tag}</p>
                  </div>
                ))}
              </section>
            </div>
          );
        })}
      </article>
    </div>
  );
}
