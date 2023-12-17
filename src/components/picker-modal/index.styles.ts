import { StyleSheet } from 'react-native';

import { COLORS, SHADOW_1, SPACING, TYPOGRAPHY } from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: COLORS.BACKGROUND_50,
    justifyContent: 'center',
    height: 270,
    paddingVertical: SPACING.SPACING_4,
    ...SHADOW_1,
  },
  title: {
    paddingHorizontal: SPACING.SPACING_6,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  done: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.SECONDARY_500,
    height: 40,
  },
  text: {
    ...TYPOGRAPHY.PARAGRAPH_1,
    color: COLORS.SECONDARY_500,
    height: 40,
  },
  picker: {
    backgroundColor: COLORS.BACKGROUND_50,
    width: '100%',
    height: 200,
  },
});
