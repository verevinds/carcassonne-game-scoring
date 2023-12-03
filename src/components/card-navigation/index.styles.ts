import { Dimensions, StyleSheet } from 'react-native';

import { TYPOGRAPHY } from 'themes/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: '#E5DECE',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  container: {
    width: width - 40,
    backgroundColor: '#F6F4EE',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  title: {
    ...TYPOGRAPHY.SUBTITLE_1,
    textTransform: 'capitalize',
  },
  position: {
    ...TYPOGRAPHY.CAPTION_2,
  },
  points: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  navigation: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
});
