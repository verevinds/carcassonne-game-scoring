import { useEffect } from 'react';

import { observer } from 'mobx-react';
import { Switch, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AbbotIcon from 'assets/icons/abbot';
import CityIcon from 'assets/icons/city';
import FieldsIcon from 'assets/icons/fields';
import MonasteryIcon from 'assets/icons/monastery';
import RoadIcon from 'assets/icons/road';
import CardPointsOptionButton from 'components/card-points-option-button';
import Feature from 'components/feature';
import { useStore } from 'stores';
import { COLORS, SPACING } from 'themes/constants';

import { FeaturesProps } from './index.types';
type FeaturesCards = {
  icon: JSX.Element;
  title: string;
  description: string;
  feature?: any;
  LayoutProps?: {
    withShild?: boolean;
  };
  optionButton?: JSX.Element;
};
function Features({ player, isFinishGame, ...props }: FeaturesProps) {
  const prices = useStore().playersStore.options.price;
  const playerStore = useStore().playersStore;

  const data: FeaturesCards[] = [
    {
      icon: <RoadIcon height={50} width={50} />,
      title: 'The roads',
      description: `${
        isFinishGame ? prices.road.incomplete : prices.road.complete
      } point per tile, when road is completed.`,
      feature: player.road,
      optionButton: (
        <View>
          <CardPointsOptionButton>
            {'markCathedral' in player && 'markCathedral' in playerStore ? (
              <Feature
                LayoutProps={{
                  withoutScoring: true,
                }}
                buttons={
                  <>
                    <View />
                    <Switch
                      ios_backgroundColor={COLORS.BACKGROUND_800}
                      thumbColor={
                        'modified' in player.road && player.road.modified
                          ? COLORS.SECONDARY_500
                          : COLORS.BACKGROUND_50
                      }
                      trackColor={{
                        false: COLORS.BACKGROUND_50,
                        true: COLORS.BACKGROUND_800,
                      }}
                      value={
                        'modified' in player.road ? player.road.modified : false
                      }
                      onValueChange={() => {
                        player.road.toggleModified();
                      }}
                    />
                  </>
                }
                description={`${
                  isFinishGame
                    ? playerStore.options.price.inn.incomplete
                    : playerStore.options.price.inn.complete
                } points per tile of completed road (instead of ${
                  isFinishGame
                    ? playerStore.options.price.road.incomplete
                    : playerStore.options.price.road.complete
                } points).`}
                icon={<RoadIcon height={50} width={50} />}
                isFinishGame={isFinishGame}
                player={player}
                title="The Inns"
              />
            ) : null}
          </CardPointsOptionButton>
        </View>
      ),
    },
    {
      icon: <MonasteryIcon height={50} width={50} />,
      title: 'The monasteries',
      description: `${
        isFinishGame ? prices.monastery.incomplete : prices.monastery.complete
      } points for completed monastery.`,
      feature: player.monastery,
    },
    {
      icon: <CityIcon height={50} width={50} />,
      title: 'The cities',
      description: `${
        isFinishGame ? prices.city.incomplete : prices.city.complete
      } points per tile of city.`,
      LayoutProps: {
        withShild: true,
      },
      feature: player.city,
      optionButton: (
        <View>
          <CardPointsOptionButton>
            <Feature
              description={`${
                isFinishGame ? prices.city.incomplete : prices.city.complete
              } for coat of arms.`}
              feature={player.shield}
              icon={<CityIcon height={50} width={50} />}
              isFinishGame={isFinishGame}
              player={player}
              title="The Shields"
            />
            {'markCathedral' in player && 'markCathedral' in playerStore ? (
              <Feature
                LayoutProps={{
                  withoutScoring: true,
                }}
                buttons={
                  <>
                    <View />
                    <Switch
                      ios_backgroundColor={COLORS.BACKGROUND_800}
                      thumbColor={
                        'modified' in player.city && player.city.modified
                          ? COLORS.SECONDARY_500
                          : COLORS.BACKGROUND_50
                      }
                      trackColor={{
                        false: COLORS.BACKGROUND_50,
                        true: COLORS.BACKGROUND_800,
                      }}
                      value={
                        'modified' in player.city ? player.city.modified : false
                      }
                      onValueChange={() => {
                        player.city.toggleModified();
                        player.shield.toggleModified();
                      }}
                    />
                  </>
                }
                description={`${
                  isFinishGame
                    ? playerStore.options.price.cathedral.incomplete
                    : playerStore.options.price.cathedral.complete
                } points per tile and coat of arms in this completed city (instead of ${
                  isFinishGame
                    ? playerStore.options.price.city.incomplete
                    : playerStore.options.price.city.complete
                } points).`}
                icon={<CityIcon height={50} width={50} />}
                isFinishGame={isFinishGame}
                player={player}
                title="The cathedrals"
              />
            ) : null}
          </CardPointsOptionButton>
        </View>
      ),
    },
    {
      icon: <AbbotIcon height={50} width={50} />,
      title: 'The abbots',
      description: `${
        isFinishGame ? prices.abbot.incomplete : prices.abbot.complete
      } point for each adjacent tile, including the Abbot's tile, anytime or end.`,
      feature: player.abbot,
    },
  ];

  useEffect(() => {
    if (isFinishGame) {
      data.push({
        icon: <FieldsIcon height={50} width={50} />,
        title: 'The fields',
        description: `${prices.fields.incomplete} points for each adjacent completed city.`,
        feature: player.fields,
      });
    }
  }, [isFinishGame]);

  return (
    <FlatList<FeaturesCards>
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.SPACING_6,
        paddingBottom: 150,
        paddingHorizontal: SPACING.SPACING_6,
      }}
      {...props}
      data={data}
      renderItem={({ item }) => (
        <Feature {...item} isFinishGame={isFinishGame} player={player} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default observer(Features);
