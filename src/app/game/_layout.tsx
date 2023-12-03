import { Image } from 'expo-image';
import { Slot } from 'expo-router';
import { Dimensions } from 'react-native';

import localImage from 'assets/splash.png';
const { height } = Dimensions.get('window');
export default function _Layout() {
  return (
    <>
      <Image
        source={localImage}
        style={{
          height,
          position: 'absolute',
          top: -170,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          alignItems: 'flex-end',
        }}
      />
      <Slot />
    </>
  );
}
