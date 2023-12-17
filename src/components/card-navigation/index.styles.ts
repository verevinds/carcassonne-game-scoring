import { StyleSheet } from 'react-native';

import { COLORS, SHADOW_2, SPACING } from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.BACKGROUND_50,
    marginRight: SPACING.SPACING_4,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOW_2,
  },
  gradient: {
    borderRadius: 60,
    width: 60,
    height: 60,
    overflow: 'hidden',
  },
  selected: {
    backgroundColor: COLORS.SECONDARY_500,
  },
});
