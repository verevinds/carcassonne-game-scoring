import { StyleSheet } from 'react-native';

import { COLORS, BUTTON, SPACING, TYPOGRAPHY } from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'space-between',
  },
  buttonCancel: {
    ...BUTTON.MEDIUM,
    marginLeft: SPACING.SPACING_6,
  },
  buttonConfirm: {
    ...BUTTON.MEDIUM_OUTLINE,
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
