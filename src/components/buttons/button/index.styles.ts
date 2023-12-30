import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
  BUTTON_LAYOUT,
} from 'themes/constants';

export const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
  },
  large: {
    ...BUTTON_SIZE.LARGE,
  },
  medium: {
    ...BUTTON_SIZE.MEDIUM,
  },
  small: {
    ...BUTTON_SIZE.SMALL,
  },
  primary: {
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
  },
  outline: {
    ...BUTTON_VARIANT[BUTTON_VARIANTS.OUTLINE],
  },
  primaryText: {
    color: COLORS.BACKGROUND_50,
  },
  outlineText: {
    color: COLORS.SECONDARY_500,
  },
  button: {
    ...BUTTON_LAYOUT,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: BUTTON_VARIANT.PRIMARY.borderRadius,
  },
  text: {
    textAlign: 'center',
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  disabled: { opacity: 0.5 },
  icon: { marginLeft: 10 },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0.25,
  },
});
