import { StyleSheet } from 'react-native';

import { BUTTON, SPACING } from 'themes/constants';

export const styles = StyleSheet.create({
  button: {
    ...BUTTON.SMALL_OUTLINE,
    marginRight: SPACING.SPACING_4,
  },
});
