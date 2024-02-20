import React from 'react';
import { personalLinks } from '@/lib/constants';

import { GithubIcon, GmailIcon, LinkedinIcon, YoutubeIcon } from '../icons/Icons';

type ConnectLinksProps = {
  size: 'sm' | 'lg';
};

export default function ConnectLinks(props: ConnectLinksProps) {
  const anchorSize = props.size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <>
      <a
        href={personalLinks.youtube}
        className={`inline-block ${anchorSize}`}
        aria-label='Check my Youtube channel'
        target='_blank'
      >
        <YoutubeIcon className='animate-bounce hover:scale-125 transition-all ease duration-200 dark:fill-dark-text w-full h-auto' />
      </a>
      <a
        href={personalLinks.github}
        className={`inline-block ${anchorSize}`}
        aria-label='Check my profile on Github'
        target='_blank'
      >
        <GithubIcon className='hover:scale-125 transition-all ease duration-200 dark:fill-dark-text w-full h-auto' />
      </a>
      <a
        href={personalLinks.linkedin}
        className={`inline-block  ${anchorSize}`}
        aria-label='Reach out to me via LinkedIn'
        target='_blank'
      >
        <LinkedinIcon className='hover:scale-125 transition-all ease duration-200 w-full h-auto' />
      </a>
      <a
        href={personalLinks.gmail}
        className={`inline-block  ${anchorSize}`}
        aria-label='Reach out to me via Gmail'
        target='_blank'
      >
        <GmailIcon className='hover:scale-125 transition-all ease duration-200 w-full h-auto' />
      </a>
    </>
  );
}
