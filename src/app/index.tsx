import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

import SvgComponent from 'assets/icons/farme';
import Button from 'components/button-link';
import StickyContainer from 'components/sticky-container';
import { TYPOGRAPHY } from 'themes/constants';

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
      <StickyContainer>
        <Button href="/expansions" />
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
    paddingHorizontal: 20,
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
    ...TYPOGRAPHY.TITLE_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
