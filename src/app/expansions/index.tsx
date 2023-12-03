import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Button from 'components/button/button';
import { BASE_PADDING } from 'themes/constants';
import { useFonts } from 'expo-font';
import { TYPOGRAPHY } from 'themes/constants';
import SvgComponent from 'assets/icons/farme';
import { Stack } from 'expo-router';
import CustomBackButton from 'components/button-back/button-back';

export default function ExpansionsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Expansions</Text>
        <View style={styles.svgContainer}></View>
      </View>
      <Button href="/players"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
    backgroundColor: '#EDE9DE',
  },
  main: {
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADING_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
