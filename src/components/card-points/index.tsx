import { Children } from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';

import { PLAYER_COLORS } from 'themes/constants';

import { styles } from './index.styles';
import { CardPointsProps } from './index.types';

function CardPoints({
  feature,
  title,
  description,
  icon,
  isFinishGame,
  player,
  buttons,
}: CardPointsProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          { backgroundColor: PLAYER_COLORS[player.name] },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: -10,
            bottom: -10,
          }}
        >
          <Text style={styles.count}>
            counts:{' '}
            {isFinishGame ? feature?.countImcomplete ?? 0 : feature?.count ?? 0}
          </Text>
          <Text style={styles.points}>
            points: {feature?.points.toString().padStart(3, '0') ?? 0}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.navigation}>
        {Children.map(buttons, (child) => child)}
      </View>
    </View>
  );
}

export default observer(CardPoints);
