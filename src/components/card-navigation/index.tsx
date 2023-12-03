import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import ArrowIcon from 'assets/icons/arrow';
import PlayerIcon from 'assets/icons/player';
import { COLORS, PLAYER_COLOR_NAME } from 'themes/constants';

import { styles } from './index.styles';

function CardNavigation({
  name,
  position,
  points,
}: {
  name: PLAYER_COLOR_NAME;
  position: number;
  points: number;
}) {
  return (
    <Link
      href={{
        pathname: '/game/[name]',
        params: { name },
      }}
      style={{
        marginBottom: 10,
        shadowColor: COLORS.SHADOW_1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
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
            <Text style={styles.position}>position {position}</Text>
          </View>
          <Text style={styles.points}>points: {points}</Text>
        </View>
        <View style={styles.navigation}>
          <ArrowIcon mirror />
        </View>
      </View>
    </Link>
  );
}

export default CardNavigation;
