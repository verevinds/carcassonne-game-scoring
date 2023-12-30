import { StyleSheet } from 'react-native';

import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_LAYOUT,
  SPACING,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from 'themes/constants';

export const styles = StyleSheet.create({
  button: {
    ...BUTTON_SIZE[BUTTON_SIZES.SMALL],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.OUTLINE],
    ...BUTTON_LAYOUT,
    marginRight: SPACING.SPACING_4,
  },
});
