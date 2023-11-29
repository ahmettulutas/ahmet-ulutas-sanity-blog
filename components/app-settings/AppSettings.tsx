import ThemeSwitcher from '@/components/providers/themes/ThemeSwitcher';
import { languages } from '@/i18n/settings';
import { DynamicLink } from '@/app/(locales)/[lng]/(pages)/(dynamic-layout)/blogs/[slug]/page';

import { AppSettingsMobile } from './AppSettingsMobile';
import { LanguageSelector } from './LanguageSelector';

export type AppSettingsProps = {
  currentLocale: string;
  dynamicLinks?: Array<DynamicLink>;
};

export const AppSettings = ({ currentLocale, dynamicLinks }: AppSettingsProps) => {
  return languages && languages.length > 1 ? (
    <>
      <div className='hidden md:block'>
        <LanguageSelector dynamicLinks={dynamicLinks} currentLocale={currentLocale} />
        <ThemeSwitcher currentLocale={currentLocale} />
      </div>

      <div className='block md:hidden'>
        <AppSettingsMobile dynamicLinks={dynamicLinks} currentLocale={currentLocale} />
      </div>
    </>
  ) : null;
};
