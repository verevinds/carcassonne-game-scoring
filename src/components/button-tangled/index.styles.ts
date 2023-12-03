import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from 'themes/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(5, 47, 70, 1)',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 60,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  text: {
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
});
