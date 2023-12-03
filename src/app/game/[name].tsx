import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import HeaderIcon from 'assets/icons/header';
import CustomBackButton from 'components/button-back';
import { TYPOGRAPHY } from 'themes/constants';

const { height, width } = Dimensions.get('window');

export default function EnterPoints() {
  const { name } = useLocalSearchParams<{ name: string }>();
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomBackButton />
      </View>
      <View style={styles.body}>
        <HeaderIcon style={{ marginTop: -65 }} />
        <Text style={styles.title}>
          Enter Points for{' '}
          <Text style={{ textTransform: 'capitalize' }}>{name}</Text> Player
        </Text>
        <View style={styles.list} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  window: {
    flex: 1,
    height: 128,
  },
  main: {
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.HEADING_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  navigation: {
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 20,
    backgroundColor: '#EDE9DE',
    height: height - 327,
    alignItems: 'center',
    top: 230,
  },
  list: {
    marginTop: 20,
  },
  content: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: '#E5DECE',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: width - 40,
    backgroundColor: '#F6F4EE',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    ...TYPOGRAPHY.SUBTITLE_1,
    textTransform: 'capitalize',
  },
  cardPosition: {
    ...TYPOGRAPHY.CAPTION_2,
  },
  cardPoints: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  cardNavigation: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
});