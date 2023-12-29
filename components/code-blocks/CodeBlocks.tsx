'use client';
import { useCopyToClipboard } from '@/hooks';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { LocaleTypes } from '@/i18n/settings';

import { CopiedIcon, CopyIcon, JavaScriptIcon, TypeScriptIcon } from '../icons/Icons';

type CodeProps = {
  code: string;
  filename: string;
  language: LocaleTypes;
};
const defaultCodeLanguage = 'typescript';

const codeTheme = {
  light: themes.github,
  dark: themes.oneDark,
};

const LanguageIcons: Record<string, React.ReactNode> = {
  typescript: <TypeScriptIcon className={'text-2xl'} />,
  javascript: <JavaScriptIcon className={'text-2xl'} />,
};

export default function RenderCodeBlock({ code, filename, language: codeLanguage }: CodeProps) {
  const { isCopied, copy } = useCopyToClipboard();
  const { theme } = useTheme();
  if (!code) return <></>;

  return (
    <div className='rounded-2xl p-2 md:p-4 dark:bg-gray-700 bg-gray-100 my-4 relative'>
      <div className='w-full grid gap-1 grid-cols-twoIcons my-1 items-center text-sm md:text-lg'>
        <span className='opacity-70'>
          {codeLanguage ? LanguageIcons[codeLanguage] : LanguageIcons[defaultCodeLanguage]}
        </span>
        <p className='opacity-70 leading-4'>{filename}</p>
        <button aria-label='copy-to-clipboard' className='text-xl ml-2' onClick={() => copy(code)}>
          {isCopied ? <CopiedIcon className={''} /> : <CopyIcon className={''} />}
        </button>
      </div>

      <Highlight
        theme={codeTheme[theme as keyof typeof codeTheme]}
        code={code}
        language={codeLanguage ?? defaultCodeLanguage}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={`${className} relative overflow-x-auto p-0 md:p-4 pt-8 md:pt-4 rounded-2xl`}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className='m-1'>
                <span className='mr-2'>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
