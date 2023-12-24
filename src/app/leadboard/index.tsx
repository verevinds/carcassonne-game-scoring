import { useLayoutEffect } from 'react';

import { useRouter } from 'expo-router';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ButtonLongPress from 'components/buttons/button-long-press';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';
import { capitalize } from 'utils/capitalize';

function PlayerLeadboard() {
  const store = useStore();
  const router = useRouter();
  useLayoutEffect(() => {
    store.playersStore.updatePlayerPositions();
  }, []);
  function onRestart() {
    store.restart();
    router.replace('/players');
  }
  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <Text style={styles.title}>View your</Text>
      <Text style={styles.subtitle}>Player's Results</Text>
      <View style={styles.body}>
        <View style={styles.tableHeader}>
          <Text style={styles.positionTitle}>Position</Text>
          <Text style={styles.nameTitle}>Name</Text>
          <Text style={styles.pointsTitle}>Points</Text>
        </View>
        <FlatList
          data={store.playersStore.leaderBoard}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.position}>{item.position}</Text>
              <Text style={styles.name}>{capitalize(item.name)} player</Text>
              <Text style={styles.points}>{item.points}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StickyContainer>
        <ButtonLongPress onPress={onRestart}>Start again</ButtonLongPress>
      </StickyContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    ...TYPOGRAPHY.SUBTITLE_2,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADER_1,
  },
  body: {
    marginTop: 50,
  },
  name: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  position: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  points: {
    ...TYPOGRAPHY.PARAGRAPH_1,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameTitle: {
    ...TYPOGRAPHY.HEADER_2,
  },
  positionTitle: {
    ...TYPOGRAPHY.HEADER_2,
  },
  pointsTitle: {
    ...TYPOGRAPHY.HEADER_2,
  },
});

export default observer(PlayerLeadboard);
