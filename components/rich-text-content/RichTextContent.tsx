'use client';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CodeBlock from '../code-blocks/CodeBlocks';
import { TypedObject } from 'sanity';
import HydrateWrapper from '../hydrate-wrapper/HydrateWrapper';
import SanityImage from '../sanity-image/SanityImage';

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className='my-4 p-2 shadow-md dark:shadow-none'>
        <SanityImage
          image={value}
          alt={value.alt}
          classesWrapper='relative aspect-[16/9]'
        />
        {value?.caption && (
          <figcaption className='text-xs text-right'>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    code: ({ value }: any) => (
      <HydrateWrapper>
        <CodeBlock {...{ ...value }} />
      </HydrateWrapper>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className='text-2xl'>{children}</h1>,
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-purple-500'>{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className='my-2'>{children}</p>,
  },
  marks: {
    em: ({ children }: any) => <em className='font-semibold'>{children}</em>,
    link: ({ value, children }: any) => {
      /*  todo */
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className=' text-blue-700 dark:text-blue-600'
          rel={target === '_blank' ? 'noindex nofollow' : ''}
        >
          {children}
        </a>
      );
    },
    code: ({ children }: any) => (
      <code className='bg-gray-100 dark:bg-gray-600 rounded-md p-1'>
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className='my-6 ml-6'>{children}</ul>,
    number: ({ children }: any) => <ol className='my-4 ml-6'>{children}</ol>,
    checkmarks: ({ children }: any) => (
      <ol className='m-auto text-lg'>{children}</ol>
    ),
    p: ({ children }: any) => <p className='text-2xl'>{children}</p>,
  },
};

const RichTextContent = ({ content }: { content: TypedObject }) => {
  // check the npm package for more details. https://www.npmjs.com/package/@portabletext/react
  return (
    <article className='leading-7 font-light'>
      <PortableText value={content} components={myPortableTextComponents} />
    </article>
  );
};

export default RichTextContent;
