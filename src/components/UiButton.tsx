import { styled } from "@stitches/react"
import * as Toggle from "@radix-ui/react-toggle"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { violet, mauve } from '@radix-ui/colors';

const UiButton = styled(Toggle.Root, {
    all: 'unset',
    backgroundColor: 'white',
    color: mauve.mauve11,
    height: 35,
    width: 35,
    borderRadius: 4,
    display: 'flex',
    fontSize: 15,
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer",
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { boxShadow: `0 0 0 2px black` },
    variants: {
        check: {
            true: {
                color: "#3f51bf",
                backgroundColor: violet.violet3
            }
        }
    }
});
export const UiButtonGroup = styled(ToggleGroup.Root, {
    display: 'inline-flex',
    backgroundColor: mauve.mauve6,
    borderRadius: 4,
});

export const UiButtonGroupItem = styled(ToggleGroup.Item, {
    all: 'unset',
    backgroundColor: 'white',
    color: mauve.mauve11,
    height: 35,
    width: 35,
    display: 'flex',
    fontSize: 15,
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer",
    '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
    '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
    variants: {
        check: {
            true: {
                color: "#3f51bf",
                backgroundColor: violet.violet3
            }
        }
    }
});


export default UiButton