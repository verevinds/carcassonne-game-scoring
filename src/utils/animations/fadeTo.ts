import {
  AnimatableValue,
  AnimationCallback,
  Easing,
  WithTimingConfig,
  withTiming,
} from 'react-native-reanimated';

/**
 * @description only run to JS thread
 */
export function fadeTo<T extends AnimatableValue>(
  val: T,
  userConfig?: WithTimingConfig,
  callback?: AnimationCallback,
): T {
  return withTiming(
    val,
    {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      ...userConfig,
    },
    callback,
  );
}
