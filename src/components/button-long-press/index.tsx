import React from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './index.styles';
import { ButtonLongPressProps } from './index.types';

function useDebaunceCallback(callback: () => void, delay: number) {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const start = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);
  const stop = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);
  return {
    start,
    stop,
  };
}

const DELAY_BEFORE_ACTION = 2000;
const HINT_TOP_ANIMATION_CONFIG = {
  duration: 1000,
};
function ButtonLongPress({ onPress, children }: ButtonLongPressProps) {
  const callback = useDebaunceCallback(onPress, DELAY_BEFORE_ACTION);
  const size = useSharedValue(1);
  const pressed = useSharedValue(false);
  const hintTop = useSharedValue(-10);
  const hintOpacity = useSharedValue(0);
  const startTime = useSharedValue(0);
  const endTime = useSharedValue(0);
  const hintAnimationActive = useSharedValue(false);

  const setStartTime = () => {
    startTime.value = Date.now();
  };
  const setEnedTime = () => {
    endTime.value = Date.now();
  };
  const pan = Gesture.Pan()
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
      if (
        startTime.value - endTime.value < 2000 &&
        !hintAnimationActive.value
      ) {
        hintAnimationActive.value = true;
        hintOpacity.value = withTiming(1, {
          duration: 500,
        });
        hintTop.value = withSequence(
          withTiming(-30, HINT_TOP_ANIMATION_CONFIG, (isFinished) => {
            if (isFinished)
              hintOpacity.value = withTiming(0, HINT_TOP_ANIMATION_CONFIG);
          }),
          withTiming(-70, HINT_TOP_ANIMATION_CONFIG),
          withTiming(-20, {}, (isFinished) => {
            if (isFinished) {
              hintAnimationActive.value = false; // Сброс флага после завершения анимации
            }
          }),
        );
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: pressed.value
          ? withTiming(size.value, {
              duration: DELAY_BEFORE_ACTION,
            })
          : withSpring(size.value),
      },
    ],
    opacity: pressed.value ? withTiming(1) : withSpring(0),
  }));
  const hintAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: hintOpacity.value,
      top: hintTop.value,
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={pan}>
        <View style={styles.button}>
          <Animated.View style={[styles.hint, hintAnimatedStyles]}>
            <Text style={styles.hintText}>Hold the button for 2 seconds</Text>
          </Animated.View>
          <View style={styles.content}>
            <Animated.View style={[styles.circle, animatedStyles]} />
            <Text style={styles.text}>{children}</Text>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default observer(ButtonLongPress);
