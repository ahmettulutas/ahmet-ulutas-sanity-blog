import ThemeSwitcher from '@/themes/ThemeSwitcher';

import { languages } from '@/i18n/settings';
import { AppSettingsMobile } from './AppSettingsMobile';
import { LanguageSelector } from './LanguageSelector';

export type AppSettings = { currentLocale: string };

export const AppSettings = ({ currentLocale }: { currentLocale: string }) => {
  return languages && languages.length > 1 ? (
    <>
      <div className='hidden md:block'>
        <LanguageSelector currentLocale={currentLocale} />
        <ThemeSwitcher currentLocale={currentLocale} />
      </div>

      <div className='block md:hidden'>
        <AppSettingsMobile currentLocale={currentLocale} />
      </div>
    </>
  ) : null;
};
