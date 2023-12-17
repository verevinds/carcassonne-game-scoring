import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export default function PlusIcon(props: SvgProps) {
  const stroke = props.stroke ?? 'white';
  return (
    <Svg fill="none" height="100%" viewBox="0 0 14 14" width="14" {...props}>
      <Path
        d="M13 7.0001L1 7"
        stroke={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <Path
        d="M7.00004 1L6.99994 13"
        stroke={stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </Svg>
  );
}
