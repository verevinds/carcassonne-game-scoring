import * as React from 'react';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, G, SvgProps } from 'react-native-svg';

import { COLORS } from 'themes/constants';

export default function Pattern(props: SvgProps) {
  const opacity = useSharedValue(0);
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 2500,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });
  React.useEffect(() => {
    opacity.value = 1;
    return () => {
      opacity.value = 0;
    };
  }, []);
  return (
    <Animated.View
      style={[
        props.style,
        {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        },
        opacityStyle,
      ]}
    >
      <Svg
        fill="none"
        height="812"
        style={{ flex: 1 }}
        viewBox="0 0 375 812"
        width="100%"
        {...props}
      >
        <G>
          <Path
            d="M161.558 171.556H206.557C231.349 171.556 251.446 151.458 251.446 126.667V126.667H206.447C181.655 126.667 161.558 146.764 161.558 171.556V171.556Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M341.335 351.111H386.335C411.126 351.111 431.223 331.014 431.223 306.222V306.222H386.224C361.432 306.222 341.335 326.32 341.335 351.111V351.111Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M341.335 81.7777H386.335C411.126 81.7777 431.223 61.6803 431.223 36.8888V36.8888H386.224C361.432 36.8888 341.335 56.9863 341.335 81.7777V81.7777Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M251.237 261.333H296.237C321.028 261.333 341.126 241.236 341.126 216.444V216.444H296.126C271.335 216.444 251.237 236.542 251.237 261.333V261.333Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M431.223 171.556H386.223C361.432 171.556 341.334 151.458 341.334 126.667V126.667H386.334C411.125 126.667 431.223 146.764 431.223 171.556V171.556Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M251.446 126.667H206.447C181.655 126.667 161.558 106.569 161.558 81.7779V81.7779H206.557C231.349 81.7779 251.446 101.875 251.446 126.667V126.667Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M431.223 306.222H386.223C361.432 306.222 341.334 286.125 341.334 261.333V261.333H386.334C411.125 261.333 431.223 281.431 431.223 306.222V306.222Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M161.558 306.222H206.557C231.349 306.222 251.446 286.125 251.446 261.333V261.333H206.447C181.655 261.333 161.558 281.431 161.558 306.222V306.222Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M431.223 171.556H386.223C361.432 171.556 341.334 191.653 341.334 216.444V216.444H386.334C411.125 216.444 431.223 196.347 431.223 171.556V171.556Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M251.446 216.444H206.447C181.655 216.444 161.558 196.347 161.558 171.556V171.556H206.557C231.349 171.556 251.446 191.653 251.446 216.444V216.444Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M431.223 396H386.223C361.432 396 341.334 375.903 341.334 351.111V351.111H386.334C411.125 351.111 431.223 371.209 431.223 396V396Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M341.335 351.111H296.335C271.544 351.111 251.447 331.014 251.447 306.222V306.222H296.446C321.238 306.222 341.335 326.32 341.335 351.111V351.111Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M341.335 81.7777H296.335C271.544 81.7777 251.447 61.6803 251.447 36.8888V36.8888H296.446C321.238 36.8888 341.335 56.9863 341.335 81.7777V81.7777Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M251.446 306.222H296.446C321.237 306.222 341.335 286.125 341.335 261.333V261.333H296.335C271.544 261.333 251.446 281.431 251.446 306.222V306.222Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M161.558 306.222H116.558C91.7666 306.222 71.6692 286.125 71.6692 261.333V261.333H116.669C141.46 261.333 161.558 281.431 161.558 306.222V306.222Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M341.335 171.556H296.335C271.544 171.556 251.447 151.458 251.447 126.667V126.667H296.446C321.238 126.667 341.335 146.764 341.335 171.556V171.556Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M251.446 126.667H296.446C321.237 126.667 341.335 106.569 341.335 81.7779V81.7779H296.335C271.544 81.7779 251.446 101.875 251.446 126.667V126.667Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M71.6689 126.667H116.669C141.46 126.667 161.557 106.569 161.557 81.7779V81.7779H116.558C91.7664 81.7779 71.6689 101.875 71.6689 126.667V126.667Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M345.446 441H300.447C275.655 441 255.558 461.097 255.558 485.889V485.889H300.557C325.349 485.889 345.446 465.791 345.446 441V441Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M345.237 485.667H390.237C415.028 485.667 435.126 505.764 435.126 530.556V530.556H390.126C365.335 530.556 345.237 510.458 345.237 485.667V485.667Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M345.446 620.333H300.447C275.655 620.333 255.558 640.431 255.558 665.222V665.222H300.557C325.349 665.222 345.446 645.125 345.446 620.333V620.333Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M435.335 395.889H390.335C365.544 395.889 345.447 415.986 345.447 440.778V440.778H390.446C415.238 440.778 435.335 420.68 435.335 395.889V395.889Z"
            fill={COLORS.BACKGROUND_200}
            fill-opacity="1"
          />
          <Path
            d="M345.446 440.778H390.446C415.237 440.778 435.335 460.875 435.335 485.667V485.667H390.335C365.544 485.667 345.446 465.569 345.446 440.778V440.778Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M435.335 575.444H390.335C365.544 575.444 345.447 595.542 345.447 620.333V620.333H390.446C415.238 620.333 435.335 600.236 435.335 575.444V575.444Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
          <Path
            d="M255.889 575.444H210.889C186.098 575.444 166 595.542 166 620.333V620.333H211C235.791 620.333 255.889 600.236 255.889 575.444V575.444Z"
            fill={COLORS.BACKGROUND_100}
            fill-opacity="1"
          />
        </G>
      </Svg>
    </Animated.View>
  );
}
