import { FlatListProps } from 'react-native';

import { CardPointsProps } from 'components/card-points/index.types';
import { PlayerStore, SwitchPlayerStore } from 'stores/player-store';

export type FeaturesProps = {
  player: PlayerStore | SwitchPlayerStore;
} & Pick<CardPointsProps, 'LayoutProps' | 'isFinishGame'> &
  Omit<FlatListProps<any>, 'data' | 'renderItem'>;
