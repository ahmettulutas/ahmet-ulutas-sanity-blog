
import { changeLanguage } from 'i18next';
import { Highlight, themes } from 'prism-react-renderer';

const theme = "light"

type CodeProps = {
  code: string;
  filename: string;
  language: string;
}
const RenderCodeBlock: React.FC<CodeProps> = ({ code, filename, language }) => {
  const defaultLanguage = "tsx"

if(!code) return <></> 
  return (
    <div>
      <div className="flex justify-between">
        <p className="opacity-70">{filename}</p>
        <p>
          language: <span className="opacity-70">{language}</span>
        </p>
      </div>
  <Highlight
    theme={/* themes.oneDark : */ themes.oceanicNext} /* TODO */
    code={code}
    language={language ?? defaultLanguage}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style} className={`${className} overflow-x-auto`}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            <span className='mr-4'>{i + 1}</span>
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
