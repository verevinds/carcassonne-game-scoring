import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, useNavigation } from 'expo-router';
import ArrowIcon from 'assets/icons/arrow';

export default function CustomBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#F6F4EE',
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
