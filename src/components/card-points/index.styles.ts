import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY } from 'themes/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#E5DECE',
    paddingVertical: 10,
    paddingHorizontal: 16,
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
    shadowColor: COLORS.SHADOW_1,
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
    paddingBottom: 10,
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
    width: 2,
    height: 20,
    zIndex: 2,
    borderEndEndRadius: 10,
  },
  indicatorRed: {
    backgroundColor: COLORS.RED,
  },
});
