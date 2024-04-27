import { EditorState } from "draft-js"
export type BaseProps<T = any> = {
    editorState: EditorState,
    onChange: (editorState: EditorState) => void
} & T

export type {
    RichEditorProps,
    RichEditorType
} from "./RichEditor"
export { default as RichEditor } from "./RichEditor"
export {
    RichEditorDefaultContext,
    RichEditorConsumer,
    RichEditorProvider,
    RichEditorContext
} from "./libs/provider"

export { default as withDecorator } from "./toolbars/decorators/withDecorator"
export { default as withBlock } from "./toolbars/block/withBlock"
export { setBlock, default as useBlock, blockKeys } from "./hooks/useBlock"
export { default as useEditorState } from "./hooks/useEditorState"
export { default as useLanguage } from "./hooks/useLanguage"
export { default as useIcon } from "./hooks/useIcon"
export { default as useInline, setInline, inlineKeys } from "./hooks/useInline"
export { default as useCurrentStyle, useCurrentColor } from "./hooks/useCurrentStyle"

export type { InlineKeys } from "./hooks/useInline"
export type { BlockKeys } from "./hooks/useBlock"


import OpenRithEditor from "./OpenRithEditor"
export default OpenRithEditor

