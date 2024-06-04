import { Code } from '@icon-park/react';
import React, { useCallback, useContext } from 'react';
import {
  BaseProps,
  RichEditorContext,
  insertBlock,
  useLanguage,
} from 'react-open-rich-editor';
import { UiButtonGroupItem } from 'react-open-rich-editor/components/UiButton';
import CodeRender from '../../components/CodeRender';
import withAtomic from './withAtomic';

export type CodeBlockProps = {
  codes: {
    language: string;
    context: string;
    __html: string;
  }[];
};
export const AtomicBlockCode = withAtomic<CodeBlockProps>(
  ({
    block,
    data,
    blockProps: { readOnly, editorState, onChange },
    contentState,
  }) => {
    const { openModal } = useContext(RichEditorContext);

    const onDoubleClick = useCallback(() => {
      if (readOnly) return;
      if (!openModal) return;
      openModal({
        children: <div>asdSAd</div>,
      });
      console.log(data);
    }, [readOnly, editorState, onChange, block, contentState]);
    return (
      <div>
        <CodeRender codes={data.codes} onDoubleClick={onDoubleClick} />
      </div>
    );
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
          __html: '双击编辑代码',
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
