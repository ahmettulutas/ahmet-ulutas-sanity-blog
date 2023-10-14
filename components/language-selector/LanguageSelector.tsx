
"use client"
import { LanguageSelectorDesktop } from './LanguageSelectorDesktop';
import { LanguageSelectorMobile } from './LanguageSelectorMobile';
import { languages } from '@/i18n/settings';

export type LanguageSelectorType = { currentLocale: string }


export const LanguageSelector = ({ currentLocale }: {currentLocale: string}) => {
  return languages && languages.length > 1 ? (
    <>
      <div className="hidden md:block">
        <LanguageSelectorDesktop currentLocale={currentLocale} />
      </div>

      <div className="block md:hidden">
        <LanguageSelectorMobile currentLocale={currentLocale} />
      </div>
    </>
  ) : null;
};
