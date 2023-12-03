import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AbbotIcon from 'assets/icons/abbot';
import CityIcon from 'assets/icons/city';
import HeaderIcon from 'assets/icons/header';
import MonasteryIcon from 'assets/icons/monastery';
import RoadIcon from 'assets/icons/road';
import CustomBackButton from 'components/button-back';
import CardPoints from 'components/card-points';
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
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            paddingBottom: 130,
          }}
          data={[
            {
              icon: <RoadIcon />,
              title: 'The roads',
              points: 1,
              description: '1 point per tile, when road is completed.',
            },

            {
              icon: <MonasteryIcon />,
              title: 'The monasteries',
              points: 9,
              description: '9 points for fully surrounded monastery.',
            },
            {
              icon: <CityIcon />,
              title: 'The cities',
              points: 2,
              layoutProps: { withShild: true },
              description:
                '2 points per tile, +2 for coat of arms, if city is completed.',
            },
            {
              icon: <AbbotIcon />,
              title: 'The abbots',
              points: 1,
              description: `1 point for each adjacent tile, including the Abbot's tile, anytime or end.`,
            },
          ]}
          renderItem={({ item }) => (
            <CardPoints
              LayoutProps={item.layoutProps}
              description={item.description}
              icon={item.icon}
              points={item.points}
              title={item.title}
            />
          )}
          style={{
            width,
          }}
        />
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
