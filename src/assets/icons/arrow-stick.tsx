import { Path, Svg, SvgProps } from 'react-native-svg';

export default function ArrowStick(props: SvgProps) {
  return (
    <Svg fill="none" height="17" viewBox="0 0 25 17" width="25" {...props}>
      <Path d="M1 8.5H23.5H1Z" fill="#F6F4EE" />
      <Path
        d="M1 8.5H23.5"
        stroke="#F6F4EE"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <Path d="M14.5 16L23.5 8.5L14.5 16Z" fill="#F6F4EE" />
      <Path
        d="M14.5 16L23.5 8.5"
        stroke="#F6F4EE"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <Path d="M14.5 1L23.5 8.5L14.5 1Z" fill="#F6F4EE" />
      <Path
        d="M14.5 1L23.5 8.5"
        stroke="#F6F4EE"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </Svg>
  );
}
