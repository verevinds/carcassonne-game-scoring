import { StyleSheet } from 'react-native';

import { COLORS, SHADOW_1, TYPOGRAPHY } from 'themes/constants';

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
    backgroundColor: COLORS.BACKGROUND_95,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 270,
    paddingVertical: 10,
    ...SHADOW_1,
  },
  done: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.SECONDARY_64,
    paddingHorizontal: 20,
    height: 40,
  },
  picker: {
    backgroundColor: COLORS.BACKGROUND_95,
    width: '100%',
    height: 200,
  },
});
