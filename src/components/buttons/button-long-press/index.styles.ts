import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  BUTTON_LAYOUT,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  SHADOW_2,
  SPACING,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from 'themes/constants';

export const styles = StyleSheet.create({
  text: {
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  button: {
    ...BUTTON_LAYOUT,
    ...BUTTON_SIZE[BUTTON_SIZES.LARGE],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.SECONDARY_300,
    borderRadius: 50,
    position: 'absolute',
  },
  hint: {
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_50,
    borderRadius: 10,
    paddingHorizontal: SPACING.SPACING_6,
    paddingVertical: SPACING.SPACING_2,
    opacity: 0,
    zIndex: 100,
    ...SHADOW_2,
  },
  content: {
    overflow: 'hidden',
    flex: 1,
    ...BUTTON_SIZE[BUTTON_SIZES.LARGE],
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintText: {
    ...TYPOGRAPHY.CAPTION_2,
  },
});
