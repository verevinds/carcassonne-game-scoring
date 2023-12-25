import { useState } from 'react';

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

export function useAnimationHint({ onPress }: Omit<HintProps, 'text'>) {
  const enableButton = () => {
    setButtonActive(true);
  };
  const disableButton = () => {
    setButtonActive(false);
  };
  const hintTop = useSharedValue(-10);
  const hintOpacity = useSharedValue(0);
  const [isButtonActive, setButtonActive] = useState(true);
  const gesture = Gesture.Pan()
    .enabled(isButtonActive)
    .onTouchesDown(() => {
      if (isButtonActive) {
        hintTop.value = -10;
        hintOpacity.value = 0;
      }
    })
    .onFinalize((e) => {
      if (isButtonActive) {
        hintOpacity.value = withTiming(1, HINT_OPACITY_ANIMATION_CONFIG);
        hintTop.value = withSequence(
          withTiming(-30, HINT_TOP_ANIMATION_CONFIG, (isFinished) => {
            if (isFinished) {
              hintOpacity.value = withTiming(0, HINT_TOP_ANIMATION_CONFIG);
            }
          }),
          withTiming(-70, HINT_TOP_ANIMATION_CONFIG, (isFinished) => {
            if (isFinished) {
              runOnJS(enableButton)();
            }
          }),
          withTiming(-20),
        );
        runOnJS(disableButton)();
        if (onPress) {
          runOnJS(onPress)(e);
        }
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
