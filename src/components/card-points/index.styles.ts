import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY, SHADOW_2, SPACING } from 'themes/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginRight: SPACING.SPACING_4,
  },
  divider: {
    marginVertical: SPACING.SPACING_4,
    height: 2,
    backgroundColor: COLORS.SECONDARY_50,
  },
  container: {
    position: 'relative',
    width: width - 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: SPACING.SPACING_4,
    paddingTop: SPACING.SPACING_4,
    paddingRight: SPACING.SPACING_4,
    paddingLeft: SPACING.SPACING_5,
    paddingBottom: SPACING.SPACING_3,
    backgroundColor: COLORS.BACKGROUND_50,
    ...SHADOW_2,
  },
  titleContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: SPACING.SPACING_3,
    height: 50,
  },
  title: {
    ...TYPOGRAPHY.PARAGRAPH_1,
    textTransform: 'capitalize',
    margin: 0,
  },
  description: {
    ...TYPOGRAPHY.CAPTION_2,
    margin: 0,
  },
  points: {
    ...TYPOGRAPHY.CAPTION_2,
    width: 65,
  },
  count: {
    ...TYPOGRAPHY.CAPTION_2,
    width: 65,
  },
  navigation: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: 4,
    height: 20,
    zIndex: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  indicatorRed: {
    backgroundColor: COLORS.RED_500,
  },
  indicatorBlue: {
    backgroundColor: COLORS.BLUE_500,
  },
  indicatorGreen: {
    backgroundColor: COLORS.GREEN_500,
  },
  indicatorYellow: {
    backgroundColor: COLORS.YELLOW_500,
  },
  indicatorPink: {
    backgroundColor: COLORS.PINK_500,
  },
  indicatorGrey: {
    backgroundColor: COLORS.GREY_500,
  },
  disabled: {
    borderColor: COLORS.SECONDARY_200,
  },
});
