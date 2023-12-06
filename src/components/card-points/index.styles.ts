import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY } from 'themes/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#E5DECE',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  container: {
    position: 'relative',
    width: width - 40,
    backgroundColor: '#F6F4EE',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    marginBottom: 10,
    shadowColor: COLORS.BACKGROUND_85,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  title: {
    ...TYPOGRAPHY.SUBTITLE_1,
    textTransform: 'capitalize',
    margin: 0,
  },
  position: {
    ...TYPOGRAPHY.CAPTION_2,
    margin: 0,
  },
  points: {
    ...TYPOGRAPHY.CAPTION_2,
  },
  navigation: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    flexDirection: 'row',
  },
  shield: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  shieldText: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.PRIMARY_20,
    position: 'absolute',
    paddingBottom: 6,
    fontSize: 16,
    paddingLeft: 1,
    zIndex: 2,
  },
  multipleNavigation: {
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calculator: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  count: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.PRIMARY_20,
    width: 30,
    textAlign: 'center',
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
    backgroundColor: COLORS.RED,
  },
  indicatorBlue: {
    backgroundColor: COLORS.RED,
  },
  indicatorGreen: {
    backgroundColor: COLORS.RED,
  },
  indicatorYellow: {
    backgroundColor: COLORS.RED,
  },
  indicatorPink: {
    backgroundColor: COLORS.RED,
  },
  indicatorGrey: {
    backgroundColor: COLORS.RED,
  },
});
