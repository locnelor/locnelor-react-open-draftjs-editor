import React, { useCallback } from "react"
import { BaseProps } from "react-open-rich-editor"
import { UiButtonGroupItem } from "../../components/UiButton"


const headingMap = {
    "header-one": "H1",
    "header-two": "H2",
    "header-three": "H3",
}
export type HeadingType = keyof typeof headingMap
const withHeading = (name: HeadingType) => {

    const Heading = ({
        editorState,
        onChange
    }: BaseProps) => {
        const onMouseDown = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
            onChange()
        }, [editorState, onChange])
        return (
            <UiButtonGroupItem
                onMouseDown={onMouseDown}
                value={name}
            >
                {headingMap[name]}
            </UiButtonGroupItem>
        )
    }
    return Heading
}
export default withHeading