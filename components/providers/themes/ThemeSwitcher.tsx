'use client';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/i18n/client';

type ThemeSwitcherProps = {
  currentLocale: string;
};
const ThemeSwitcher = ({ currentLocale }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation(currentLocale, 'common');

  return (
    <select
      aria-label='toggle theme'
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className='btn-primary cursor-pointer px-4'
    >
      <option value='system'>{t('system')}</option>
      <option value='dark'>{t('dark')}</option>
      <option value='light'>{t('light')}</option>
    </select>
  );
};

export default ThemeSwitcher;
