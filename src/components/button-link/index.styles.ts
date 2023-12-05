import { StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY } from 'themes/constants';

const WIDHT = 300;
const HEIGHT = 60;
const BORDER_RADIUS = HEIGHT;

export const styles = StyleSheet.create({
  link: {
    width: WIDHT,
    height: HEIGHT,
    padding: 0,
    margin: 0,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: WIDHT,
    height: HEIGHT,
    backgroundColor: COLORS.PRIMARY_20,
    alignItems: 'center',
  },
  text: {
    marginRight: 20,
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  disabled: { opacity: 0.5 },
});
