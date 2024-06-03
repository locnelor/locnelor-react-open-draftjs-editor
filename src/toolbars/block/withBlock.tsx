import React, { useCallback } from 'react';
import {
  BaseProps,
  BlockKeys,
  setBlock,
  useBlock,
  useIcon,
  useLanguage,
} from 'react-open-rich-editor';
import { UiButtonGroupItem } from '../../components/UiButton';

const withBlock = (block: BlockKeys) => {
  const Block = ({ editorState, onChange }: BaseProps) => {
    const language = useLanguage();

    const check = useBlock(editorState, block);
    const icon = useIcon(block);
    const onMouseDown = useCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        onChange(setBlock(editorState, block));
      },
      [editorState, onChange],
    );
    return (
      <UiButtonGroupItem
        onMouseDown={onMouseDown}
        check={check}
        title={language.block[block]}
        value={block}
      >
        {icon}
      </UiButtonGroupItem>
    );
  };
  return Block;
};
export default withBlock;
