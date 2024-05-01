import React from "react"
import { BaseProps, inlineKeys, blockKeys, DividerBlock } from "react-open-rich-editor"
import WithInline from "./inline/withInline"
import ColorInline from "./inline/ColorInline"
import LinkInline from "./inline/LinkInline"
import withBlock from "./block/withBlock"
import UiToolbar, { UiToolbarSeparator } from "../components/UiToolbar"
import { UiButtonGroup } from "../components/UiButton"

const Color = (rest: any) => {
    return <ColorInline {...rest} type="color" >color</ColorInline>
}
const BgColor = (rest: any) => {
    return <ColorInline {...rest} type="background" >bg</ColorInline>
}
const toolbars = [
    [...inlineKeys.map(key => WithInline(key))],
    "line",
    [Color, BgColor, LinkInline],
    "line",
    [...blockKeys.map(key => withBlock(key))],
    "line",
    [
        DividerBlock
    ]
]
//加粗、倾斜、下划线、删除线、标签√
//字体颜色、背景颜色√ 标题、链接
//左对齐、居中对齐、右对齐
//代码、分隔线、图片、表格、数学
const ToolbarDemo = ({
    editorState,
    onChange
}: BaseProps) => {

    return (
        <UiToolbar>
            {toolbars.map((value, key) => {
                if (typeof value === "string") return <UiToolbarSeparator key={key} />
                return (
                    <UiButtonGroup
                        type="multiple"
                        key={key}
                    >
                        {value.map((Elem, id) => (
                            <Elem
                                key={`${key}_${id}`}
                                editorState={editorState}
                                onChange={onChange}
                            />
                        ))}
                    </UiButtonGroup>
                )
            })}
        </UiToolbar>
    )
}






export default ToolbarDemo