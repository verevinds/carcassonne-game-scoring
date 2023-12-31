import { observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import CustomBackButton from 'components/buttons/button-back';
import Button from 'components/buttons/button-link';
import CardSelectPlayers from 'components/card-select-players';
import ShadeFlatList from 'components/shade-flat-list';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { SPACING, TYPOGRAPHY } from 'themes/constants';

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
          data={store.playersStore.variants}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(100 * index)}>
              <CardSelectPlayers {...item} />
            </Animated.View>
          )}
        />
      </View>

      <StickyContainer>
        <Button
          disabled={!store.playersStore.isPlayerSelected}
          hint="Select players to begin"
          href="/game"
        >
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
