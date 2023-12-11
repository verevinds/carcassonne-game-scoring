import { useNavigation } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';

import ArrowIcon from 'assets/icons/arrow';
import { COLORS } from 'themes/constants';

export default function CustomBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.BACKGROUND_50,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <ArrowIcon />
      </View>
    </TouchableOpacity>
  );
}
