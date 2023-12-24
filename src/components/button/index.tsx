import { useEffect } from 'react';

import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import {
  View,
  Text,
  GestureResponderEvent,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import ArrowStick from 'assets/icons/arrow-stick';
import { BUTTON_SIZES, BUTTON_VARIANTS, COLORS } from 'themes/constants';

import messages from './index.messages';
import { styles } from './index.styles';

const PATH_LENGTH = 5000;
const DURATION = 10000;
const COLORS_GRADIENT = [
  COLORS.TRANSPARENT,
  COLORS.SECONDARY_50,
  COLORS.SECONDARY_100,
  COLORS.SECONDARY_50,
  COLORS.TRANSPARENT,
];

const Button = ({
  size = BUTTON_SIZES.LARGE,
  disabled,
  TransitionProps,
  style,
  onPress,
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  ...props
}: TouchableNativeFeedbackProps & {
  TransitionProps?: { withBlick?: boolean };
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
}): JSX.Element => {
  const opacity = useSharedValue(0.5);
  const gradientValue = useSharedValue(-PATH_LENGTH);

  useEffect(() => {
    if (disabled) {
      opacity.value = 0.5;
    } else {
      opacity.value = 1;
    }
    if (TransitionProps?.withBlick) {
      gradientValue.value = withRepeat(
        withTiming(
          PATH_LENGTH,
          {
            duration: DURATION,
            easing: Easing.ease,
          },
          () => {},
        ),
        -1,
      );
    }
  }, [disabled, opacity, gradientValue, TransitionProps?.withBlick]);

  const gesture = Gesture.Tap()
    .onBegin(() => {
      opacity.value = 0.2;
    })
    .onFinalize(() => {
      opacity.value = 0.5;
    });

  const animationStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });
  const transform = useDerivedValue(() => {
    return [{ translateX: gradientValue.value }];
  }, [gradientValue.value]);

  function handlePress(e: GestureResponderEvent) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onPress?.(e);
  }
  const buttonSizeStyle =
    size === BUTTON_SIZES.LARGE
      ? styles.large
      : size === BUTTON_SIZES.MEDIUM
        ? styles.medium
        : styles.small;
  const buttonVariantStyle =
    variant === BUTTON_VARIANTS.PRIMARY ? styles.primary : styles.outline;

  const textVariantStyle =
    variant === BUTTON_VARIANTS.PRIMARY
      ? styles.primaryText
      : styles.outlineText;
  return (
    <GestureDetector gesture={gesture}>
      <TouchableNativeFeedback
        {...props}
        style={[style, styles.touchable]}
        onPress={handlePress}
      >
        <View style={styles.container}>
          {TransitionProps?.withBlick ? (
            <Canvas style={styles.canvas}>
              <Rect
                height={Number(buttonSizeStyle.height)}
                width={Number(buttonSizeStyle.width)}
                x={0}
                y={0}
              >
                <LinearGradient
                  colors={COLORS_GRADIENT}
                  end={vec(200, 200)}
                  start={vec(0, 0)}
                  transform={transform}
                />
              </Rect>
            </Canvas>
          ) : null}
          <Animated.View
            style={[
              styles.button,
              animationStyles,
              buttonSizeStyle,
              buttonVariantStyle,
            ]}
          >
            <Text style={[styles.text, textVariantStyle]}>
              {children ?? messages.default}
            </Text>
            {children ? null : (
              <View style={styles.icon}>
                <ArrowStick />
              </View>
            )}
          </Animated.View>
        </View>
      </TouchableNativeFeedback>
    </GestureDetector>
  );
};

export default Button;
