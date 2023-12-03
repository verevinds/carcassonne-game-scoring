import * as React from 'react';

import Svg, { Path, SvgProps, Rect } from 'react-native-svg';

export default function PlusIcon(props: SvgProps) {
  return (
    <Svg fill="none" height="36" viewBox="0 0 36 36" width="36" {...props}>
      <Rect fill="#07405F" height="30" rx="15" width="30" x="3" y="2" />
      <Path
        d="M24 17.0001L12 17"
        stroke="#EEE3DD"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <Path
        d="M18.0001 11L18 23"
        stroke="#EEE3DD"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </Svg>
  );
}
