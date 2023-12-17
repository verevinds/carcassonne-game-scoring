import { useEffect } from 'react';

import { observer } from 'mobx-react';
import { FlatList } from 'react-native-gesture-handler';

import AbbotIcon from 'assets/icons/abbot';
import CityIcon from 'assets/icons/city';
import FieldsIcon from 'assets/icons/fields';
import MonasteryIcon from 'assets/icons/monastery';
import RoadIcon from 'assets/icons/road';
import CardPoints from 'components/card-points';
import { useStore } from 'stores';
import { SPACING } from 'themes/constants';

import { FeaturesProps } from './index.types';

function Features({ player, LayoutProps, ...props }: FeaturesProps) {
  const prices = useStore().playersStore.options.price;

  const isFinishGame = Boolean(LayoutProps?.withIndicator);
  const data = [
    {
      icon: <RoadIcon height={50} width={50} />,
      title: 'The roads',
      description: `${
        isFinishGame ? prices.road.incomplete : prices.road.complete
      } point per tile, when road is completed.`,
      LayoutProps: { withIndicator: LayoutProps?.withIndicator },
      feature: player.road,
    },
    {
      icon: <MonasteryIcon height={50} width={50} />,
      title: 'The monasteries',
      description: `${
        isFinishGame ? prices.monastery.incomplete : prices.monastery.complete
      } points for fully surrounded monastery.`,
      LayoutProps: { withIndicator: LayoutProps?.withIndicator },
      feature: player.monastery,
    },
    {
      icon: <CityIcon height={50} width={50} />,
      title: 'The cities',
      description: `${
        isFinishGame ? prices.city.incomplete : prices.city.complete
      } points per tile, +${
        isFinishGame ? prices.city.incomplete : prices.city.complete
      } for coat of arms, if city is completed.`,
      LayoutProps: {
        withShild: true,
        withIndicator: LayoutProps?.withIndicator,
      },
      feature: player.city,
    },
    {
      icon: <AbbotIcon height={50} width={50} />,
      title: 'The abbots',
      description: `${
        isFinishGame ? prices.abbot.incomplete : prices.abbot.complete
      } point for each adjacent tile, including the Abbot's tile, anytime or end.`,
      LayoutProps: { withIndicator: LayoutProps?.withIndicator },
      feature: player.abbot,
    },
  ];

  useEffect(() => {
    if (isFinishGame) {
      data.push({
        icon: <FieldsIcon height={50} width={50} />,
        title: 'The fields',
        description: `${prices.fields.incomplete} points for each adjacent completed city.`,
        LayoutProps: { withIndicator: LayoutProps?.withIndicator },
        feature: player.fields,
      });
    }
  }, [isFinishGame]);

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.SPACING_6,
        paddingBottom: SPACING.SPACING_6,
      }}
      {...props}
      data={data}
      renderItem={({ item }) => <CardPoints {...item} player={player} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default observer(Features);
