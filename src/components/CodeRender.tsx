import { styled } from '@stitches/react';
import React, { useMemo, useState } from 'react';
import { CodeBlockProps } from '../toolbars/atomic/CodeBlock';
const CodeContainer = styled('div', {
  background: '#0f172a',
  borderRadius: '5px',
  color: '#ccc',
  padding: '10px',
});
const CodeHeader = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  overflowX: 'auto',
  height: '50px',
});
const CodeHeaderItem = styled('div', {
  borderRadius: '5px',
  cursor: 'pointer',
  lineHeight: '35px',
  height: '35px',
  paddingLeft: '6px',
  paddingRight: '6px',
  transition: '.2s',
  '&:hover': {
    background: '#3f51bf',
  },
  variants: {
    checked: {
      true: {
        background: '#3f51bf',
      },
    },
  },
});

const CodeRender = ({
  codes,
  onDoubleClick,
}: CodeBlockProps & {
  onDoubleClick: () => void;
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const __html = useMemo(
    () => codes[currentLanguage].__html,
    [currentLanguage],
  );
  return (
    <CodeContainer onDoubleClick={onDoubleClick}>
      {codes.length !== 1 && (
        <CodeHeader>
          {codes.map(({ language }, key) => (
            <CodeHeaderItem
              onClick={() => setCurrentLanguage(key)}
              key={key}
              checked={currentLanguage === key}
            >
              {language}
            </CodeHeaderItem>
          ))}
        </CodeHeader>
      )}
      <code>
        <pre className="break-normal" dangerouslySetInnerHTML={{ __html }} />
      </code>
    </CodeContainer>
  );
};

export default CodeRender;
