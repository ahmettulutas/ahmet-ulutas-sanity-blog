'use client';

import Link from 'next/link';

import React, { KeyboardEvent, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BsGlobeAmericas } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { LanguageSelectorType } from '.';
import { languages } from '@/i18n/settings';
import { usePathname } from 'next/navigation';
import { generatePathName } from '@/helpers/helpers';
import { useClickOutside } from '@/hooks';

export const LanguageSelectorDesktop = ({
  currentLocale,
}: LanguageSelectorType) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(containerRef, setIsOpen);

  const handleMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();

        setIsOpen((currentState) => !currentState);
        break;
      case 'Escape':
        e.preventDefault();

        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMenuItemKeydown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.stopPropagation();
        e.preventDefault();

        e.currentTarget?.click();

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        e.stopPropagation();
        e.preventDefault();

        const items = [...(menuRef.current?.children || [])];

        if (e.key === 'ArrowUp') {
          (items?.[index - 1] || items?.[items.length - 1])
            ?.querySelector('a')
            ?.focus();
        }

        if (e.key === 'ArrowDown') {
          (items?.[index + 1] || items?.[0])?.querySelector('a')?.focus();
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className='relative' ref={containerRef}>
      <button
        aria-haspopup='true'
        aria-expanded={isOpen}
        aria-controls='menu-locale'
        className='flex items-center font-normal uppercase shadow dark:border-2 dark:border-white rounded-md'
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <BsGlobeAmericas width='18px' height='18px' className='mr-1 ml-1' />
        {currentLocale}
        {isOpen ? (
          <AiOutlineDown className='pl-1' width='18px' height='18px' />
        ) : (
          <AiOutlineUp className='pl-1' width='18px' height='18px' />
        )}
      </button>
      <ul
        ref={menuRef}
        className={twMerge(
          'top-100 absolute right-0 z-10 w-24 translate-y-3 cursor-pointer rounded-md bg-white dark:bg-black dark:border-2 dark:border-white text-center text-base shadow',
          isOpen ? 'block' : 'hidden'
        )}
        id='menu-locale'
        role='menu'
        onKeyDown={handleMenuKeyDown}
      >
        {languages?.map((lang, index) => (
          <li key={lang} role='none'>
            <Link
              onKeyDown={(e) => handleMenuItemKeydown(e, index)}
              role='menuitem'
              className='block py-2'
              href={`/${lang}/${generatePathName(pathname)}`}
              locale={lang}
              onClick={() => setIsOpen(false)}
            >
              {lang.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
