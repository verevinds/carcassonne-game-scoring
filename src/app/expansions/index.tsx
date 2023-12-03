import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BuilderAndTraderIcon from 'assets/icons/builder-and-trader';
import CastleIcon from 'assets/icons/castle';
import CastleRiverIcon from 'assets/icons/castle-river';
import CathedralIcon from 'assets/icons/cathedral';
import DragonIcon from 'assets/icons/dragon';
import Button from 'components/button-tangled';
import { Card } from 'components/card-select';
import { TYPOGRAPHY } from 'themes/constants';

export default function ExpansionsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ minHeight: 50 }} />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Expansions</Text>
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
      <Button href="/players">Select Players</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
    // backgroundColor: '#ED0',
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
  body: {
    marginTop: 50,
  },
});
