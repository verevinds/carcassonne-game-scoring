import { useState } from 'react';

import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EllipsisIcon from 'assets/icons/ellipsis';
import Modal from 'components/modal';
import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

const CardPointsOptionButton = ({
  children,
}: {
  children: JSX.Element | (JSX.Element | null)[];
}) => {
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
        {children}
      </Modal>
    </TouchableOpacity>
  );
};

export default observer(CardPointsOptionButton);
