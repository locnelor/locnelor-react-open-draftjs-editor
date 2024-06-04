import { styled } from '@stitches/react';
import Draft from 'draft-js';
import * as Immutable from 'immutable';
import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import UiModal from '../components/UiModal';

const HeaderOneWrapper = ({ children, type, ...props }: any) => {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const id = type + '_' + props['data-offset-key'].split('-')[0];
    if (ref.current) ref.current.id = id;
  }, [children, type, props]);
  return (
    <h1 ref={ref} style={{ fontWeight: 'bold' }} {...props}>
      {children}
    </h1>
  );
};
// bg-base-200 pl-2 pr-2 border-l-2 border-blue-500
const Blockquote = styled('div', {
  // --tw-bg-opacity: 1
  paddingLeft: '4px',
  paddingRight: '4px',
  borderLeft: '2px solid #3f51bf',
});
export const RichEditorDefaultContext = {
  language: 'zh',
  styleMap: {
    TAG: {
      marginLeft: '5px',
      marginRight: '5px',
      background: '#000a2008',
      color: '#262626bf',
      borderRadius: '5px',
      borderWidth: '1px',
      padding: '2px',
    },
    BOLD: {
      fontWeight: 900,
      marginLeft: 3,
      marginRight: 3,
    },
  },
  blockRenderMap: Draft.DefaultDraftBlockRenderMap.merge(
    Immutable.Map({
      'header-one': {
        wrapper: <HeaderOneWrapper type="h1" style={{ fontSize: '34px' }} />,
      },
      'header-two': {
        wrapper: <HeaderOneWrapper type="h2" style={{ fontSize: '30px' }} />,
      },
      'header-three': {
        wrapper: <HeaderOneWrapper type="h3" style={{ fontSize: '26px' }} />,
      },
      blockquote: {
        wrapper: <Blockquote />,
      },
    }),
  ),
};
type OpenModalProps = PropsWithChildren<{
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  footer?: ReactNode;
  onOk?: () => void;
}>;
type OpenModalType = (
  props: OpenModalProps,
) => React.Dispatch<React.SetStateAction<boolean>>;
export type RichEditorContextType = typeof RichEditorDefaultContext & {
  openModal?: OpenModalType;
};
export const RichEditorContext = createContext(
  RichEditorDefaultContext as RichEditorContextType,
);
export const RichEditorConsumer = RichEditorContext.Consumer;
export const RichEditorProvider = ({
  children,
  value,
}: PropsWithChildren<{
  value: RichEditorContextType;
}>) => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<OpenModalProps>({});
  const openModal: OpenModalType = useCallback((props) => {
    setOpen(true);
    setProps(props);
    return setOpen;
  }, []);
  return (
    <RichEditorContext.Provider
      value={{
        ...value,
        openModal,
      }}
    >
      <UiModal open={open} onOpenChange={setOpen} {...props} />
      {children}
    </RichEditorContext.Provider>
  );
};
