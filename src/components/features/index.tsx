import { useEffect } from 'react';

import { observer } from 'mobx-react';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import AbbotIcon from 'assets/icons/abbot';
import CityIcon from 'assets/icons/city';
import FieldsIcon from 'assets/icons/fields';
import MonasteryIcon from 'assets/icons/monastery';
import RoadIcon from 'assets/icons/road';
import CardPoints from 'components/card-points';
import { useStore } from 'stores';

import { FeaturesProps } from './index.types';

function Features({
  player,
  LayoutProps,
  index = 0,
  withAnimated,
  ...props
}: FeaturesProps) {
  const prices = useStore().playersStore.options.price;
  const rotate = useSharedValue(0);

  useEffect(() => {
    if (withAnimated === false) {
      rotate.value = withTiming(
        90,
        {
          duration: 150,
          easing: Easing.linear,
        },
        (isFinished) => {
          if (isFinished) {
            rotate.value = withTiming(0, {
              duration: 150,
              easing: Easing.linear,
            });
          }
        },
      );
    }
  }, [index]);

  const animationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(rotate.value, [0, 180, 360], [1, 0.8, 1]) }, // Меняем масштаб в зависимости от угла вращения
      ],
      opacity: interpolate(rotate.value, [0, 180, 360], [1, 0, 1]),
    };
  });
  const isFinishGame = Boolean(LayoutProps?.withIndicator);
  const data = [
    {
      icon: <RoadIcon />,
      title: 'The roads',
      description: `${
        isFinishGame ? prices.road.incomplete : prices.road.complete
      } point per tile, when road is completed.`,
      LayoutProps: { withIndicator: LayoutProps?.withIndicator },
      feature: player.road,
    },
    {
      icon: <MonasteryIcon />,
      title: 'The monasteries',
      description: `${
        isFinishGame ? prices.monastery.incomplete : prices.monastery.complete
      } points for fully surrounded monastery.`,
      LayoutProps: { withIndicator: LayoutProps?.withIndicator },
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
        withIndicator: LayoutProps?.withIndicator,
      },
      feature: player.city,
    },
    {
      icon: <AbbotIcon />,
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
        icon: <FieldsIcon />,
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
        marginTop: 20,
        paddingBottom: 20,
      }}
      {...props}
      data={data}
      renderItem={({ item }) => (
        <Animated.View style={animationStyles}>
          <CardPoints {...item} player={player} />
        </Animated.View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default observer(Features);
