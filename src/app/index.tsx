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

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Page() {
  const [fontReaded] = useFonts({
    'Roboto-Thin': require('assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Regular': require('assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontReaded) return null;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Improve your game</Text>
        <Text style={styles.subtitle}>Carcassonne</Text>
        <View style={styles.svgContainer}>
          <SvgComponent />
        </View>
      </View>
      <Button href="/expansions"></Button>
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
  },
  main: {
    top: 100,
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.ACCENT_2,
    fontSize: 40,
    width: 240,
  },
  subtitle: {
    ...TYPOGRAPHY.ACCENT_1,
    fontSize: 45,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});