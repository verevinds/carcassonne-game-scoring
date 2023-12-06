import { observer } from 'mobx-react';
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { COLORS } from 'themes/constants';
import { fadeTo } from 'utils/animations/fadeTo';

function ShadeFlatList<ItemT = any>(props: FlatListProps<ItemT>) {
  const shade = useSharedValue(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition > 10) shade.value = fadeTo(1);
    else shade.value = 0;
    props.onScroll?.(event);
  };
  const shadeAnimationStyle = useAnimatedStyle(() => ({
    opacity: shade.value,
  }));
  return (
    <View style={styles.body}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: COLORS.BACKGROUND_90,
            shadowColor: COLORS.BLACK,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
            elevation: 5,
            zIndex: 100,
          },
          shadeAnimationStyle,
        ]}
      />
      <FlatList
        contentContainerStyle={{
          paddingBottom: 230,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
        {...props}
        onScroll={handleScroll}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    overflow: 'hidden',
  },
});

export default observer(ShadeFlatList);
