import { useNavigation } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

import ExitIcon from 'assets/icons/exit';

import { CustomExitButtonProps } from './index.types';

export default function CustomExitButton(props: CustomExitButtonProps) {
  const navigation = useNavigation();
  function onPress() {
    navigation.goBack();
    props.onPress?.();
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
