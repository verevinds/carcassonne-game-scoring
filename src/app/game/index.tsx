import { Link } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ArrowIcon from 'assets/icons/arrow';
import HeaderIcon from 'assets/icons/header';
import PlayerIcon from 'assets/icons/player';
import Button from 'components/button';
import CustomExitButton from 'components/button-exit';
import { COLORS, PLAYER_COLOR_NAME, TYPOGRAPHY } from 'themes/constants';
const { height, width } = Dimensions.get('window');

function Card({
  name,
  position,
  points,
}: {
  name: PLAYER_COLOR_NAME;
  position: number;
  points: number;
}) {
  return (
    <Link
      href={{
        pathname: '/game/[name]',
        params: { name },
      }}
      style={{
        marginBottom: 10,
        shadowColor: COLORS.SHADOW_1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 10,
      }}
    >
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <PlayerIcon variant={name} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.cardTitle}>{name} player</Text>
            <Text style={styles.cardPosition}>position {position}</Text>
          </View>
          <Text style={styles.cardPoints}>points: {points}</Text>
        </View>
        <View style={styles.cardNavigation}>
          <ArrowIcon mirror />
        </View>
      </View>
    </Link>
  );
}
export default function GameScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomExitButton />
      </View>
      <View style={styles.body}>
        <HeaderIcon style={{ marginTop: -65 }} />
        <Text style={styles.title}>Select a Player to Enter Points</Text>

        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            paddingBottom: 130,
          }}
          data={[
            { name: PLAYER_COLOR_NAME.RED, points: 2, position: 2 },
            { name: PLAYER_COLOR_NAME.BLUE, points: 2, position: 2 },
            { name: PLAYER_COLOR_NAME.GREEN, points: 2, position: 2 },
            { name: PLAYER_COLOR_NAME.YELLOW, points: 2, position: 2 },
          ]}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              points={item.points}
              position={item.position}
            />
          )}
          style={{
            width,
          }}
        />
      </View>
      <Button href="/game">Finish Game</Button>
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
