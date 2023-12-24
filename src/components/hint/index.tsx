import React, { PropsWithChildren } from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useAnimationHint } from './index.hooks';
import { styles } from './index.styles';
import { HintProps } from './index.types';

function Hint({
  text,
  children,
  disabled,
  onPress,
}: PropsWithChildren<HintProps>) {
  const { gesture, hintAnimatedStyles } = useAnimationHint({
    disabled,
    onPress,
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View>
          <Animated.View style={[styles.hint, hintAnimatedStyles]}>
            <Text style={styles.hintText}>{text}</Text>
          </Animated.View>
          {children}
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default observer(Hint);
