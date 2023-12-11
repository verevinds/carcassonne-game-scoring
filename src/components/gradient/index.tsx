import React from 'react';

import { View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as Linear,
  Rect,
  Stop,
  SvgProps,
} from 'react-native-svg';

import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

export type LinearGradientProps = SvgProps;

export const LinearGradient = (props: LinearGradientProps) => (
  <View style={styles.gradient}>
    <Svg {...props}>
      <Defs>
        <Linear id="linear-gradient">
          <Stop offset={0} stopColor={COLORS.BACKGROUND_50} stopOpacity={1} />
          <Stop offset={1} stopColor={COLORS.BACKGROUND_200} stopOpacity={1} />
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
