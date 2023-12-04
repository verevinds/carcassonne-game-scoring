import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  PRIMARY_15: 'rgba(5, 47, 70, 1)',
  PRIMARY_20: 'rgba(7, 64, 95, 1)',
  SECONDARY_15: 'rgba(5, 47, 70, 1)',
  SECONDARY_64: '#A87257',
  BACKGROUND_90: '#EDE9DE',
  BACKGROUND_95: 'rgba(246, 244, 238, 1)',
  SHADOW_1: 'rgba(0, 0, 0, 0.25)',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  TRANSPARENT: 'transparent',
  RED: '#D0212A',
  BLUE: '#1665A4',
  GREEN: '#0A8E45',
  YELLOW: '#DDC222',
  GREY: '#939597',
  PINK: '#D9A8C4',
};

export enum PLAYER_COLOR_NAME {
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  GREY = 'GREY',
  PINK = 'PINK',
  RED = 'RED',
  YELLOW = 'YELLOW',
}

export const PLAYER_COLORS: Record<string, string> = {
  [PLAYER_COLOR_NAME.RED]: COLORS.RED,
  [PLAYER_COLOR_NAME.BLUE]: COLORS.BLUE,
  [PLAYER_COLOR_NAME.YELLOW]: COLORS.YELLOW,
  [PLAYER_COLOR_NAME.GREEN]: COLORS.GREEN,
  [PLAYER_COLOR_NAME.GREY]: COLORS.GREY,
  [PLAYER_COLOR_NAME.PINK]: COLORS.PINK,
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
    color: COLORS.PRIMARY_15,
  },
  HEADING_1: {
    fontFamily: 'Roboto-Thin',
    fontSize: 22,
    lineHeight: 26,
    color: COLORS.PRIMARY_15,
  },
  SUBTITLE_1: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.PRIMARY_15,
  },
  SUBTITLE_2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2,
    color: COLORS.PRIMARY_15,
  },
  PARAGRAPH_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.PRIMARY_20,
  },
  PARAGRAPH_2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.PRIMARY_20,
  },
  CAPTION_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.PRIMARY_20,
  },
  CAPTION_2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 16,
    color: COLORS.PRIMARY_20,
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

export const SHADOW_1 = {
  shadowColor: COLORS.SHADOW_1,
  shadowOffset: { width: 0, height: 16 },
  shadowOpacity: 1,
  shadowRadius: 24,
  elevation: 10,
};

export const SHADOW_2 = {
  ...Platform.select({
    ios: {
      shadowColor: COLORS.SHADOW_1,
    },
    android: {
      shadowColor: COLORS.SHADOW_1,
    },
  }),
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 10,
};
