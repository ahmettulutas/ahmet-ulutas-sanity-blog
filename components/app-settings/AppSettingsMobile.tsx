'use client';
import { useTranslation } from '@/i18n/client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import ThemeSwitcher from '@/components/providers/themes/ThemeSwitcher';

import { AppSettingsProps } from '.';
import { LanguageSelector } from './LanguageSelector';

export const AppSettingsMobile = ({
  currentLocale,
  dynamicLinks,
}: AppSettingsProps) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { t } = useTranslation(currentLocale, 'translation');
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowDrawer(false);
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });

  return (
    <>
      <button
        className='p-4'
        title={t('common.languageDrawer')}
        onClick={() => setShowDrawer((currentState) => !currentState)}
        aria-expanded={showDrawer}
        aria-controls='locale-drawer'
      >
        <FiSettings className='mr-1 ml-1 w-6 h-6 animate-spin-slow' />
      </button>
      <div
        role='presentation'
        tabIndex={-1}
        className={twMerge(
          'fixed top-0 left-0 h-full w-full bg-black/[0.4] transition-opacity duration-150',
          showDrawer
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={() => setShowDrawer(false)}
      />
      <div
        id='locale-drawer'
        aria-modal='true'
        aria-hidden={!showDrawer}
        className={twMerge(
          'fixed top-0 right-0 z-40 h-full w-[80vw] bg-white dark:bg-dark-bg py-8 px-5 duration-300 ease-in-out',
          showDrawer ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center'>
          <h2 className='text-xl font-semibold'>{t('appSettings')}</h2>
          <button className='ml-auto pl-2' onClick={() => setShowDrawer(false)}>
            <AiOutlineClose width='18px' height='18px' variant='secondary' />
          </button>
        </div>
        <p className='mt-8'>{t('language')}</p>
        <LanguageSelector
          dynamicLinks={dynamicLinks}
          currentLocale={currentLocale}
        />
        <p>{t('theme')}</p>
        <ThemeSwitcher currentLocale={currentLocale} />
      </div>
    </>
  );
};
