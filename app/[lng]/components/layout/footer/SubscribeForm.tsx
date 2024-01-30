'use client';
import { useTranslation } from '@/i18n/client';
import { LocaleType } from '@/i18n/settings';
import { useParams } from 'next/navigation';
import React, { FormEvent } from 'react';

const SubscribeForm = () => {
  const locale = useParams()?.locale as LocaleType;
  const { t } = useTranslation(locale, 'translation');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='my-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark-bg p-1 sm:p-2 rounded mx04 flex-wrap md:flex-nowrap gap-2'
      >
        <input
          type='email'
          placeholder={t('enterYourEmail')}
          className='px-2 w-full bg-transparent pl-2 sm:pl-0 text-dark-text focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
        />

        <button
          type='submit'
          className=' bg-dark-bg cursor-pointer rounded px-3 sm:px-5 py-1 text-dark-text'
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
