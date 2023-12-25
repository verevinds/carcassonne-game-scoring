import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import SvgComponent from 'assets/icons/farme';
import Button from 'components/buttons/button-link';
import StickyContainer from 'components/sticky-container';
import { SPACING, TYPOGRAPHY } from 'themes/constants';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function Page() {
  const [fontReaded] = useFonts({
    'Roboto-Thin': require('assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Regular': require('assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('assets/fonts/Roboto-Black.ttf'),
    'Roboto-Light': require('assets/fonts/Roboto-Light.ttf'),
  });
  const opacity = useSharedValue(0);
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontReaded) {
      opacity.value = 1;
      // await SplashScreen.hideAsync();
    }
  }, [fontReaded]);

  if (!fontReaded) return null;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.main}>
        <Animated.Text style={[styles.title, opacityStyle]}>
          Improve your game
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, opacityStyle]}>
          Carcassonne
        </Animated.Text>
        <Animated.View style={[styles.svgContainer, opacityStyle]}>
          <SvgComponent />
        </Animated.View>
      </View>
      <StickyContainer>
        <Animated.View style={[opacityStyle]}>
          <Button href="/expansions" />
        </Animated.View>
      </StickyContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: SPACING.SPACING_6,
  },
  main: {
    top: 100,
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.TITLE_1,
    width: 240,
  },
  subtitle: {
    marginTop: 20,
    ...TYPOGRAPHY.TITLE_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
