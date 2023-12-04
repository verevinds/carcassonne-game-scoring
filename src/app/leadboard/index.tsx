import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Button from 'components/button-tangled';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';
import { capitalize } from 'utils/capitalize';

function PlayerLeadboard() {
  const store = useStore();
  function onRestart() {
    store.restart();
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
        />
      </View>

      <Button
        disabled={!store.playersStore.isPlayerSelected}
        href="/players"
        onPress={onRestart}
      >
        Start again
      </Button>
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
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADING_2,
  },
  body: {
    marginTop: 50,
  },
  name: {
    ...TYPOGRAPHY.HEADING_2,
  },
  position: {
    ...TYPOGRAPHY.HEADING_2,
  },
  points: {
    ...TYPOGRAPHY.HEADING_2,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameTitle: {
    ...TYPOGRAPHY.HEADING_1,
  },
  positionTitle: {
    ...TYPOGRAPHY.HEADING_1,
  },
  pointsTitle: {
    ...TYPOGRAPHY.HEADING_1,
  },
});
export default observer(PlayerLeadboard);
