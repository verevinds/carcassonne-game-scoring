import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export default function ArrowIcon(props: SvgProps) {
  return (
    <Svg fill="none" height="20" viewBox="0 0 13 20" width="13" {...props}>
      <Path
        d="M11 17.6684L2 9.83423"
        stroke="#052F46"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <Path
        d="M11 2L2 9.83421"
        stroke="#052F46"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </Svg>
  );
}
