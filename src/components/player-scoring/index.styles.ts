import { Dimensions, StyleSheet } from 'react-native';

import { SPACING, TYPOGRAPHY } from 'themes/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
  },
  main: {
    padding: 0,
    margin: 0,
    height: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.SUBTITLE_2,
  },
  subtitle: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.HEADER_1,
  },
  caption: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.CAPTION_1,
  },
  navigation: {
    paddingHorizontal: SPACING.SPACING_6,
  },
  corusel: {
    height: 80,
  },
  message: {
    flex: 1,
    alignItems: 'center',
  },
  leadboardContainer: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: '50%',
    width: '100%',
    paddingHorizontal: SPACING.SPACING_6,
  },
  leadboard: {},
  messageText: {
    ...TYPOGRAPHY.PARAGRAPH_2,
    textAlign: 'center',
  },
  points: {
    ...TYPOGRAPHY.PARAGRAPH_2,
    paddingLeft: SPACING.SPACING_6,
  },
  name: {
    ...TYPOGRAPHY.PARAGRAPH_2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingHorizontal: SPACING.SPACING_6,
  },
  listTitle: {
    ...TYPOGRAPHY.SUBTITLE_1,
    marginTop: SPACING.SPACING_4,
  },
  rowTitle: {
    marginTop: SPACING.SPACING_3,
    ...TYPOGRAPHY.PARAGRAPH_1,
    width: '25%',
  },
  rowText: {
    ...TYPOGRAPHY.PARAGRAPH_2,
    width: '25%',
  },
  firstCell: {
    width: '30%',
  },
  lastCell: {
    width: '20%',
    textAlign: 'right',
  },
  additionalButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SPACING.SPACING_5,
  },
});
