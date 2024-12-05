'use client';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/app/[lng]/components/icons/Icons.js';
import { cn } from '@/lib/helpers';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isThemeLight = theme === 'light';
  return (
    <button
      onClick={() => setTheme(isThemeLight ? 'dark' : 'light')}
      className={cn(
        'w-6 h-6 ease flex items-center justify-center rounded-full p-1',
        isThemeLight ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
      )}
      aria-label='theme-switcher'
    >
      {isThemeLight ? (
        <MoonIcon className={'fill-dark-bg'} />
      ) : (
        <SunIcon className={'fill-dark-bg'} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
