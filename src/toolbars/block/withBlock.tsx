import React from "react";
import { useCallback } from "react";
import { UiButtonGroupItem } from "../../components/UiButton";
import { BlockKeys, setBlock, useBlock, useIcon, BaseProps, useLanguage } from "react-open-rich-editor"



const withBlock = (block: BlockKeys) => {
    const Block = ({
        editorState,
        onChange
    }: BaseProps) => {
        const { } = useLanguage();
        const check = useBlock(editorState, block);
        const icon = useIcon(block)
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
            onChange(setBlock(editorState, block))
        }, [editorState, onChange])
        return (
            <UiButtonGroupItem
                onMouseDown={onMouseDown}
                check={check}
                title={block}
                value={block}
            >
                {icon}
            </UiButtonGroupItem>
        )
    }
    return Block
}
export default withBlock