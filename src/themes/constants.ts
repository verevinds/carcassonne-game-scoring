import {
  StyleSheet,
  Platform,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

import { NamedStyles } from 'types/style';
const { width } = Dimensions.get('window');
export enum COLORS {
  BACKGROUND_50 = 'rgba(253, 252, 251, 1)',
  BACKGROUND_100 = 'rgba(250, 248, 245, 1)',
  BACKGROUND_200 = 'rgba(245, 242, 235, 1)',
  BACKGROUND_300 = 'rgba(239, 235, 226, 1)',
  BACKGROUND_400 = 'rgba(234, 229, 216, 1)',
  BACKGROUND_500 = 'rgba(229, 222, 206, 1)',
  BACKGROUND_600 = 'rgba(172, 167, 155, 1)',
  BACKGROUND_700 = 'rgba(115, 111, 103, 1)',
  BACKGROUND_800 = 'rgba(57, 56, 52, 1)',
  BACKGROUND_900 = 'rgba(23, 22, 21, 1)',
  BLUE_50 = 'rgba(232, 240, 246, 1)',
  BLUE_100 = 'rgba(208, 224, 237, 1)',
  BLUE_200 = 'rgba(162, 193, 219, 1)',
  BLUE_300 = 'rgba(115, 163, 200, 1)',
  BLUE_400 = 'rgba(69, 132, 182, 1)',
  BLUE_500 = 'rgba(22, 101, 164, 1)',
  BLUE_600 = 'rgba(17, 76, 123, 1)',
  BLUE_700 = 'rgba(11, 51, 82, 1)',
  BLUE_800 = 'rgba(6, 25, 41, 1)',
  BLUE_900 = 'rgba(2, 10, 16, 1)',
  DARK_50 = 'rgba(236, 236, 236, 1)',
  DARK_100 = 'rgba(215, 215, 216, 1)',
  DARK_200 = 'rgba(175, 175, 176, 1)',
  DARK_300 = 'rgba(136, 136, 137, 1)',
  DARK_400 = 'rgba(96, 96, 97, 1)',
  DARK_500 = 'rgba(56, 56, 58, 1)',
  DARK_600 = 'rgba(42, 42, 44, 1)',
  DARK_700 = 'rgba(28, 28, 29, 1)',
  DARK_800 = 'rgba(14, 14, 15, 1)',
  DARK_900 = 'rgba(6, 6, 6, 1)',
  GREEN_50 = 'rgba(231, 244, 237, 1)',
  GREEN_100 = 'rgba(206, 232, 218, 1)',
  GREEN_200 = 'rgba(157, 210, 181, 1)',
  GREEN_300 = 'rgba(108, 187, 143, 1)',
  GREEN_400 = 'rgba(59, 165, 106, 1)',
  GREEN_500 = 'rgba(10, 142, 69, 1)',
  GREEN_600 = 'rgba(8, 107, 52, 1)',
  GREEN_700 = 'rgba(5, 71, 35, 1)',
  GREEN_800 = 'rgba(3, 36, 17, 1)',
  GREEN_900 = 'rgba(1, 14, 7, 1)',
  GREY_50 = 'rgba(245, 245, 245, 1)',
  GREY_100 = 'rgba(233, 234, 234, 1)',
  GREY_200 = 'rgba(212, 213, 213, 1)',
  GREY_300 = 'rgba(190, 191, 193, 1)',
  GREY_400 = 'rgba(169, 170, 172, 1)',
  GREY_500 = 'rgba(147, 149, 151, 1)',
  GREY_600 = 'rgba(110, 112, 113, 1)',
  GREY_700 = 'rgba(74, 75, 76, 1)',
  GREY_800 = 'rgba(37, 37, 38, 1)',
  GREY_900 = 'rgba(15, 15, 15, 1)',
  PINK_50 = 'rgba(252, 247, 250, 1)',
  PINK_100 = 'rgba(247, 238, 243, 1)',
  PINK_200 = 'rgba(240, 220, 231, 1)',
  PINK_300 = 'rgba(232, 203, 220, 1)',
  PINK_400 = 'rgba(225, 185, 208, 1)',
  PINK_500 = 'rgba(217, 168, 196, 1)',
  PINK_600 = 'rgba(163, 126, 147, 1)',
  PINK_700 = 'rgba(109, 84, 98, 1)',
  PINK_800 = 'rgba(54, 42, 49, 1)',
  PINK_900 = 'rgba(22, 17, 20, 1)',
  PRIMARY_50 = 'rgba(231, 236, 240, 1)',
  PRIMARY_100 = 'rgba(205, 217, 223, 1)',
  PRIMARY_200 = 'rgba(156, 179, 191, 1)',
  PRIMARY_300 = 'rgba(106, 140, 159, 1)',
  PRIMARY_400 = 'rgba(57, 102, 127, 1)',
  PRIMARY_500 = 'rgba(7, 64, 95, 1)',
  PRIMARY_600 = 'rgba(5, 48, 71, 1)',
  PRIMARY_700 = 'rgba(4, 32, 48, 1)',
  PRIMARY_800 = 'rgba(2, 16, 24, 1)',
  PRIMARY_900 = 'rgba(1, 6, 10, 1)',
  RED_50 = 'rgba(251, 233, 234, 1)',
  RED_100 = 'rgba(246, 211, 212, 1)',
  RED_200 = 'rgba(236, 166, 170, 1)',
  RED_300 = 'rgba(227, 122, 127, 1)',
  RED_400 = 'rgba(217, 77, 85, 1)',
  RED_500 = 'rgba(208, 33, 42, 1)',
  RED_600 = 'rgba(156, 25, 32, 1)',
  RED_700 = 'rgba(104, 17, 21, 1)',
  RED_800 = 'rgba(52, 8, 11, 1)',
  RED_900 = 'rgba(21, 3, 4, 1)',
  SECONDARY_50 = 'rgba(247, 241, 239, 1)',
  SECONDARY_100 = 'rgba(238, 227, 221, 1)',
  SECONDARY_200 = 'rgba(220, 199, 188, 1)',
  SECONDARY_300 = 'rgba(203, 170, 154, 1)',
  SECONDARY_400 = 'rgba(185, 142, 121, 1)',
  SECONDARY_500 = 'rgba(168, 114, 87, 1)',
  SECONDARY_600 = 'rgba(126, 86, 65, 1)',
  SECONDARY_700 = 'rgba(84, 57, 44, 1)',
  SECONDARY_800 = 'rgba(42, 29, 22, 1)',
  SECONDARY_900 = 'rgba(17, 11, 9, 1)',
  SHADOW_BLACK = 'rgba(0, 33, 51, 0.25)',
  YELLOW_50 = 'rgba(252, 249, 233, 1)',
  YELLOW_100 = 'rgba(248, 243, 211, 1)',
  YELLOW_200 = 'rgba(241, 231, 167, 1)',
  YELLOW_300 = 'rgba(235, 218, 122, 1)',
  YELLOW_400 = 'rgba(228, 206, 78, 1)',
  YELLOW_500 = 'rgba(221, 194, 34, 1)',
  YELLOW_600 = 'rgba(166, 146, 26, 1)',
  YELLOW_700 = 'rgba(111, 97, 17, 1)',
  YELLOW_800 = 'rgba(55, 49, 9, 1)',
  YELLOW_900 = 'rgba(22, 19, 3, 1)',
  TRANSPARENT = 'transparent',
}
export const SPACING = {
  SPACING_0: 0,
  SPACING_1: 2,
  SPACING_2: 4,
  SPACING_3: 8,
  SPACING_4: 12,
  SPACING_5: 16,
  SPACING_6: 22,
  SPACING_7: 24,
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
  [PLAYER_COLOR_NAME.RED]: COLORS.RED_500,
  [PLAYER_COLOR_NAME.BLUE]: COLORS.BLUE_500,
  [PLAYER_COLOR_NAME.YELLOW]: COLORS.YELLOW_500,
  [PLAYER_COLOR_NAME.GREEN]: COLORS.GREEN_500,
  [PLAYER_COLOR_NAME.GREY]: COLORS.GREY_500,
  [PLAYER_COLOR_NAME.PINK]: COLORS.PINK_500,
};
export const TYPOGRAPHY = StyleSheet.create({
  TITLE_1: {
    fontFamily: 'Roboto-Thin',
    fontSize: 40,
    lineHeight: 44,
    color: COLORS.PRIMARY_600,
  },
  TITLE_2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 40,
    lineHeight: 44,
    color: COLORS.PRIMARY_600,
  },
  HEADER_1: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    lineHeight: 26.4,
    color: COLORS.PRIMARY_600,
  },
  HEADER_2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    lineHeight: 26.4,
    color: COLORS.PRIMARY_600,
  },
  SUBTITLE_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    lineHeight: 26.4,
    color: COLORS.PRIMARY_600,
  },
  SUBTITLE_2: {
    fontFamily: 'Roboto-Thin',
    fontSize: 24,
    lineHeight: 26.4,
    color: COLORS.PRIMARY_600,
  },
  PARAGRAPH_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 17.6,
    color: COLORS.PRIMARY_600,
  },
  PARAGRAPH_2: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    lineHeight: 17.6,
    color: COLORS.PRIMARY_600,
  },
  CAPTION_1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 13.2,
    color: COLORS.PRIMARY_600,
  },
  CAPTION_2: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    lineHeight: 13.2,
    color: COLORS.PRIMARY_600,
  },
  BUTTON_LABEL: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 19.8,
    color: COLORS.BACKGROUND_50,
  },
});

export const BASE_PADDING = SPACING.SPACING_3;
export const BASE_BORDER_RADIUS = SPACING.SPACING_3;
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
  shadowColor: COLORS.SHADOW_BLACK,
  shadowOffset: { width: 0, height: 16 },
  shadowOpacity: 1,
  shadowRadius: 24,
  elevation: 10,
};

export const SHADOW_2 = {
  ...Platform.select({
    ios: {
      shadowColor: COLORS.SECONDARY_500,
    },
    android: {
      shadowColor: COLORS.SECONDARY_500,
    },
  }),
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 10,
};
export enum BUTTON_SIZES {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
export enum BUTTON_VARIANTS {
  PRIMARY = 'PRIMARY',
  OUTLINE = 'OUTLINE',
}
export type BUTTON_VARIANT_STYLE_SHEET = NamedStyles<{
  [BUTTON_VARIANTS.OUTLINE]: any;
  [BUTTON_VARIANTS.PRIMARY]: any;
}>;
export const BUTTON_VARIANT: BUTTON_VARIANT_STYLE_SHEET = {
  OUTLINE: {
    borderRadius: SPACING.SPACING_5,
    borderColor: COLORS.SECONDARY_500,
    backgroundColor: COLORS.BACKGROUND_50,
  },
  PRIMARY: {
    borderRadius: SPACING.SPACING_5,
    backgroundColor: COLORS.SECONDARY_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
type BUTTON_SIZE_STYLE_SHEET = NamedStyles<{
  [BUTTON_SIZES.SMALL]: any;
  [BUTTON_SIZES.MEDIUM]: any;
  [BUTTON_SIZES.LARGE]: any;
}>;
export const BUTTON_SIZE: BUTTON_SIZE_STYLE_SHEET = {
  SMALL: {
    borderWidth: 2,
    minWidth: 33,
    minHeight: 30,
    paddingHorizontal: SPACING.SPACING_3,
    paddingVertical: SPACING.SPACING_2,
    borderColor: COLORS.TRANSPARENT,
  },
  MEDIUM: {
    height: 44,
    borderWidth: 4,
    width: width * 0.4,
    borderColor: COLORS.TRANSPARENT,
  },
  LARGE: {
    height: 44,
    borderWidth: 4,
    width: width * 0.8,
    borderColor: COLORS.TRANSPARENT,
  },
};
export const BUTTON_LAYOUT: ViewStyle | TextStyle | ImageStyle = {
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  ...SHADOW_2,
};
