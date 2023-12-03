import * as React from 'react';

import Svg, { Path, Circle, SvgProps } from 'react-native-svg';

export default function ExitIcon(props: SvgProps) {
  return (
    <Svg fill="none" height="40" viewBox="0 0 40 40" width="40" {...props}>
      <Circle cx="20" cy="20" fill="#F6F4EE" opacity="0.8" r="20" />
      <Path d="M25 23.8342L16 16L25 23.8342Z" fill="#052F46" />
      <Path
        d="M25 23.8342L16 16"
        stroke="#052F46"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <Path d="M25 16L16 23.8342L25 16Z" fill="#052F46" />
      <Path
        d="M25 16L16 23.8342"
        stroke="#052F46"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </Svg>
  );
}
