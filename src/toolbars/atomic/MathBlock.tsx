import { Formula } from '@icon-park/react';
import React, { useCallback } from 'react';
import { BaseProps, insertBlock } from 'react-open-rich-editor';
import { UiButtonGroupItem } from 'react-open-rich-editor/components/UiButton';
import useLanguage from 'react-open-rich-editor/hooks/useLanguage';
import withAtomic from './withAtomic';

export type MathBlockProps = {
  context: string;
};
export const AtomicBlockMath = withAtomic<MathBlockProps>(() => {
  return <div>双击编辑公式</div>;
});

export const MathBlockName = 'mathBlock';
const MathBlock = ({ editorState, onChange }: BaseProps) => {
  const { atomic } = useLanguage();
  const onMouseDown = useCallback(() => {
    insertBlock(onChange, editorState, MathBlockName, {
      context: '双击编辑公式',
    });
  }, [editorState, onChange]);
  return (
    <UiButtonGroupItem
      value={MathBlockName}
      title={atomic.math}
      onMouseDown={onMouseDown}
    >
      <Formula />
    </UiButtonGroupItem>
  );
};
export default MathBlock;
