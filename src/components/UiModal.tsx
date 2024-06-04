import { blackA, mauve, red, violet } from '@radix-ui/colors';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@radix-ui/react-alert-dialog';
import { keyframes, styled } from '@stitches/react';
import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import useLanguage from 'react-open-rich-editor/hooks/useLanguage';

const UiDialogTrigger = AlertDialogTrigger;
const UiDialogPortal = AlertDialogPortal;
const UiDialogCancel = AlertDialogCancel;
const UiDialogAction = AlertDialogAction;
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const UiDialogOverlay = styled(AlertDialogOverlay, {
  backgroundColor: blackA.blackA6,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const UiDialogContent = styled(AlertDialogContent, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

const UiDialogTitle = styled(AlertDialogTitle, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const UiDialogDescription = styled(AlertDialogDescription, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA4}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export type UiModalProps = PropsWithChildren<{
  Trigger?: ReactNode;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  footer?: ReactNode;
  cancelText?: string;
  okText?: string;
}>;
const UiModal = ({
  Trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  cancelText,
  okText,
  footer,
}: UiModalProps) => {
  const { modal } = useLanguage();
  const footerOkText = useMemo(
    () => (!!okText ? okText : modal.okText),
    [okText],
  );
  const footerCancelText = useMemo(
    () => (!!cancelText ? cancelText : modal.cancelText),
    [cancelText],
  );
  const footerRender = useMemo(
    () =>
      !!footer ? (
        footer
      ) : (
        <Flex css={{ justifyContent: 'flex-end' }}>
          <UiDialogCancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              {footerCancelText}
            </Button>
          </UiDialogCancel>
          <UiDialogAction asChild>
            <Button variant="red">{footerOkText}</Button>
          </UiDialogAction>
        </Flex>
      ),
    [footer, footerOkText, footerCancelText],
  );
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {!!Trigger && <UiDialogTrigger asChild>{Trigger}</UiDialogTrigger>}
      <UiDialogPortal>
        <UiDialogOverlay />
        <UiDialogContent>
          {!!title && <UiDialogTitle>{title}</UiDialogTitle>}
          {!!description && (
            <UiDialogDescription>{description}</UiDialogDescription>
          )}
          {children}
          {footerRender}
        </UiDialogContent>
      </UiDialogPortal>
    </AlertDialog>
  );
};
export default UiModal;
