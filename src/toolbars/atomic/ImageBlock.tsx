import { Pic } from '@icon-park/react';
import React, { useCallback, useEffect } from 'react';
import { BaseProps } from 'react-open-rich-editor';
import { UiButtonGroupItem } from 'react-open-rich-editor/components/UiButton';
import useLanguage from 'react-open-rich-editor/hooks/useLanguage';
import withAtomic from './withAtomic';

export type ImageBlockProps = {
  url: string;
};
export const AtomicBlockImage = withAtomic<ImageBlockProps>(() => {
  return <div>image</div>;
});

export const ImageBlockName = 'imageBlock';
const ImageBlock = ({ editorState, onChange }: BaseProps) => {
  const { atomic } = useLanguage();
  useEffect(() => {
    //从剪切板粘贴图片
  }, []);
  const onMouseDown = useCallback(() => {
    //打开文件选择图片文件后添加
    // insertBlock(onChange, editorState, ImageBlockName, {
    // })
  }, [editorState, onChange]);
  return (
    <UiButtonGroupItem
      value={ImageBlockName}
      title={atomic.image}
      onMouseDown={onMouseDown}
    >
      <Pic />
    </UiButtonGroupItem>
  );
};
export default ImageBlock;
