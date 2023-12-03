import { useNavigation } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

import ExitIcon from 'assets/icons/exit';

export default function CustomExitButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
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
