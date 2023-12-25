import React from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useAnimationLongPress } from './index.hooks';
import messages from './index.messages';
import { styles } from './index.styles';
import { ButtonLongPressProps } from './index.types';

function ButtonLongPress({ onPress, children }: ButtonLongPressProps) {
  const {
    gesture,
    hintAnimatedStyles,
    impulseAnimatedStyles,
    impulseSecondaryAnimatedStyles,
  } = useAnimationLongPress(onPress);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <View style={styles.button}>
          <Animated.View style={[styles.hint, hintAnimatedStyles]}>
            <Text style={styles.hintText}>{messages.hint}</Text>
          </Animated.View>
          <View style={styles.content}>
            <Animated.View
              style={[styles.circle, impulseSecondaryAnimatedStyles]}
            />
            <Animated.View style={[styles.circle, impulseAnimatedStyles]} />
            <Text style={styles.text}>{children}</Text>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default observer(ButtonLongPress);
