import { observer } from 'mobx-react';
import { FlatList } from 'react-native-gesture-handler';

import AbbotIcon from 'assets/icons/abbot';
import CityIcon from 'assets/icons/city';
import MonasteryIcon from 'assets/icons/monastery';
import RoadIcon from 'assets/icons/road';
import CardPoints from 'components/card-points';
import { useStore } from 'stores';

import { FeaturesProps } from './index.types';

function Features(props: FeaturesProps) {
  const prices = useStore().playersStore.options.price;
  const player = props.player;
  const isFinishGame = Boolean(props.LayoutProps?.withIndicator);
  const data = [
    {
      icon: <RoadIcon />,
      title: 'The roads',
      description: `${
        isFinishGame ? prices.road.incomplete : prices.road.complete
      } point per tile, when road is completed.`,
      LayoutProps: { withIndicator: props.LayoutProps?.withIndicator },
      feature: player.road,
    },
    {
      icon: <MonasteryIcon />,
      title: 'The monasteries',
      description: `${
        isFinishGame ? prices.monastery.incomplete : prices.monastery.complete
      } points for fully surrounded monastery.`,
      LayoutProps: { withIndicator: props.LayoutProps?.withIndicator },
      feature: player.monastery,
    },
    {
      icon: <CityIcon />,
      title: 'The cities',
      description: `${
        isFinishGame ? prices.city.incomplete : prices.city.complete
      } points per tile, +${
        isFinishGame ? prices.city.incomplete : prices.city.complete
      } for coat of arms, if city is completed.`,
      LayoutProps: {
        withShild: true,
        withIndicator: props.LayoutProps?.withIndicator,
      },
      feature: player.city,
    },
    {
      icon: <AbbotIcon />,
      title: 'The abbots',
      description: `${
        isFinishGame ? prices.abbot.incomplete : prices.abbot.complete
      } point for each adjacent tile, including the Abbot's tile, anytime or end.`,
      LayoutProps: { withIndicator: props.LayoutProps?.withIndicator },
      feature: player.abbot,
    },
  ];

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 130,
      }}
      data={data}
      renderItem={({ item }) => <CardPoints {...item} player={player} />}
      style={{}}
    />
  );
}

export default observer(Features);
