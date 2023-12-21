'use client';
import { PortableText } from '@portabletext/react';
import React from 'react';
import { TypedObject } from 'sanity';
import Link from 'next/link';

import CodeBlock from '../code-blocks/CodeBlocks';
import SanityImage from '../sanity-image/SanityImage';
import { LinkArrowIcon } from '../icons/Icons';

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className='my-4 p-2 shadow-md dark:shadow-none'>
        <SanityImage image={value} alt={value.alt} wrapperStyles='relative h-auto' />
        {value?.caption && <figcaption className='text-xs text-right'>{value.caption}</figcaption>}
      </figure>
    ),
    code: ({ value }: any) => <CodeBlock {...{ ...value }} />,
  },
  block: (props: any) => {
    const { node, children } = props;
    // Protect against a blank node.style property
    const style = node?.style || 'normal';
    // find the heading blocks (style == h1,h2,h3 etc)
    if (/^h\d/.test(style)) {
      // set the heading tag (h1,h2,h3,etc)
      const HeadingTag = style;
      return (
        // use the node key as the id, it's guaranteed unique
        // one can also slugify the children spans if one want
        // nicer URLs
        <HeadingTag id={node._key} className='text-2xl lg:text-3xl font-bold my-6'>
          {children} <Link href={`#${node._key}`}>#</Link>
        </HeadingTag>
      );
    }
    if (style === 'blockquote') return <blockquote>{children}</blockquote>;
    if (style === 'normal') return <p className='my-2 text-lg leading-8 prose-big'>{children}</p>;
  },
  marks: {
    em: ({ children }: any) => <em className='font-semibold'>{children}</em>,
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className=' text-blue-700 dark:text-blue-600'
          rel={target === '_blank' ? 'noindex nofollow' : ''}
        >
          <span className='inline-flex items-center'>
            {children}
            <LinkArrowIcon className={'inline-block'} />
          </span>
        </a>
      );
    },
    code: ({ children }: any) => (
      <code className='bg-gray-100 dark:bg-gray-600 rounded-md px-1 m-1 leading-2'>{children}</code>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className='my-6 ml-6 leading-8 text-lg'>{children}</ul>,
    number: ({ children }: any) => {
      return (
        <ol className='my-4 ml-6'>
          {children.map((child: any) => (
            <li key={child.key} className='list-decimal-reset leading-8 text-lg ml-2'>
              {child.props.children}
            </li>
          ))}
        </ol>
      );
    },
    checkmarks: ({ children }: any) => <ol className='m-auto text-lg'>{children}</ol>,
    p: ({ children }: any) => <p className='text-lg'>{children}</p>,
  },
};

const RichTextContent = ({ content }: { content: TypedObject }) => {
  // check the npm package for more details. https://www.npmjs.com/package/@portabletext/react
  return (
    <article className='leading-7 font-500'>
      <PortableText value={content} components={myPortableTextComponents} />
    </article>
  );
};

export default RichTextContent;
