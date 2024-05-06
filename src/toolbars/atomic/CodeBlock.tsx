import { Code } from '@icon-park/react';
import React, { useCallback } from 'react';
import { BaseProps, insertBlock, useLanguage } from 'react-open-rich-editor';
import { UiButtonGroupItem } from 'react-open-rich-editor/components/UiButton';
import withAtomic from './withAtomic';

export type CodeBlockProps = {
  codes: {
    language: string;
    context: string;
  }[];
};
export const AtomicBlockCode = withAtomic<CodeBlockProps>(
  (
    {
      // block,
      // data,
      // blockProps: {
      //     readOnly,
      //     editorState,
      //     onChange
      // },
      // contentState
    },
  ) => {
    return <div>双击编辑代码</div>;
  },
);
export const CodeBlockName = 'codeBlock';
const CodeBlock = ({ editorState, onChange }: BaseProps) => {
  const { atomic } = useLanguage();
  const onMouseDown = useCallback(() => {
    insertBlock(onChange, editorState, CodeBlockName, {
      codes: [
        {
          language: 'base',
          context: '双击编辑代码',
        },
      ],
    });
  }, [editorState, onChange]);
  return (
    <UiButtonGroupItem
      value={CodeBlockName}
      title={atomic.code}
      onMouseDown={onMouseDown}
    >
      <Code />
    </UiButtonGroupItem>
  );
};

export default CodeBlock;
