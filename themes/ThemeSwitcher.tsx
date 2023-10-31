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
      className='w-full cursor-pointer p-1 rounded-md text-center dark:bg-dark-bg shadow-sm hover:shadow-md dark:shadow-white'
    >
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSwitcher;
