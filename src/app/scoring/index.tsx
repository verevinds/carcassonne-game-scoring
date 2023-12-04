import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Button from 'components/button-tangled';
import PlayerScoring from 'components/player-scoring';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';

function PlayersScreen() {
  const store = useStore();
  return (
    <>
      <View>
        <Text style={styles.title}>Confirm your</Text>
        <Text style={styles.subtitle}>Game Scoring</Text>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 330,
            }}
            data={store.playersStore.namePlayers}
            renderItem={({ item }) => <PlayerScoring {...item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Button disabled={!store.playersStore.isPlayerSelected} href="/game">
        Confirm
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADING_2,
  },
  body: {
    marginTop: 50,
  },
});

export default observer(PlayersScreen);
