import { StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY, SHADOW_2 } from 'themes/constants';

import { BORDER_RADIUS, HEIGHT, WIDHT } from './index.constants';

export const styles = StyleSheet.create({
  container: {
    ...SHADOW_2,
  },
  text: {
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  button: {
    width: WIDHT,
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.PRIMARY_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,

    backgroundColor: COLORS.PRIMARY_20,
    borderRadius: 50,
    position: 'absolute',
  },
  hint: {
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_95,
    borderRadius: 10,
    paddingHorizontal: 20,
    opacity: 0,
    zIndex: 100,
    ...SHADOW_2,
  },
  content: {
    overflow: 'hidden',
    flex: 1,
    width: WIDHT,
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintText: {
    ...TYPOGRAPHY.CAPTION_2,
  },
});
