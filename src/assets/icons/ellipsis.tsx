import * as React from 'react';

import Svg, { Circle, SvgProps } from 'react-native-svg';

export default function EllipsisIcon({ fill = 'white', ...props }: SvgProps) {
  return (
    <Svg fill="none" height="100%" viewBox="-3 0 14 2" width="10" {...props}>
      <Circle cx="1" cy="1" fill={fill} r="1" />
      <Circle cx="5" cy="1" fill={fill} r="1" />
      <Circle cx="9" cy="1" fill={fill} r="1" />
    </Svg>
  );
}
