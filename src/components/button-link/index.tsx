import { useEffect } from 'react';

import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import ArrowStick from 'assets/icons/arrow-stick';

import messages from './index.messages';
import { styles } from './index.styles';

const ButtonTangled = (props: LinkProps): JSX.Element => {
  const opacity = useSharedValue(0.5);
  useEffect(() => {
    if (props.disabled) {
      opacity.value = 0.5;
    } else {
      opacity.value = 1;
    }
  }, [props.disabled, opacity]);
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
  return (
    <GestureDetector gesture={gesture}>
      <Link
        {...props}
        style={[props.style, styles.link]}
        onPress={props.onPress}
      >
        <View style={styles.container}>
          <Animated.View style={[styles.button, animationStyles]}>
            <Text style={styles.text}>
              {props.children ?? messages.default}
            </Text>
            {props.children ? null : (
              <View style={styles.icon}>
                <ArrowStick />
              </View>
            )}
          </Animated.View>
        </View>
      </Link>
    </GestureDetector>
  );
};

export default ButtonTangled;
