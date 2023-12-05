import { StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY, SHADOW_2 } from 'themes/constants';

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
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOW_2,
    shadowColor: COLORS.PRIMARY_15,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  disabled: { opacity: 0.5 },
  icon: { marginLeft: 10 },
});
