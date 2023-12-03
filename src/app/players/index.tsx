import { StyleSheet, Text, View } from 'react-native';

import Button from 'components/button';
import CustomBackButton from 'components/button-back';
import { TYPOGRAPHY } from 'themes/constants';

export default function PlayersScreen() {
  return (
    <View style={styles.container}>
      <CustomBackButton />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Game Player</Text>
      </View>
      <Button href="/game" />
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
  body: {
    backgroundColor: '#0604EE',
  },
});
