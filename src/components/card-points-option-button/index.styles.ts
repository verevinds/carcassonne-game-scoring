import { StyleSheet } from 'react-native';

import { COLORS, SHADOW_2, SPACING, TYPOGRAPHY } from 'themes/constants';

export const styles = StyleSheet.create({
  title: {
    ...TYPOGRAPHY.HEADER_2,
    marginBottom: SPACING.SPACING_4,
  },
  button: {
    width: 50,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW_2,
  },
  ellipsisButton: {
    backgroundColor: COLORS.SECONDARY_500,
  },
});
