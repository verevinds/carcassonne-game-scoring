import { useEffect, useRef } from 'react';

import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { View, Text, Animated } from 'react-native';

import { styles } from './index.styles';

const Button = (props: LinkProps): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.disabled ? 0.5 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [props.disabled]);

  return (
    <Link {...props} style={[props.style, styles.link]}>
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.button,
            opacity: fadeAnim,
          }}
        >
          <Text style={styles.text}>{props.children ?? 'Get started'}</Text>
        </Animated.View>
      </View>
    </Link>
  );
};

export default Button;
