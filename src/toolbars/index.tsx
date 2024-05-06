import { BackgroundColor, Text } from '@icon-park/react';
import React from 'react';
import {
  BaseProps,
  CodeBlock,
  DividerBlock,
  ImageBlock,
  MathBlock,
  TableBlock,
  blockKeys,
  inlineKeys,
} from 'react-open-rich-editor';
import { UiButtonGroup } from '../components/UiButton';
import UiToolbar, { UiToolbarSeparator } from '../components/UiToolbar';
import withBlock from './block/withBlock';
import ColorInline from './inline/ColorInline';
import LinkInline from './inline/LinkInline';
import WithInline from './inline/withInline';

const Color = (rest: any) => {
  return (
    <ColorInline {...rest} type="color">
      <Text />
    </ColorInline>
  );
};
const BgColor = (rest: any) => {
  return (
    <ColorInline {...rest} type="background">
      <BackgroundColor />
    </ColorInline>
  );
};
const toolbars = [
  [...inlineKeys.map((key) => WithInline(key))],
  'line',
  [Color, BgColor, LinkInline],
  'line',
  [...blockKeys.map((key) => withBlock(key))],
  'line',
  [DividerBlock, CodeBlock, ImageBlock, MathBlock, TableBlock],
];
//代码、图片、表格、数学
const ToolbarDemo = ({ editorState, onChange }: BaseProps) => {
  return (
    <UiToolbar>
      {toolbars.map((value, key) => {
        if (typeof value === 'string') return <UiToolbarSeparator key={key} />;
        return (
          <UiButtonGroup type="multiple" key={key}>
            {value.map((Elem, id) => (
              <Elem
                key={`${key}_${id}`}
                editorState={editorState}
                onChange={onChange}
              />
            ))}
          </UiButtonGroup>
        );
      })}
    </UiToolbar>
  );
};

export default ToolbarDemo;
