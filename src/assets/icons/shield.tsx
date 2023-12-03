import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export default function ShieldIcon(props: SvgProps) {
  return (
    <Svg fill="none" height="32" viewBox="0 0 32 32" width="32" {...props}>
      <Path
        d="M16.3918 2.37622C16.3918 2.37622 6.93978 4.80771 2.20264 2.37622C4.13131 15.9709 8.08211 23.6516 16.3918 30.4736C24.7015 23.6516 28.6523 15.9709 30.581 2.37622C25.8439 4.80771 16.3918 2.37622 16.3918 2.37622Z"
        fill="#E5DECE"
        stroke="#07405F"
        strokeWidth="2"
      />
    </Svg>
  );
}
