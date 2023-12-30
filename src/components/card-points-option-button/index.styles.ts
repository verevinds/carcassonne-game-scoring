import { StyleSheet } from 'react-native';

import {
  COLORS,
  TYPOGRAPHY,
  BUTTON_LAYOUT,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  SPACING,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from 'themes/constants';

export const styles = StyleSheet.create({
  title: {
    ...TYPOGRAPHY.HEADER_2,
    marginBottom: SPACING.SPACING_4,
  },
  button: {
    ...BUTTON_LAYOUT,
    ...BUTTON_SIZE[BUTTON_SIZES.SMALL],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
  },
  ellipsisButton: {
    backgroundColor: COLORS.SECONDARY_500,
  },
});
