import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import ArrowIcon from 'assets/icons/arrow';
import PlayerIcon from 'assets/icons/player';
import { useStore } from 'stores';
import { COLORS, PLAYER_COLOR_NAME } from 'themes/constants';

import { styles } from './index.styles';

function CardNavigation({ name }: { name: PLAYER_COLOR_NAME }) {
  const store = useStore();
  const player = store.playersStore.getPlayer(name);
  return (
    <Link
      href={{
        pathname: '/game/[name]',
        params: { name },
      }}
      style={{
        height: 50,
        marginBottom: 10,
        shadowColor: COLORS.BACKGROUND_100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
      }}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <PlayerIcon variant={name} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{name} player</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.points}>points {player.points}</Text>
            </View>
          </View>
        </View>
        <View style={styles.navigation}>
          <ArrowIcon mirror />
        </View>
      </View>
    </Link>
  );
}

export default CardNavigation;
