import * as React from 'react';

import Svg, { Path, G, SvgProps } from 'react-native-svg';

export default function HeaderIcon(props: SvgProps) {
  return (
    <Svg fill="none" height="66" viewBox="0 0 390 66" width="390" {...props}>
      <G filter="url(#filter0_d_85_5996)">
        <Path
          d="M390 6.5V65.5H0C0 49.2076 13.2076 36 29.5 36H360.5C376.792 36 390 22.7924 390 6.5Z"
          fill="#EDE9DE"
        />
      </G>
    </Svg>
  );
}
