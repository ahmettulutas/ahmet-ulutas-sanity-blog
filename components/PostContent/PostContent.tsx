'use client';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CodeBlock from '../code-blocks/CodeBlocks';
import { TypedObject } from 'sanity';

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <h1 className='text-2xl '> {value?.imageUrl}</h1>
    ),
    text: ({ value }: any) => {
      console.log({ value });
      return <u>{value}</u>;
    },
    code: ({ value }: any) => <CodeBlock {...{ ...value }} />,
  },
};

const PostContent = ({ content }: { content: TypedObject }) => {
  return <PortableText value={content} components={myPortableTextComponents} />;
};

export default PostContent;
