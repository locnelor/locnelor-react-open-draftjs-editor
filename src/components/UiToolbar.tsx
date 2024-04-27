import * as Toolbar from '@radix-ui/react-toolbar';
import { blackA, mauve } from '@radix-ui/colors';
import { styled } from '@stitches/react';

const UiToolbar = styled(Toolbar.Root, {
    display: 'flex',
    padding: 10,
    width: '100%',
    minWidth: 'max-content',
    borderRadius: 6,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
});
export const UiToolbarSeparator = styled(Toolbar.Separator, {
    width: 1,
    backgroundColor: mauve.mauve6,
    margin: '0 10px',
});
export default UiToolbar