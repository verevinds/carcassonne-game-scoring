import { observer } from 'mobx-react';
import { Text, View } from 'react-native';

import Features from 'components/features';
import { useStore } from 'stores';
import { capitalize } from 'utils/capitalize';

import { styles } from './index.styles';
import { PlayerScoringProps } from './index.types';

function PlayerScoring(props: PlayerScoringProps) {
  const player = useStore().playersStore.getPlayer(props.name);
  if (!player) return null;
  return (
    <View>
      <Text style={styles.title}>
        Scoring for {capitalize(props.name)} layer
      </Text>
      <Features
        LayoutProps={{
          withIndicator: true,
        }}
        player={player}
      />
    </View>
  );
}

export default observer(PlayerScoring);
