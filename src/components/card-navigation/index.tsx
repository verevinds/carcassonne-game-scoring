import { useCallback, useMemo } from 'react';

import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import PlayerIcon from 'assets/icons/player';
import { useStore } from 'stores';
import { PLAYER_COLOR_NAME } from 'themes/constants';

import { styles } from './index.styles';

function CardNavigation({ name }: { name: PLAYER_COLOR_NAME }) {
  const store = useStore();
  const player = store.playersStore.getPlayer(name);
  const hasSelectedPlayers = useMemo(
    () => Boolean(store.gameStore.selectedPlayer),
    [store.gameStore.selectedPlayer],
  );
  const onPress = useCallback(() => {
    if (hasSelectedPlayers === false) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      store.gameStore.setPlayer(player);
    }
  }, [player?.name, hasSelectedPlayers]);
  const isSelected = useMemo(
    () => store.gameStore.selectedPlayer?.name === player?.name,
    [store.gameStore.selectedPlayer?.name, player?.name],
  );

  return (
    <TouchableNativeFeedback
      disabled={hasSelectedPlayers && !isSelected}
      onPress={onPress}
    >
      <View
        style={[
          styles.container,
          isSelected && styles.selected,
          hasSelectedPlayers && !isSelected ? styles.disabled : undefined,
        ]}
      >
        <PlayerIcon
          height={50}
          opacity={hasSelectedPlayers && !isSelected ? 0.5 : 1}
          variant={name}
          width={50}
        />
      </View>
    </TouchableNativeFeedback>
  );
}

export default observer(CardNavigation);
