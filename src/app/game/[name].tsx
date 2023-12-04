import { useLocalSearchParams } from 'expo-router';
import { observer } from 'mobx-react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import HeaderIcon from 'assets/icons/header';
import CustomBackButton from 'components/button-back';
import Features from 'components/features';
import Pattern from 'components/pattern';
import { useStore } from 'stores';
import { TYPOGRAPHY } from 'themes/constants';

const { height } = Dimensions.get('window');

function EnterPoints() {
  const { name } = useLocalSearchParams<{ name: string }>();

  const store = useStore();
  const player = store.playersStore.getPlayer(name);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomBackButton />
      </View>
      <View style={styles.body}>
        <Pattern />
        <HeaderIcon style={{ marginTop: -65 }} />
        <Text style={styles.title}>
          Enter Points for{' '}
          <Text style={{ textTransform: 'capitalize' }}>{name}</Text> Player
        </Text>

        <View style={{ marginBottom: 50 }}>
          <Features player={player} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  navigation: {
    paddingHorizontal: 20,
  },
  title: {
    ...TYPOGRAPHY.HEADING_2,
  },
  body: {
    position: 'relative',
    paddingHorizontal: 20,
    backgroundColor: '#EDE9DE',
    height: height - 327,
    alignItems: 'center',
    top: 230,
  },
});

export default observer(EnterPoints);
