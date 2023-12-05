import { Slot } from 'expo-router';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';
import { COLORS } from 'themes/constants';
const { height, width } = Dimensions.get('window');

function Layout() {
  return (
    <>
      <Pattern
        style={{
          height,
          width,
        }}
      />
      <LinearGradient
        endColor={COLORS.BACKGROUND_85}
        startColor={COLORS.BACKGROUND_95}
        viewBoxHeight={height}
        viewBoxWidth={width}
        x1={-0.2}
        x2={0.45}
        y1={0.25}
        y2={0.9}
      />
      <SafeAreaView style={{ height: '100%' }}>
        <Slot />
      </SafeAreaView>
    </>
  );
}

export default Layout;
