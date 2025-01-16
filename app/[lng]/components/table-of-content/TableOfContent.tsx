'use client';

type HeadingLink = {
  _key: string;
  children?: HeadingLink[];
  subheadings?: HeadingLink[];
  text?: string;
};

type TableOfContentsProps = {
  headings?: HeadingLink[];
  language?: string;
};

const getChildrenText = (props: HeadingLink) =>
  props?.children?.map((node) => (typeof node === 'string' ? node : node.text || '')).join('');

export default function TableOfContent({ headings }: TableOfContentsProps) {
  return (
    <ul className='ml-6'>
      {headings?.map((heading) => (
        <li className='list-disc-reset' key={heading._key}>
          <a href={'#' + heading._key}>{getChildrenText(heading)}</a>
          {heading?.children && heading?.children?.length > 0 && (
            <TableOfContent headings={heading.subheadings} />
          )}
        </li>
      ))}
    </ul>
  );
}
