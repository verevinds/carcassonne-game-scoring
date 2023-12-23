import { useCallback, useMemo } from 'react';

import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PlayerIcon from 'assets/icons/player';
import { useStore } from 'stores';
import { PLAYER_COLOR_NAME } from 'themes/constants';

import { styles } from './index.styles';

function CardNavigation({ name }: { name: PLAYER_COLOR_NAME }) {
  const store = useStore();
  const player = store.playersStore.getPlayer(name);
  const onPress = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    store.gameStore.setPlayer(player);
  }, [player?.name]);
  const isSelected = useMemo(
    () => store.gameStore.selectedPlayer?.name === player?.name,
    [store.gameStore.selectedPlayer?.name, player?.name],
  );

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={onPress}
    >
      <PlayerIcon height={50} variant={name} width={50} />
    </TouchableOpacity>
  );
}

export default observer(CardNavigation);
