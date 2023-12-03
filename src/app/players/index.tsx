import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PlayerIcon from 'assets/icons/player';
import Button from 'components/button';
import CustomBackButton from 'components/button-back';
import { Card } from 'components/card';
import { PLAYER_COLOR_NAME, TYPOGRAPHY } from 'themes/constants';

export default function PlayersScreen() {
  return (
    <View style={styles.container}>
      <CustomBackButton />
      <View style={styles.main}>
        <Text style={styles.title}>Choose your</Text>
        <Text style={styles.subtitle}>Game Player</Text>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 330,
            }}
            data={[
              {
                text: 'Red player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.RED} />,
              },
              {
                text: 'Blue player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.BLUE} />,
              },
              {
                text: 'Green player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.GREEN} />,
              },
              {
                text: 'Yellow player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.YELLOW} />,
              },
              {
                text: 'Pink player',
                icon: <PlayerIcon variant={PLAYER_COLOR_NAME.PINK} />,
              },
            ]}
            renderItem={(props) => (
              <Card icon={props.item.icon} text={props.item.text} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Button href="/game" />
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
    marginTop: 50,
  },
});
