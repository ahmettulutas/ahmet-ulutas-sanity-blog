import { useCopyToClipboard } from '@/hooks';
import { Highlight, themes } from 'prism-react-renderer';
import { BiCopyAlt } from 'react-icons/bi';
import { MdOutlineFileDownloadDone } from 'react-icons/md';
import { useTheme } from 'next-themes';

type CodeProps = {
  code: string;
  filename: string;
  language: string;
};
const defaultCodeLanguage = 'tsx';

const codeTheme = {
  light: themes.github,
  dark: themes.oneDark,
  system: themes.github,
};
const RenderCodeBlock: React.FC<CodeProps> = ({
  code,
  filename,
  language: codeLanguage,
}) => {
  const { isCopied, copy } = useCopyToClipboard();
  const { theme } = useTheme();

  if (!code) return <></>;
  return (
    <div className='rounded-2xl p-4 dark:bg-gray-700 bg-gray-100 my-4 relative'>
      <div className='flex justify-between my-1 flex-wrap align-middle'>
        <p className='opacity-70'>{filename}</p>
        <p>
          <span className='opacity-70'>
            {codeLanguage ?? defaultCodeLanguage}
          </span>
          <button
            aria-label='copy-to-clipboard'
            className='text-xl ml-2'
            onClick={() => copy(code)}
          >
            {isCopied ? <MdOutlineFileDownloadDone /> : <BiCopyAlt />}
          </button>
        </p>
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
};

export default RenderCodeBlock;
