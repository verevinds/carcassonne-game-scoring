import { useState } from 'react';

import { useRouter } from 'expo-router';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerIcon from 'assets/icons/player';
import CustomExitButton from 'components/button-exit';
import Button from 'components/button-link';
import CardSelectPlayers from 'components/card-select-players';
import ShadeFlatList from 'components/shade-flat-list';
import StickyContainer from 'components/sticky-container';
import WarningModal from 'components/warning-modal';
import { useStore } from 'stores';
import { PLAYER_COLOR_NAME, TYPOGRAPHY } from 'themes/constants';

function PlayersScreen() {
  const route = useRouter();

  const [isOpenWarningModal, setIsOpenWarningModal] = useState(false);
  const store = useStore();
  function onExit() {
    setIsOpenWarningModal(true);
  }
  function onConfirm() {
    setIsOpenWarningModal(false);
    store.reset();
    route.replace('/expansions');
  }
  function onClose() {
    setIsOpenWarningModal(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomExitButton onPress={onExit} />
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

      <WarningModal
        isOpen={isOpenWarningModal}
        onClose={onClose}
        onConfirm={onConfirm}
      />
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
    paddingHorizontal: 20,
    ...TYPOGRAPHY.SUBTITLE_2,
  },
  subtitle: {
    paddingHorizontal: 20,
    ...TYPOGRAPHY.HEADER_1,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  navigation: {
    paddingHorizontal: 20,
  },
});
