'use client';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CodeBlock from '../code-blocks/CodeBlocks';
import { TypedObject } from 'sanity';
import HydrateWrapper from '../hydrate-wrapper/HydrateWrapper';

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <h1 className='text-2xl '> {value?.imageUrl}</h1>
    ),
    text: ({ value }: any) => {
      return <u>{value}</u>;
    },
    code: ({ value }: any) => (
      <HydrateWrapper>
        <CodeBlock {...{ ...value }} />
      </HydrateWrapper>
    ),
  },
};

const PostContent = ({ content }: { content: TypedObject }) => {
  return <PortableText value={content} components={myPortableTextComponents} />;
};

export default PostContent;
