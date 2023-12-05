import { EXPANTIONS_NAME } from 'constants/expansions';

import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BuilderAndTraderIcon from 'assets/icons/builder-and-trader';
import CastleIcon from 'assets/icons/castle';
import CastleRiverIcon from 'assets/icons/castle-river';
import CathedralIcon from 'assets/icons/cathedral';
import DragonIcon from 'assets/icons/dragon';
import Button from 'components/button-tangled';
import CardSelectExpansions from 'components/card-select-expansions';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';

function ExpansionsScreen() {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Expansions</Text>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 230,
              paddingHorizontal: 20,
              paddingTop: 10,
            }}
            data={[
              {
                text: EXPANTIONS_NAME.BASIC_VERSION_2,
                icon: <CastleRiverIcon />,
              },
              {
                text: EXPANTIONS_NAME.BASIC_VERSION,
                icon: <CastleIcon />,
                disabled: true,
              },
              {
                text: EXPANTIONS_NAME.INNS_AND_CATHEDRALS,
                icon: <CathedralIcon />,
                disabled: true,
              },
              {
                text: EXPANTIONS_NAME.TRADERS_AND_BUILDERS,
                icon: <BuilderAndTraderIcon />,
                disabled: true,
              },
              {
                text: EXPANTIONS_NAME.THE_PRINCESS_AND_THE_DRAGON,
                icon: <DragonIcon />,
                disabled: true,
              },
            ]}
            renderItem={({ item }) => <CardSelectExpansions {...item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <Button
        disabled={!store.expansionsStore.isExpansionSelected}
        href="/players"
      >
        Select Players
      </Button>
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
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    paddingHorizontal: 20,
    ...TYPOGRAPHY.HEADING_2,
  },
  body: {
    marginTop: 50,
  },
});

export default observer(ExpansionsScreen);
