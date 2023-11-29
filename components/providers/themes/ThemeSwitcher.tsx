'use client';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/i18n/client';
import HydrateWrapper from '@/components/hydrate-wrapper/HydrateWrapper';

type ThemeSwitcherProps = {
  currentLocale: string;
};
const ThemeSwitcher = ({ currentLocale }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation(currentLocale, 'common');

  return (
    <HydrateWrapper>
      <select
        aria-label='toggle theme'
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className='w-full cursor-pointer p-1 rounded-md text-center dark:bg-dark-bg shadow-sm hover:shadow-md dark:shadow-white'
      >
        <option value='system'>{t('system')}</option>
        <option value='dark'>{t('dark')}</option>
        <option value='light'>{t('light')}</option>
      </select>
    </HydrateWrapper>
  );
};

export default ThemeSwitcher;
