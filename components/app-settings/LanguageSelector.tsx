'use client';
import React from 'react';
import { languages } from '@/i18n/settings';
import { usePathname, useRouter } from 'next/navigation';
import { omitLocaleFromPath } from '@/lib/helpers';

import { AppSettingsProps } from '.';

export const LanguageSelector = ({ currentLocale, dynamicLinks }: AppSettingsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const defaultLocaleRoutes = languages.map((lang) => (
    <option key={lang} value={lang}>
      {lang.toUpperCase()}
    </option>
  ));
  const dynamicLocaleRoutes = dynamicLinks?.map(({ language }) => (
    <option key={language} value={language}>
      {language.toUpperCase()}
    </option>
  ));
  const handleDynamicNavigation = (locale: string) => {
    // This function is used to n avigate the user to the related slug of a blog post when language is changed.
    const dynamicSlug = dynamicLinks?.find(({ language }) => language === locale)?.slug;
    if (!dynamicSlug) return router.push(`/${String(locale)}`);
    return router.push(`/${String(locale)}/blogs/${dynamicSlug}`);
  };

  return (
    <select
      aria-label='select-language'
      className='btn-primary cursor-pointer px-4'
      defaultValue={currentLocale}
      onChange={({ target }) => {
        dynamicLocaleRoutes
          ? handleDynamicNavigation(target.value)
          : router.push(`/${String(target.value)}/${omitLocaleFromPath(pathname)}`);
      }}
    >
      {dynamicLocaleRoutes ?? defaultLocaleRoutes}
    </select>
  );
};
