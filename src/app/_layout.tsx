import { Slot } from 'expo-router';
import { Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Img from 'assets/splash.png';
import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';

const { height, width } = Dimensions.get('window');

function Layout() {
  return (
    <>
      <Image
        source={Img}
        style={{
          position: 'absolute',
          zIndex: -2,
          height,
          width,
        }}
      />
      <Pattern
        style={{
          height,
          width,
          opacity: 0.7,
        }}
      />
      <LinearGradient style={{ opacity: 0.9 }} />
      <SafeAreaView style={{ height: '100%' }}>
        <Slot />
      </SafeAreaView>
    </>
  );
}

export default Layout;
