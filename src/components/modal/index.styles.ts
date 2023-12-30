import { Dimensions, StyleSheet } from 'react-native';

import {
  COLORS,
  SHADOW_1,
  SHADOW_2,
  SPACING,
  TYPOGRAPHY,
} from 'themes/constants';
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  body: {
    justifyContent: 'flex-end',
    minHeight: height * 0.4,
    maxHeight: height * 0.8,
    ...SHADOW_1,
  },
  contentContainer: {
    position: 'relative',
    backgroundColor: COLORS.BACKGROUND_50,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: height * 0.4,
  },
  content: {
    paddingTop: SPACING.SPACING_4,
    paddingHorizontal: SPACING.SPACING_6,
    paddingBottom: SPACING.SPACING_7,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 30,
    maxHeight: height * 0.8,
  },
  title: {
    ...TYPOGRAPHY.HEADER_2,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCancel: {
    height: 50,
    borderRadius: 10,
    width: 130,
    backgroundColor: COLORS.SECONDARY_500,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACING.SPACING_6,
    ...SHADOW_2,
  },
  buttonConfirm: {
    height: 50,
    borderRadius: 10,
    width: 130,
    borderWidth: 4,
    borderColor: COLORS.SECONDARY_500,
    backgroundColor: COLORS.BACKGROUND_50,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOW_2,
  },
  description: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  question: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  buttonText: {
    ...TYPOGRAPHY.BUTTON_LABEL,
  },
  buttonConfirmText: {
    ...TYPOGRAPHY.BUTTON_LABEL,
    color: COLORS.SECONDARY_500,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BACKGROUND_900,
  },
  stick: {
    backgroundColor: COLORS.BACKGROUND_50,
    width: 30,
    height: 2,
    position: 'absolute',
    alignSelf: 'center',
    top: -10,
    borderRadius: 2,
    ...SHADOW_2,
  },
});
