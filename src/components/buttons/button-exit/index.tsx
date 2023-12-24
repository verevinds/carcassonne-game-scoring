import { useState } from 'react';

import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

import ExitIcon from 'assets/icons/exit';
import WarningModal from 'components/warning-modal';
import { useStore } from 'stores';

import { CustomExitButtonProps } from './index.types';

export default function CustomExitButton(_props: CustomExitButtonProps) {
  const store = useStore();
  const route = useRouter();
  const [isOpenWarningModal, setIsOpenWarningModal] = useState(false);
  function onPress() {
    setIsOpenWarningModal(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  }
  function onConfirm() {
    setIsOpenWarningModal(false);
    store.reset();
    route.replace('/expansions');
  }
  function onClose() {
    setIsOpenWarningModal(false);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <ExitIcon />
      </View>

      <WarningModal
        isOpen={isOpenWarningModal}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </TouchableOpacity>
  );
}
