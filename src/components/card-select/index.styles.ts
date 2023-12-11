import { StyleSheet } from 'react-native';

import { TYPOGRAPHY, COLORS, SHADOW_2 } from 'themes/constants';

export const HEIGHT_CONTAINER = 200;
export const WIDTH_CONTAINER = 120;
export const PADDING_CONTENT = 10;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 5,
    minWidth: WIDTH_CONTAINER,
    minHeight: HEIGHT_CONTAINER,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOW_2,
  },
  disabled: { opacity: 0.5 },
  cardContainerHighlight: {
    backgroundColor: COLORS.SECONDARY_500,
  },
  outerContainer: {
    maxWidth: WIDTH_CONTAINER * 0.8,
    height: HEIGHT_CONTAINER * 0.8,
    borderRadius: 10,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_50,
    borderRadius: 8,
    padding: PADDING_CONTENT,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (WIDTH_CONTAINER - PADDING_CONTENT) * 0.8,
    height: (HEIGHT_CONTAINER - PADDING_CONTENT) * 0.8,
  },
  iconContainer: {
    flex: 1,
  },
  cardTitle: {
    ...TYPOGRAPHY.CAPTION_1,
    maxWidth: 220,
  },
});
