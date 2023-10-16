import { useCopyToClipboard } from '@/hooks';
import { Highlight, themes } from 'prism-react-renderer';
import { BiCopy, BiCopyAlt } from 'react-icons/bi';

type CodeProps = {
  code: string;
  filename: string;
  language: string;
};

const RenderCodeBlock: React.FC<CodeProps> = ({ code, filename, language }) => {
  const { isCopied, copy } = useCopyToClipboard();
  if (!code) return <></>;
  const defaultLanguage = 'tsx';
  return (
    <div className='rounded-2xl p-4 bg-gray-100 my-4 relative'>
      <div className='flex justify-between my-1'>
        <p className='opacity-70'>{filename}</p>
        <p>
          Language:{' '}
          <span className='opacity-70'>{language ?? defaultLanguage}</span>
        </p>
      </div>

      <Highlight
        theme={/* themes.oneDark : */ themes.oneLight} /* TODO */
        code={code}
        language={language ?? defaultLanguage}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={`${className} overflow-x-auto p-4 rounded-2xl relative`}
          >
            <button
              className='absolute right-4 top-2 text-2xl'
              onClick={() => copy(code)}
            >
              {isCopied ? <BiCopyAlt /> : <BiCopy />}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className='m-1'>
                <span className='mx-2'>{i + 1}</span>
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
