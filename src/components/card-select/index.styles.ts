import { StyleSheet } from 'react-native';

import {
  TYPOGRAPHY,
  SHADOW_2,
  COLORS,
  BASE_PADDING,
  BASE_BORDER_RADIUS,
  SPACING,
} from 'themes/constants';

export const HEIGHT_CONTAINER = 100;
export const WIDTH_CONTAINER = 350;
export const PADDING_CONTENT = 10;

export const styles = StyleSheet.create({
  container: {
    borderRadius: BASE_BORDER_RADIUS,
    margin: BASE_PADDING,
    width: WIDTH_CONTAINER,
    height: HEIGHT_CONTAINER,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.SPACING_4,
    paddingVertical: SPACING.SPACING_3,
    borderColor: COLORS.SECONDARY_50,
    borderWidth: 2,
    ...SHADOW_2,
  },
  selected: {
    borderColor: COLORS.SECONDARY_300,
  },
  disabled: { opacity: 0.5 },
  titleContainer: {
    flex: 1,
    marginHorizontal: SPACING.SPACING_3,
  },
  title: {
    ...TYPOGRAPHY.PARAGRAPH_1,
    textAlign: 'left',
  },
  description: {
    ...TYPOGRAPHY.CAPTION_2,
  },
});
