import React from 'react';

import { StyleProp, View, ViewStyle } from 'react-native';
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
  return (
    <View style={[styles.gradient, containerStyle]}>
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
    </View>
  );
};
