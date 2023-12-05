import { StyleSheet } from 'react-native';

import { COLORS, SHADOW_1, SHADOW_2, TYPOGRAPHY } from 'themes/constants';

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
    height: '40%',
    left: 0,
    right: 0,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...SHADOW_1,
  },
  contentContainer: {
    backgroundColor: COLORS.BACKGROUND_95,
  },
  content: {
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...TYPOGRAPHY.HEADING_2,
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
    backgroundColor: COLORS.PRIMARY_20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    ...SHADOW_2,
  },
  buttonConfirm: {
    height: 50,
    borderRadius: 10,
    width: 130,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_20,
    backgroundColor: COLORS.BACKGROUND_95,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    color: COLORS.PRIMARY_20,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BLACK,
  },
});
