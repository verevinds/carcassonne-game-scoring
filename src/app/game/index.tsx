import { useLayoutEffect } from 'react';

import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CustomBackButton from 'components/button-back';
import Button from 'components/button-link';
import CardNavigation from 'components/card-navigation';
import Features from 'components/features';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';

function GameScreen() {
  const store = useStore();
  useLayoutEffect(() => {
    const player = store.playersStore.getPlayer(
      store.playersStore.namePlayers[0].name,
    );
    store.gameStore.setPlayer(player);
  }, [store.playersStore.namePlayers[0].name]);
  const selectedPlayer = store.gameStore.selectedPlayer;

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomBackButton />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Calculate your</Text>
        <Text style={styles.subtitle}>Completed Feature’s Points</Text>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
          }}
          data={store.playersStore.namePlayers}
          horizontal
          renderItem={({ item }) => <CardNavigation name={item.name} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        {selectedPlayer ? (
          <Features
            index={store.playersStore.namePlayers.findIndex(
              (el) => el.name === selectedPlayer.name,
            )}
            player={selectedPlayer}
          />
        ) : null}
      </View>
      <StickyContainer>
        <Button href="/scoring">Finish Game</Button>
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
  navigation: {
    paddingHorizontal: 20,
  },
});

export default observer(GameScreen);
