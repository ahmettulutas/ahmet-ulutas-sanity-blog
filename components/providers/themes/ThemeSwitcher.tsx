'use client';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons/Icons.js';
import { twMerge } from 'tailwind-merge';
import HydrateWrapper from '@/components/hydrate-wrapper/HydrateWrapper';
import ThemeSkeleton from '@/components/loading-skeletons/ThemeLoader';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <HydrateWrapper loader={<ThemeSkeleton />}>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={twMerge(
          'w-6 h-6 ease flex items-center justify-center rounded-full p-1',
          theme === 'light' ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
        )}
        aria-label='theme-switcher'
      >
        {theme === 'light' ? (
          <MoonIcon className={'fill-dark-bg'} />
        ) : (
          <SunIcon className={'fill-dark-bg'} />
        )}
      </button>
    </HydrateWrapper>
  );
};

export default ThemeSwitcher;
