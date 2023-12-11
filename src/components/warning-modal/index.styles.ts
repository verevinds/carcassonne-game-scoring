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
    ...SHADOW_1,
  },
  contentContainer: {
    position: 'relative',
    backgroundColor: COLORS.BACKGROUND_50,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
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
    backgroundColor: COLORS.PRIMARY_500,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    ...SHADOW_2,
    shadowColor: COLORS.PRIMARY_500,
  },
  buttonConfirm: {
    height: 50,
    borderRadius: 10,
    width: 130,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_500,
    backgroundColor: COLORS.BACKGROUND_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    ...SHADOW_2,
    shadowColor: COLORS.PRIMARY_500,
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
    color: COLORS.PRIMARY_500,
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
