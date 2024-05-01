import React from "react"
import { useCallback } from "react"
import { BaseProps } from "react-open-rich-editor"
import { insertBlock } from "react-open-rich-editor/hooks/useBlock"
import useLanguage from "react-open-rich-editor/hooks/useLanguage"
import withAtomic from "./withAtomic"
import { styled } from "@stitches/react"
import { UiButtonGroupItem } from "react-open-rich-editor/components/UiButton"


const UiDivider = styled("div", {
    width: "100%",
    marginTop: "2px",
    marginBottom: "2px",
    padding: "0",
    border: "1px solid #000"
})
export const AtomicBlockDivider = withAtomic(() => {
    return (
        <UiDivider />
    )
})
export const DividerBlockName = "dividerBlock"
const DividerBlock = ({
    onChange,
    editorState
}: BaseProps) => {
    const { atomic } = useLanguage()
    const onMouseDown = useCallback(() => {
        insertBlock(onChange, editorState, DividerBlockName, {})
    }, [editorState, onChange])
    return (
        <UiButtonGroupItem
            value="Divider"
            title={atomic.divider}
            onMouseDown={onMouseDown}
        >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </UiButtonGroupItem>
    )
}
export default DividerBlock