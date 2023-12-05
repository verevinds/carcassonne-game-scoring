import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HeaderIcon from 'assets/icons/header';
import CustomBackButton from 'components/button-back';
import Button from 'components/button-link';
import CardNavigation from 'components/card-navigation';
import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { COLORS, TYPOGRAPHY } from 'themes/constants';
const { height, width } = Dimensions.get('window');

export default function GameScreen() {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <CustomBackButton />
      </View>
      <View style={styles.body}>
        <Pattern />
        <LinearGradient
          endColor={COLORS.BACKGROUND_85}
          startColor={COLORS.BACKGROUND_95}
          viewBoxHeight={height}
          viewBoxWidth={width}
          x1={-0.2}
          x2={0.45}
          y1={0.25}
          y2={0.9}
        />
        <HeaderIcon style={{ marginTop: -65 }} />
        <Text style={styles.title}>Select a Player to Enter Points</Text>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            paddingBottom: 130,
          }}
          data={store.playersStore.namePlayers}
          renderItem={({ item }) => <CardNavigation name={item.name} />}
          showsVerticalScrollIndicator={false}
          style={{
            width,
          }}
        />
      </View>
      <StickyContainer>
        <Button href="/scoring">Finish Game</Button>
      </StickyContainer>
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
    backgroundColor: '#EDE9DE',
    height: height - 327,
    alignItems: 'center',
    top: 230,
  },
});
