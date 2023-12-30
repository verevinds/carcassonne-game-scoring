import { Path, Svg, SvgProps } from 'react-native-svg';

import { COLORS } from 'themes/constants';

type CheckProps = SvgProps & {
  checked?: boolean;
};
function Check(props: CheckProps) {
  return (
    <Svg fill="none" height="32" viewBox="0 0 32 32" width="32" {...props}>
      <Path
        clipRule="evenodd"
        d="M16 0.564941C24.2843 0.564941 31 7.28067 31 15.5649C31 23.8492 24.2843 30.5649 16 30.5649C7.71573 30.5649 1 23.8492 1 15.5649C1 7.28067 7.71573 0.564941 16 0.564941Z"
        fill={props.checked ? COLORS.SECONDARY_500 : COLORS.TRANSPARENT}
        fillRule="evenodd"
        stroke={props.checked ? COLORS.TRANSPARENT : COLORS.SECONDARY_500}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.85742 14.9365L14.7398 20.5659L23.1431 10.5659"
        stroke={props.checked ? COLORS.BACKGROUND_50 : COLORS.SECONDARY_500}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}

export default Check;
