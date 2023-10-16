'use client';

import React from 'react';

type ThemeCtx = {
  theme: 'dark' | 'light';
  // eslint-disable-next-line no-unused-vars
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeCtx | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<ThemeCtx['theme']>('dark');
  // eslint-disable-next-line no-unused-vars
  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <main className={`${theme} dark:bg-${theme} dark:text-${theme}`}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
