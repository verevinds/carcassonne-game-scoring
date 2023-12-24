import { Gesture } from 'react-native-gesture-handler';
import {
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { HintProps } from './index.types';

const HINT_TOP_ANIMATION_CONFIG = { duration: 1000 };
const HINT_OPACITY_ANIMATION_CONFIG = { duration: 500 };

export function useAnimationHint({
  disabled,
  onPress,
}: Omit<HintProps, 'text'>) {
  const size = useSharedValue(1);
  const pressed = useSharedValue(false);
  const hintTop = useSharedValue(-10);
  const hintOpacity = useSharedValue(0);
  const startTime = useSharedValue(0);
  const endTime = useSharedValue(0);
  const hintAnimationActive = useSharedValue(false);

  function setStartTime() {
    startTime.value = Date.now();
  }
  function setEnedTime() {
    endTime.value = Date.now();
  }

  const gesture = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onTouchesDown(() => {
      runOnJS(setStartTime)();
      pressed.value = true;
      size.value = 6;
      if (!hintAnimationActive.value) {
        hintTop.value = -20;
      }
    })
    .onTouchesUp(() => {
      runOnJS(setEnedTime)();
      size.value = 1;
      pressed.value = false;
      const isTooEarly = endTime.value - startTime.value < 2000;
      if (isTooEarly && !hintAnimationActive.value && !disabled) {
        hintAnimationActive.value = true;
        hintOpacity.value = withTiming(1, HINT_OPACITY_ANIMATION_CONFIG);
        hintTop.value = withSequence(
          withTiming(-30, HINT_TOP_ANIMATION_CONFIG, (isFinished) => {
            if (isFinished)
              hintOpacity.value = withTiming(0, HINT_TOP_ANIMATION_CONFIG);
          }),
          withTiming(-70, HINT_TOP_ANIMATION_CONFIG),
          withTiming(-20, {}, (isFinished) => {
            if (isFinished) {
              hintAnimationActive.value = false;
            }
          }),
        );
      }
    })
    .onFinalize((e) => {
      if (onPress) {
        runOnJS(onPress)(e);
      }
    });

  const hintAnimatedStyles = useHintAnimatedStyle(hintOpacity, hintTop);

  return {
    gesture,
    hintAnimatedStyles,
  };
}

function useHintAnimatedStyle(
  hintOpacity: SharedValue<number>,
  hintTop: SharedValue<number>,
) {
  return useAnimatedStyle(() => ({
    opacity: hintOpacity.value,
    top: hintTop.value,
  }));
}
