import { Slot } from 'expo-router';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Pattern from 'components/pattern';
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
      <SafeAreaView style={{ height: '100%' }}>
        <Slot />
      </SafeAreaView>
    </>
  );
}

export default Layout;
