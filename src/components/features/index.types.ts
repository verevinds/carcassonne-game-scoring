import { CardPointsProps } from 'components/card-points/index.types';
import { PlayerStore } from 'stores/player-store';

export type FeaturesProps = {
  player: PlayerStore;
} & Pick<CardPointsProps, 'LayoutProps'>;
