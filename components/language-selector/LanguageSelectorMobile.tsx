'use client';
import { useTranslation } from '@/i18n/client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineClose } from 'react-icons/ai';
import { LanguageSelectorType } from '.';
import { languages } from '@/i18n/settings';
import { generatePathName } from '@/helpers/helpers';
import { BsGlobeAmericas } from 'react-icons/bs';

export const LanguageSelectorMobile = ({
  currentLocale,
}: LanguageSelectorType) => {
  const router = useRouter();
  const pathname = usePathname();
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
        title={t('common.languageDrawer')}
        onClick={() => setShowDrawer((currentState) => !currentState)}
        aria-expanded={showDrawer}
        aria-controls='locale-drawer'
      >
        <BsGlobeAmericas width='18px' height='18px' className='mr-1 ml-1' />
      </button>

      {/*      <FocusLock disabled={!showDrawer} returnFocus={true}> */}
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
          'fixed top-0 right-0 z-40 h-full w-[80vw] bg-white dark:bg-black py-8 px-5 duration-300 ease-in-out ',
          showDrawer ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center'>
          <h2 className='text-xl font-semibold'>{t('appSettings')}</h2>
          <button className='ml-auto pl-2' onClick={() => setShowDrawer(false)}>
            <AiOutlineClose width='18px' height='18px' variant='secondary' />
          </button>
        </div>
        <p className='mt-8 text-base font-semibold text-colorBlack'>
          {' '}
          {t('language')}
        </p>
        <select
          className='mt-2 block w-full rounded-md border border-gray300 py-2 px-2 text-sm'
          defaultValue={currentLocale}
          onChange={(event) => {
            router.push(
              `/${String(event.target.value)}/${generatePathName(pathname)}`
            );
          }}
        >
          {languages?.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
