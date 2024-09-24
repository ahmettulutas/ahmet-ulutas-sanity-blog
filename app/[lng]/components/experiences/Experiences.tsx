'use client';
import { useTranslation } from '@/i18n/client';
import { experiences } from '@/lib/constants';
import React from 'react';

import { LinkArrowIcon } from '../icons/Icons';

export default function Experiences({ language }: { language: string }) {
  const { t } = useTranslation(language, 'translation');
  return (
    <div>
      <h3 className='my-4 text-2xl md:text-4xl font-bold'>{t('experiences')}</h3>
      <article>
        {experiences.map((item) => {
          const translated = item.responsibilities[language as keyof typeof item.responsibilities];
          return (
            <div key={item.companyName} className='mt-6 mx-2 md:mx-4 leading-8'>
              <div className='flex gap-1 text-xl'>
                <p className='text-brand dark:text-brandDark'>{item.title}</p>
                <span>@</span>
                <span>{item.companyName}</span>
              </div>
              <span className='text-sm text-gray-600 dark:text-dark-text/50 m-2'>{item.date}</span>
              <section className='m-2'>
                {translated.map((item) => (
                  <div className='flex gap-2 my-2 text-lg' key={item.id}>
                    <span className='text-brand dark:text-brandDark'>+</span>
                    <p>
                      {item.tag}{' '}
                      {item.url ? (
                        <a
                          href={item?.url}
                          target='_blank'
                          className=' text-blue-600 dark:text-blue-500'
                          rel='noindex nofollow'
                        >
                          <span className='inline-flex items-center'>
                            {item.url}
                            <LinkArrowIcon className={'inline-block'} />
                          </span>
                        </a>
                      ) : null}
                    </p>
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
