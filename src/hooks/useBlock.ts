import {
  AtomicBlockUtils,
  ContentBlock,
  EditorState,
  Entity,
  Modifier,
  RichUtils,
} from 'draft-js';
import { useMemo } from 'react';

export type BlockKeys =
  | 'header-one'
  | 'header-two'
  | 'header-three'
  | 'blockquote'
  | 'ordered-list-item'
  | 'unordered-list-item';
export const blockKeys = [
  'header-one',
  'header-two',
  'header-three',
  'blockquote',
  'ordered-list-item',
  'unordered-list-item',
] as const;

export const setBlock = (editorState: EditorState, blockType: BlockKeys) => {
  return RichUtils.toggleBlockType(editorState, blockType);
};
const useBlock = (editorState: EditorState, style: BlockKeys) => {
  const currentBlockType = useMemo(() => {
    try {
      const selection = editorState.getSelection();
      return (
        editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType() === style
      );
    } catch (e) {
      return false;
    }
  }, [editorState]);
  return currentBlockType;
};

export const insertBlock = (
  onChange: (e: EditorState) => void,
  editorState: EditorState,
  blockName: string,
  data: any,
) => {
  const entityKey = Entity.create(blockName, 'IMMUTABLE', data);
  const state = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
  onChange(state);
};
export const mergeBlock = (
  block: ContentBlock,
  editorState: EditorState,
  data: any,
) => {
  const key = block.getEntityAt(0);
  const content = editorState.getCurrentContent();
  const newContent = content.mergeEntityData(key, data);
  return EditorState.push(editorState, newContent, 'change-block-data');
};
export const insertText = (
  onChange: (e: EditorState) => void,
  editorState: EditorState,
  text: string,
) => {
  const state = Modifier.insertText(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    text,
  );
  onChange(EditorState.push(editorState, state, 'insert-characters'));
};

export default useBlock;
