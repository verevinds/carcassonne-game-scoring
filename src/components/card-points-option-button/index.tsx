import { useState } from 'react';

import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CityIcon from 'assets/icons/city';
import EllipsisIcon from 'assets/icons/ellipsis';
import Feature from 'components/feature';
import Modal from 'components/modal';
import { PlayerStore } from 'stores/player-store';
import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

const CardPointsOptionButton = ({ player }: { player: PlayerStore }) => {
  const [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((prev) => !prev);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }

  return (
    <TouchableOpacity
      style={[styles.button, styles.ellipsisButton]}
      onPress={toggleOpen}
    >
      <EllipsisIcon stroke={COLORS.BACKGROUND_50} width={20} />
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <Text style={styles.title}>Optionals features</Text>
        <Feature
          description="2 points for the coat of arms"
          feature={player.shield}
          icon={<CityIcon height={50} width={50} />}
          player={player}
          title="The Shields"
        />
      </Modal>
    </TouchableOpacity>
  );
};

export default observer(CardPointsOptionButton);
