import { Gesture } from 'react-native-gesture-handler';
import {
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import useDebounce from 'hooks/use-debounce';

const DELAY_BEFORE_ACTION = 2000;
const HINT_TOP_ANIMATION_CONFIG = { duration: 1000 };
const HINT_OPACITY_ANIMATION_CONFIG = { duration: 500 };

export function useAnimationLongPress(onPress: (arg?: unknown) => void) {
  const callback = useDebounce(onPress, DELAY_BEFORE_ACTION);
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
      runOnJS(callback.start)();
      runOnJS(setStartTime)();
      pressed.value = true;
      size.value = 6;
      if (!hintAnimationActive.value) {
        hintTop.value = -20;
      }
    })
    .onTouchesUp(() => {
      runOnJS(callback.stop)();
      runOnJS(setEnedTime)();
      size.value = 1;
      pressed.value = false;
      const isTooEarly = endTime.value - startTime.value < 2000;
      if (isTooEarly && !hintAnimationActive.value) {
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
    });

  const impulseAnimatedStyles = useImpulseAnimatedStyle(pressed, size);
  const impulseSecondaryAnimatedStyles = useImpulseSecondaryAnimatedStyle(
    pressed,
    size,
  );
  const hintAnimatedStyles = useHintAnimatedStyle(hintOpacity, hintTop);

  return {
    gesture,
    impulseAnimatedStyles,
    impulseSecondaryAnimatedStyles,
    hintAnimatedStyles,
  };
}

function useImpulseAnimatedStyle(
  pressed: SharedValue<boolean>,
  size: SharedValue<number>,
) {
  return useAnimatedStyle(() => ({
    transform: [
      {
        scale: pressed.value
          ? withTiming(size.value, { duration: DELAY_BEFORE_ACTION })
          : withSpring(size.value),
      },
    ],
    opacity: pressed.value ? withTiming(0.5) : withSpring(0),
  }));
}

function useImpulseSecondaryAnimatedStyle(
  pressed: SharedValue<boolean>,
  size: SharedValue<number>,
) {
  return useAnimatedStyle(() => ({
    transform: [
      {
        scale: pressed.value
          ? withDelay(
              400,
              withTiming(size.value, { duration: DELAY_BEFORE_ACTION }),
            )
          : withSpring(size.value),
      },
    ],
    opacity: pressed.value ? withTiming(0.5) : withSpring(0),
  }));
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
