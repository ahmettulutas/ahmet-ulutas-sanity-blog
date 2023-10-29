'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      aria-label='toggle theme'
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className='w-full cursor-pointer p-1 rounded-md dark:border-2 dark:border-white text-center shadow dark:bg-dark-bg'
    >
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSwitcher;
