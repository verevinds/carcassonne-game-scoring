import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export default function MinusIcon(props: SvgProps) {
  const stroke = props.stroke ?? 'white';
  return (
    <Svg fill="none" height="100%" viewBox="0 0 14 2" width="14" {...props}>
      <Path
        d="M13 1.0001L1 1"
        stroke={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </Svg>
  );
}
