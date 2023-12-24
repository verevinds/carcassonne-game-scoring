import { PropsWithChildren, useEffect } from 'react';

import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { View, Text } from 'react-native';
import {
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import ArrowStick from 'assets/icons/arrow-stick';
import Hint from 'components/hint';
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
  TransitionProps,
  onPress,
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  hint,
  ...props
}: PropsWithChildren<{
  onPress?: (e: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => void;
  TransitionProps?: { withBlick?: boolean };
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
  hint?: string;
}>): JSX.Element => {
  const gradientValue = useSharedValue(-PATH_LENGTH);

  useEffect(() => {
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
  }, [gradientValue, TransitionProps?.withBlick]);

  const transform = useDerivedValue(() => {
    return [{ translateX: gradientValue.value }];
  }, [gradientValue.value]);

  function handlePress(
    e: GestureStateChangeEvent<PanGestureHandlerEventPayload>,
  ) {
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
    <Hint disabled={!hint} text={hint ?? ''} onPress={handlePress} {...props}>
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
          style={[styles.button, buttonSizeStyle, buttonVariantStyle]}
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
    </Hint>
  );
};

export default Button;
