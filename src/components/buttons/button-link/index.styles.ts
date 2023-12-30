import { StyleSheet } from 'react-native';

import {
  TYPOGRAPHY,
  BUTTON_SIZE,
  BUTTON_SIZES,
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
  BUTTON_LAYOUT,
} from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    ...BUTTON_SIZE[BUTTON_SIZES.LARGE],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
    ...BUTTON_LAYOUT,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  icon: { marginLeft: 10 },
});
