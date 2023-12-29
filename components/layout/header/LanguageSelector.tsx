'use client';
import React from 'react';
import { languages } from '@/i18n/settings';
import { usePathname, useRouter } from 'next/navigation';
import { omitLocaleFromPath } from '@/lib/helpers';

import { HeaderProps } from './Header';

export const LanguageSelector = ({ currentLocale, dynamicLinks }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const defaultLocaleRoutes = languages.map((lang) => (
    <option key={lang} value={lang}>
      {lang}
    </option>
  ));

  const dynamicLocaleRoutes = dynamicLinks?.map(({ language }) => {
    if (!language) return;
    return (
      <option key={language} value={language}>
        {language}
      </option>
    );
  });

  const handleDynamicNavigation = (locale: string) => {
    // This function is used to navigate the user to the related slug of a blog post when language is changed.
    const dynamicSlug = dynamicLinks?.find(({ language }) => language === locale)?.slug;
    if (!dynamicSlug) return router.push(`/${locale}`);
    return router.push(`/${locale}/blogs/${dynamicSlug}`);
  };

  return (
    <select
      aria-label='select-language'
      className='cursor-pointer px-2 bg-transparent'
      defaultValue={currentLocale}
      onChange={({ target }) => {
        dynamicLocaleRoutes
          ? handleDynamicNavigation(target.value)
          : router.push(`/${target.value}/${omitLocaleFromPath(pathname)}`);
      }}
    >
      {dynamicLocaleRoutes ?? defaultLocaleRoutes}
    </select>
  );
};
