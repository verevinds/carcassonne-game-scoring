import { StyleSheet } from 'react-native';

import {
  COLORS,
  BUTTON_LAYOUT,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  SPACING,
  TYPOGRAPHY,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingBottom: SPACING.SPACING_6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...TYPOGRAPHY.HEADER_2,
    marginTop: SPACING.SPACING_6,
    marginBottom: SPACING.SPACING_3,
  },
  description: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  question: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonCancel: {
    ...BUTTON_LAYOUT,
    ...BUTTON_SIZE[BUTTON_SIZES.MEDIUM],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.PRIMARY],
    marginLeft: SPACING.SPACING_6,
  },
  buttonConfirm: {
    ...BUTTON_LAYOUT,
    ...BUTTON_SIZE[BUTTON_SIZES.MEDIUM],
    ...BUTTON_VARIANT[BUTTON_VARIANTS.OUTLINE],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  buttonConfirmText: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.SECONDARY_500,
  },
});
