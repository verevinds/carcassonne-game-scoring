import { ICityFeatureStore } from 'stores/city-feature-store';
import { IFeatureStore } from 'stores/feature-store';
import { PlayerStore } from 'stores/player-store';

export type CardPointsProps = {
  feature: ICityFeatureStore | IFeatureStore | undefined;
  title: string | undefined;
  description: string | undefined;
  icon: JSX.Element;
  LayoutProps?: { withShild?: boolean; withIndicator?: boolean };
  player: PlayerStore;
};
