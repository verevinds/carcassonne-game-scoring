import { Platform, StyleSheet } from 'react-native';
// import { DefaultTheme as DefaultNavigationTheme } from '@react-navigation/native';

export const COLORS = {
  PRIMARY_15: 'rgba(5, 47, 70, 1)',
  PRIMARY_20: 'rgba(7, 64, 95, 1)',
  SECONDARY_15: 'rgba(5, 47, 70, 1)',
  BACKGROUND_95: 'rgba(246, 244, 238, 1)',
  TRANSPARENT: 'transparent',
};

export const TYPOGRAPHY = StyleSheet.create({
  ACCENT_1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    lineHeight: 56,
    color: COLORS.PRIMARY_15,
  },
  ACCENT_2: {
    fontFamily: 'Roboto-Thin',
    fontSize: 24,
    lineHeight: 38,
    color: COLORS.PRIMARY_15,
  },
  HEADING_2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    lineHeight: 28,
  },
  HEADING_1: {
    fontFamily: 'Roboto-Thin',
    fontSize: 22,
    lineHeight: 26,
  },
  SUBTITLE_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 22,
  },
  SUBTITLE_2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2,
  },
  PARAGRAPH_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 22,
  },
  PARAGRAPH_2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  CAPTION_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  CAPTION_2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 16,
  },
  BUTTON_LABEL: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.BACKGROUND_95,
  },
  GHOST_BUTTON_LABEL: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 24,
  },
});

// export const NavigationTheme = {
//   // ...DefaultNavigationTheme,
//   colors: {
//     // ...DefaultNavigationTheme.colors,
//     background: COLORS.BRIGHT,
//   },
// };

export const BASE_PADDING = 8;
export const BASE_BORDER_RADIUS = 10;
export const BASE_BUTTON_HEIGHT = 48;
export const BASE_BUTTON_MARGIN_BOTTOM = 20;
export const BASE_BUTTON_CONTAINER_HEIGHT =
  BASE_BUTTON_HEIGHT + BASE_BUTTON_MARGIN_BOTTOM;
export const BASE_INPUT_HEIGHT = 50;

const HIT_SLOP_PADDING = BASE_PADDING * 2;
export const BASE_HIT_SLOP = {
  top: HIT_SLOP_PADDING,
  right: HIT_SLOP_PADDING,
  bottom: HIT_SLOP_PADDING,
  left: HIT_SLOP_PADDING,
};

// export const SHADOW_1 = {
//   shadowColor: COLORS.SHADOW_1,
//   shadowOffset: { width: 0, height: 16 },
//   shadowOpacity: 1,
//   shadowRadius: 24,
//   elevation: 10,
// };

// export const SHADOW_2 = {
//   ...Platform.select({
//     ios: {
//       shadowColor: COLORS.SHADOW_2,
//     },
//     android: {
//       shadowColor: COLORS.DARK_50,
//     },
//   }),
//   shadowOffset: { width: 0, height: 5 },
//   shadowOpacity: 1,
//   shadowRadius: 20,
//   elevation: 25,
// };
