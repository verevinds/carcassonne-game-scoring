import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BuilderAndTraderIcon from 'assets/icons/builder-and-trader';
import CastleIcon from 'assets/icons/castle';
import CastleRiverIcon from 'assets/icons/castle-river';
import CathedralIcon from 'assets/icons/cathedral';
import DragonIcon from 'assets/icons/dragon';
import Button from 'components/button';
import { Card } from 'components/card';
import { TYPOGRAPHY, COLORS } from 'themes/constants';

export default function ExpansionsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Expansions</Text>
        <View style={styles.svgContainer} />
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 330,
            }}
            data={[
              { text: 'Basic version', icon: <CastleIcon /> },
              { text: 'Basic version 2.0', icon: <CastleRiverIcon /> },
              { text: 'Inns & Cathedrals', icon: <CathedralIcon /> },
              { text: 'Traders & Builders', icon: <BuilderAndTraderIcon /> },
              { text: 'The Princess & The Dragon', icon: <DragonIcon /> },
            ]}
            renderItem={(props) => (
              <Card icon={props.item.icon} text={props.item.text} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <Button href="/players" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    ...TYPOGRAPHY.SUBTITLE_1,
    width: 220,
    // backgroundColor: '#0604EE',
  },
  cardContainerHighlight: {
    backgroundColor: '#A87257',
  },
  // cardContentHighlight: {
  //   padding: -4,
  // },
  cardContent: {
    // backgroundColor: '#0DE9DE',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  outerContainer: {
    width: 350,
    height: 100,
    padding: 4,
    backgroundColor: '#F6F4EE',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: COLORS.SHADOW_1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F4EE',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
    // backgroundColor: '#EDE9DE',
  },
  main: {
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADING_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  body: {
    // backgroundColor: '#0604EE',
  },
});
