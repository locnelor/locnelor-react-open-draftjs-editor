import {
  H1,
  H2,
  H3,
  ListNumbers,
  ListTwo,
  Quote,
  Strikethrough,
  TagOne,
  TextBold,
  TextItalic,
  TextUnderline,
} from '@icon-park/react';
import React from 'react';
const IconMap = {
  BOLD: <TextBold />,
  ITALIC: <TextItalic />,
  UNDERLINE: <TextUnderline />,
  STRIKETHROUGH: <Strikethrough />,
  TAG: <TagOne />,
  'header-one': <H1 />,
  'header-two': <H2 />,
  'header-three': <H3 />,
  blockquote: <Quote />,
  'ordered-list-item': <ListNumbers />,
  'unordered-list-item': <ListTwo />,
};

const useIcon = (key: keyof typeof IconMap) => {
  return IconMap[key];
};
export default useIcon;
