import React from 'react';

import { View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as Linear,
  Rect,
  Stop,
} from 'react-native-svg';

import { BASE_PADDING } from 'themes/constants';

import { styles } from './index.styles';

export type LinearGradientProps = {
  startColor?: string;
  endColor?: string;
  startOpacity?: number | string;
  endOpacity?: number | string;
  x1?: number | string;
  y1?: number | string;
  x2?: number | string;
  y2?: number | string;
  viewBoxWidth: number;
  viewBoxHeight: number;
};

export const LinearGradient = ({
  startColor,
  endColor,
  startOpacity = 1,
  endOpacity = 1,
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 1,
  viewBoxWidth,
  viewBoxHeight,
}: LinearGradientProps) => (
  <View style={styles.gradient}>
    <Svg
      height={viewBoxHeight + BASE_PADDING / 4}
      width={viewBoxWidth + BASE_PADDING / 4}
    >
      <Defs>
        <Linear id="linear-gradient" {...{ x1, y1, x2, y2 }}>
          <Stop offset={0} stopColor={startColor} stopOpacity={startOpacity} />
          <Stop offset={1} stopColor={endColor} stopOpacity={endOpacity} />
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
