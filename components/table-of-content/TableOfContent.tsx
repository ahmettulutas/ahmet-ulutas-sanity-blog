'use client';

type Heading = {
  _key: string;
  children?: Heading[];
  subheadings?: Heading[];
  text?: string;
};

type TableOfContentsProps = {
  headings: Heading[];
  language?: string;
};

const getChildrenText = (props: { children: (string | { text?: string })[] }) =>
  props?.children?.map((node) => (typeof node === 'string' ? node : node.text || '')).join('');

export default function TableOfContent({ headings }: TableOfContentsProps) {
  return (
    <ul className='ml-6'>
      {headings?.map((heading: any) => (
        <li className='list-disc-reset' key={heading._key}>
          <a href={'#' + heading._key}>{getChildrenText(heading)}</a>
          {heading?.children?.length > 0 && <TableOfContent headings={heading.subheadings} />}
        </li>
      ))}
    </ul>
  );
}
