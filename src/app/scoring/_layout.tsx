import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import CustomBackButton from 'components/button-back';
export default function _Layout() {
  return (
    <View style={styles.container}>
      <CustomBackButton />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
  },
});
