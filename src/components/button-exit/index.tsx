import * as Haptics from 'expo-haptics';
import { View, TouchableOpacity } from 'react-native';

import ExitIcon from 'assets/icons/exit';

import { CustomExitButtonProps } from './index.types';

export default function CustomExitButton(props: CustomExitButtonProps) {
  function onPress() {
    props.onPress?.();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
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
    </TouchableOpacity>
  );
}
