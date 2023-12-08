import React from 'react';

import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons/Icons';
const personalLinks = {
  linkedin: 'https://www.linkedin.com/in/ahmet-ulutas/',
  twitter: 'https://www.linkedin.com/in/ahmet-ulutas/',
  github: 'https://github.com/ahmettulutas/',
};
export default function ConnectLinks() {
  return (
    <div className=' hidden sm:flex items-center'>
      <a
        href={personalLinks.github}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Check my profile on Github'
        target='_blank'
      >
        <GithubIcon className='hover:scale-125 transition-all ease duration-200 dark:fill-dark-text' />
      </a>
      <a
        href={personalLinks.linkedin}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Reach out to me via LinkedIn'
        target='_blank'
      >
        <LinkedinIcon className='hover:scale-125 transition-all ease duration-200' />
      </a>
      <a
        href={personalLinks.twitter}
        className='inline-block w-6 h-6 mr-4'
        aria-label='Reach out to me via Twitter'
        target='_blank'
      >
        <TwitterIcon className='hover:scale-125 transition-all ease duration-200' />
      </a>
    </div>
  );
}
