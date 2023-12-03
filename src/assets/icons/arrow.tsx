import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export default function ArrowIcon(props: SvgProps) {
  return (
    <Svg width="13" height="20" viewBox="0 0 13 20" fill="none">
      <Path
        d="M11 17.6684L2 9.83423"
        stroke="#052F46"
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M11 2L2 9.83421"
        stroke="#052F46"
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
}
