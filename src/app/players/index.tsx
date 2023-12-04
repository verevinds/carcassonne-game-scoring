import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PlayerIcon from 'assets/icons/player';
import CustomExitButton from 'components/button-exit';
import Button from 'components/button-tangled';
import CardSelectPlayers from 'components/card-select-players';
import { useStore } from 'stores';
import { PLAYER_COLOR_NAME, TYPOGRAPHY } from 'themes/constants';

function PlayersScreen() {
  const store = useStore();
  function onExit() {
    store.reset();
  }
  return (
    <View style={styles.container}>
      <CustomExitButton onPress={onExit} />
      <View style={styles.main}>
        <Text style={styles.title}>Select your</Text>
        <Text style={styles.subtitle}>Game Players</Text>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 330,
            }}
            data={[
              {
                text: 'Red player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.RED} />,
                name: PLAYER_COLOR_NAME.RED,
              },
              {
                text: 'Blue player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.BLUE} />,
                name: PLAYER_COLOR_NAME.BLUE,
              },
              {
                text: 'Green player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.GREEN} />,
                name: PLAYER_COLOR_NAME.GREEN,
              },
              {
                text: 'Yellow player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.YELLOW} />,
                name: PLAYER_COLOR_NAME.YELLOW,
              },
              {
                text: 'Pink player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.PINK} />,
                name: PLAYER_COLOR_NAME.PINK,
              },
            ]}
            renderItem={({ item }) => <CardSelectPlayers {...item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Button disabled={!store.playersStore.isPlayerSelected} href="/game">
        Start Game
      </Button>
    </View>
  );
}
export default observer(PlayersScreen);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
    // backgroundColor: '#EDE9DE',
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
    // backgroundColor: '#0604EE',
    marginTop: 50,
  },
});
