import { useEffect } from 'react';

import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useDebounce from 'hooks/use-debounce';
import { fadeTo } from 'utils/animations/fadeTo';

const { height } = Dimensions.get('window');

export function useAnimationWarningModal(isOpen: boolean, onClose: () => void) {
  const { slide, slideAnimation } = useSlideAnimation();
  const { fade, fadeAnimation } = useFadeAnimation();
  const isOpenDebounced = useDebounce(isOpen, 500);

  useEffect(() => {
    if (isOpen) {
      slide.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      fade.value = fadeTo(0.8);
    } else {
      slide.value = withTiming(600, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
      fade.value = fadeTo(0);
    }
  }, [isOpen]);

  const fling = Gesture.Pan()
    .onBegin(() => {})
    .onChange((event) => {
      if (event.translationY > 0 && event.translationY < height * 0.4) {
        slide.value = event.translationY;
        fade.value = 0.8 - event.translationY / 600;
      }
    })
    .onEnd(() => {
      if (slide.value > height * 0.2) {
        return runOnJS(onClose)();
      }
      slide.value = withTiming(0);
    });

  return {
    isOpen: isOpenDebounced,
    gesture: fling,
    fadeAnimationStyles: fadeAnimation,
    slideAnimationStyles: slideAnimation,
  };
}

function useSlideAnimation() {
  const slide = useSharedValue(-600);
  const slideAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: slide.value,
      },
    ],
  }));
  return {
    slide,
    slideAnimation,
  };
}

function useFadeAnimation() {
  const fade = useSharedValue(0);
  const fadeAnimation = useAnimatedStyle(() => ({
    opacity: fade.value,
  }));
  return {
    fade,
    fadeAnimation,
  };
}
