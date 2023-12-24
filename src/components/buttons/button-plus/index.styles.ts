import { StyleSheet } from 'react-native';

import {
  BUTTON_SIZE,
  BUTTON_SIZES,
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
  BUTTON_LAYOUT,
} from 'themes/constants';

export const styles = StyleSheet.create({
  button: {
    ...BUTTON_SIZE[BUTTON_SIZES.SMALL],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
    ...BUTTON_LAYOUT,
  },
});
