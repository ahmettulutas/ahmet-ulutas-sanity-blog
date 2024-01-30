import React from 'react';
import { personalLinks } from '@/lib/constants';

import { GithubIcon, GmailIcon, LinkedinIcon } from '../icons/Icons';

export default function ConnectLinks() {
  return (
    <div className=' hidden sm:flex items-center'>
      <a
        href={personalLinks.github}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Check my profile on Github'
        target='_blank'
      >
        <GithubIcon className='hover:scale-125 transition-all ease duration-200 dark:fill-dark-text w-full h-auto' />
      </a>
      <a
        href={personalLinks.linkedin}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Reach out to me via LinkedIn'
        target='_blank'
      >
        <LinkedinIcon className='hover:scale-125 transition-all ease duration-200 w-full h-auto' />
      </a>
      <a
        href={personalLinks.gmail}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Reach out to me via Twitter'
        target='_blank'
      >
        <GmailIcon className='hover:scale-125 transition-all ease duration-200 w-full h-auto' />
      </a>
    </div>
  );
}
