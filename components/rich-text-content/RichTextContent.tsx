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
      <div>
        <SanityImage
          image={value}
          alt={value.alt}
          classesWrapper='relative aspect-[16/9]'
        />
        {value?.caption && (
          <div className='font-sans text-sm text-gray-600'>{value.caption}</div>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <HydrateWrapper>
        <CodeBlock {...{ ...value }} />
      </HydrateWrapper>
    ),
  },
};

const RichTextContent = ({ content }: { content: TypedObject }) => {
  return <PortableText value={content} components={myPortableTextComponents} />;
};

export default RichTextContent;
