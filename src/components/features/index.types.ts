import { FlatListProps } from 'react-native';

import { CardPointsProps } from 'components/card-points/index.types';
import { PlayerStore } from 'stores/player-store';

export type FeaturesProps = {
  player: PlayerStore;
} & Pick<CardPointsProps, 'LayoutProps'> &
  Omit<FlatListProps<any>, 'data' | 'renderItem'>;
