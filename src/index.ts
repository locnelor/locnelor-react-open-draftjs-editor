import { EditorState } from 'draft-js';
export type BaseProps<T = any> = {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
} & T;

export { default as RichEditor } from './RichEditor';
export type { RichEditorProps, RichEditorType } from './RichEditor';
export {
  RichEditorConsumer,
  RichEditorContext,
  RichEditorDefaultContext,
  RichEditorProvider,
} from './libs/provider';

export {
  blockKeys,
  insertBlock,
  insertText,
  mergeBlock,
  setBlock,
  default as useBlock,
} from './hooks/useBlock';
export {
  useCurrentColor,
  default as useCurrentStyle,
} from './hooks/useCurrentStyle';
export { default as useEditorState } from './hooks/useEditorState';
export { default as useIcon } from './hooks/useIcon';
export { inlineKeys, setInline, default as useInline } from './hooks/useInline';
export { default as useLanguage } from './hooks/useLanguage';
export { default as withBlock } from './toolbars/block/withBlock';
export { default as LinkDecorator } from './toolbars/decorators/LinkDecorator';
export { default as withDecorator } from './toolbars/decorators/withDecorator';

export {
  AtomicBlockCode,
  default as CodeBlock,
  CodeBlockName,
} from './toolbars/atomic/CodeBlock';

export {
  AtomicBlockImage,
  default as ImageBlock,
  ImageBlockName,
} from './toolbars/atomic/ImageBlock';

export {
  AtomicBlockDivider,
  default as DividerBlock,
  DividerBlockName,
} from './toolbars/atomic/DividerBlock';

export {
  AtomicBlockMath,
  default as MathBlock,
  MathBlockName,
} from './toolbars/atomic/MathBlock';

export {
  AtomicBlockTable,
  default as TableBlock,
  TableBlockName,
} from './toolbars/atomic/TableBlock';

export type { BlockKeys } from './hooks/useBlock';
export type { InlineKeys } from './hooks/useInline';

import OpenRithEditor from './OpenRithEditor';
export default OpenRithEditor;
