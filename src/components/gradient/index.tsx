import React, { useEffect } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  LinearGradient as Linear,
  Rect,
  Stop,
  SvgProps,
} from 'react-native-svg';

import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

export type LinearGradientProps = SvgProps & {
  stopColor?: COLORS;
  startColor?: COLORS;
  containerStyle?: StyleProp<ViewStyle>;
};

export const LinearGradient = ({
  startColor,
  stopColor,
  containerStyle,
  ...props
}: LinearGradientProps) => {
  const opacity = useSharedValue(0);
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });
  useEffect(() => {
    opacity.value = 1;
    return () => {
      opacity.value = 0;
    };
  }, []);
  return (
    <Animated.View style={[styles.gradient, containerStyle, opacityStyle]}>
      <Svg {...props}>
        <Defs>
          <Linear id="linear-gradient">
            <Stop
              offset={0}
              stopColor={startColor ?? COLORS.BACKGROUND_50}
              stopOpacity={1}
            />
            <Stop
              offset={1}
              stopColor={stopColor ?? COLORS.BACKGROUND_200}
              stopOpacity={1}
            />
          </Linear>
        </Defs>
        <Rect
          fill="url(#linear-gradient)"
          height="100%"
          width="100%"
          x={0}
          y={0}
        />
      </Svg>
    </Animated.View>
  );
};
