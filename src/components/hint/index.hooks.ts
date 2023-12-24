import { Vibration } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const HINT_TOP_ANIMATION_CONFIG = { duration: 1000 };
const HINT_OPACITY_ANIMATION_CONFIG = { duration: 500 };

export function useAnimationHint(disabled: boolean | undefined) {
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
  let pattern: number[] = [];
  const startGradualVibration = () => {
    let duration = 10;
    const maxDuration = 2000;
    const step = 10;
    while (duration <= maxDuration) {
      pattern.push(duration, 500);
      duration += step;
    }
    Vibration.vibrate(pattern);
  };
  const stopVibration = () => {
    pattern = [];
    Vibration.cancel();
  };
  const gesture = Gesture.Pan()
    .enabled(!disabled)
    .onBegin(() => {
      pressed.value = true;
    })
    .onTouchesDown(() => {
      runOnJS(startGradualVibration)();
      runOnJS(setStartTime)();
      pressed.value = true;
      size.value = 6;
      if (!hintAnimationActive.value) {
        hintTop.value = -20;
      }
    })
    .onTouchesUp(() => {
      runOnJS(stopVibration)();
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
