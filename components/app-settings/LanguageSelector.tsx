'use client';
import React from 'react';
import { AppSettings } from '.';
import { languages } from '@/i18n/settings';
import { usePathname, useRouter } from 'next/navigation';
import { generatePathName } from '@/helpers/helpers';

export const LanguageSelector = ({ currentLocale }: AppSettings) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <select
        className='mb-2 w-full cursor-pointer p-1 rounded-md dark:border-2 dark:border-white text-center shadow dark:bg-dark-bg'
        defaultValue={currentLocale}
        onChange={(event) => {
          router.push(
            `/${String(event.target.value)}/${generatePathName(pathname)}`
          );
        }}
      >
        {languages?.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
