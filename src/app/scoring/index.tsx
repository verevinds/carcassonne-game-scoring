import { useRouter } from 'expo-router';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ButtonLongPress from 'components/button-long-press';
import PlayerScoring from 'components/player-scoring';
import ButtonSticky from 'components/sticky-container';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';

function PlayersScreen() {
  const store = useStore();
  const router = useRouter();
  function onConfirm() {
    router.replace('/leadboard');
  }

  return (
    <>
      <View>
        <Text style={styles.title}>Confirm your</Text>
        <Text style={styles.subtitle}>Game Scoring</Text>
        <Text style={styles.caption}>
          Scoring all incomplete feature and the fields.
        </Text>
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

      <ButtonSticky>
        <ButtonLongPress onPress={onConfirm}>Confirm</ButtonLongPress>
      </ButtonSticky>
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
    marginTop: 20,
  },
  caption: {
    ...TYPOGRAPHY.CAPTION_1,
  },
});

export default observer(PlayersScreen);
