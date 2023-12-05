import { useEffect, useState } from 'react';

import { Dimensions, Modal, Text, View } from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';
import { COLORS } from 'themes/constants';

import { styles } from './index.styles';
const { height, width } = Dimensions.get('window');

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }
    setDebouncedValue(value);
  }, [value]);

  return debouncedValue;
}
function WarningModal(props: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const slide = useSharedValue(-600);
  const fade = useSharedValue(0);
  const isOpen = useDebounce(props.isOpen, 500);

  useEffect(() => {
    if (props.isOpen) {
      slide.value = 0;
      fade.value = 0.8;
    } else {
      slide.value = 600;
      fade.value = 0;
    }
  }, [props.isOpen]);

  const slideAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(slide.value, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        }),
      },
    ],
  }));
  const fadeAnimation = useAnimatedStyle(() => ({
    opacity: withTiming(fade.value, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }),
  }));

  const fling = Gesture.Fling()
    .direction(Directions.DOWN)
    .onEnd(() => {
      runOnJS(props.onClose)();
    });
  return (
    <Modal transparent visible={isOpen} onRequestClose={props.onClose}>
      <GestureDetector gesture={fling}>
        <View style={styles.container}>
          <Animated.View style={[styles.background, fadeAnimation]} />
          <Animated.View style={[styles.body, slideAnimation]}>
            <View style={styles.stick} />
            <View style={styles.contentContainer}>
              <Pattern />
              <LinearGradient
                endColor={COLORS.BACKGROUND_85}
                startColor={COLORS.BACKGROUND_95}
                viewBoxHeight={height * 0.4}
                viewBoxWidth={width}
                x1={-0.2}
                x2={0.45}
                y1={0.25}
                y2={0.9}
              />
              <View style={styles.content}>
                <Text style={styles.title}>Game Reset</Text>
                <Text style={styles.description}>
                  You are about to restart the game. This action will completely
                  reset your current progress, including all achievements and
                  saved data.
                </Text>
                <Text style={styles.question}>
                  Please confirm that you want to start the game over.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={props.onConfirm}
                  >
                    <Text style={styles.buttonConfirmText}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={props.onClose}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </GestureDetector>
    </Modal>
  );
}

export default WarningModal;
