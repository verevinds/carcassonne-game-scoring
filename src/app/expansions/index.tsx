import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';

import Button from 'components/button-link';
import CardSelectExpansions from 'components/card-select-expansions';
import ShadeFlatList from 'components/shade-flat-list';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { SPACING, TYPOGRAPHY } from 'themes/constants';

function ExpansionsScreen() {
  const store = useStore();
  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Expansions</Text>
        <ShadeFlatList
          data={store.expansionsStore.variants}
          renderItem={({ item }) => <CardSelectExpansions {...item} />}
        />
      </View>
      <StickyContainer>
        <Button
          disabled={!store.expansionsStore.isExpansionSelected}
          href="/players"
        >
          Select Players
        </Button>
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
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.SUBTITLE_2,
  },
  subtitle: {
    paddingHorizontal: SPACING.SPACING_6,
    ...TYPOGRAPHY.HEADER_1,
  },
  body: {
    marginTop: 50,
    overflow: 'hidden',
  },
});

export default observer(ExpansionsScreen);
