import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerIcon from 'assets/icons/player';
import CustomBackButton from 'components/button-back';
import Button from 'components/button-link';
import CardSelectPlayers from 'components/card-select-players';
import ShadeFlatList from 'components/shade-flat-list';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { PLAYER_COLOR_NAME, SPACING, TYPOGRAPHY } from 'themes/constants';

function PlayersScreen() {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomBackButton />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Select your</Text>
        <Text style={styles.subtitle}>Game Players</Text>
        <ShadeFlatList
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
              text: 'Grey player',
              icon: <PlayerIcon variant={PLAYER_COLOR_NAME.GREY} />,
              name: PLAYER_COLOR_NAME.GREY,
            },
            {
              text: 'Pink player',
              icon: <PlayerIcon variant={PLAYER_COLOR_NAME.PINK} />,
              name: PLAYER_COLOR_NAME.PINK,
            },
          ]}
          renderItem={({ item }) => <CardSelectPlayers {...item} />}
        />
      </View>

      <StickyContainer>
        <Button disabled={!store.playersStore.isPlayerSelected} href="/game">
          Start Game
        </Button>
      </StickyContainer>
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
  },
  main: {
    padding: 0,
    margin: 0,
  },
  title: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.SUBTITLE_2,
  },
  subtitle: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.HEADER_1,
  },
  navigation: {
    paddingHorizontal: SPACING.SPACING_6,
  },
});
