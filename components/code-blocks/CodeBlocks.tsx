import { changeLanguage } from 'i18next';
import { Highlight, themes } from 'prism-react-renderer';

const theme = 'light';

type CodeProps = {
  code: string;
  filename: string;
  language: string;
};
const RenderCodeBlock: React.FC<CodeProps> = ({ code, filename, language }) => {
  if (!code) return <></>;
  const defaultLanguage = 'tsx';
  return (
    <div className='rounded-2xl p-4 bg-gray-100 my-4'>
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
            className={`${className} overflow-x-auto p-4 rounded-2xl`}
          >
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
