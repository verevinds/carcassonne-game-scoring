import { useCallback, useEffect, useRef, useState } from 'react';

import { useRouter } from 'expo-router';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

import Button from 'components/buttons/button';
import CustomBackButton from 'components/buttons/button-back';
import CustomExitButton from 'components/buttons/button-exit';
import ButtonLongPress from 'components/buttons/button-long-press';
import CardNavigation from 'components/card-navigation';
import Features from 'components/features';
import Modal from 'components/modal';
import StickyContainer from 'components/sticky-container';
import { useStore } from 'stores';
import { PlayerStore, mixinCathedralsPlayer } from 'stores/player-store';
import { BUTTON_SIZES, BUTTON_VARIANTS, SPACING } from 'themes/constants';
import { capitalize } from 'utils/capitalize';

import { styles } from './index.styles';
import { PlayerScoringProps } from './index.types';

function PlayerScoring({
  isFinishGame,
  title,
  subtitle,
  caption,
  message,
  buttonText,
}: PlayerScoringProps) {
  const router = useRouter();
  const store = useStore();
  const selectedPlayer = store.gameStore.selectedPlayer;
  const lastPoints = useRef<number>(0);
  const [player, setPlayer] = useState<PlayerStore | null>(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const createNewInstancePlayer = useCallback(() => {
    if (selectedPlayer) {
      if ('markCathedral' in selectedPlayer) {
        const NPlayer = mixinCathedralsPlayer(PlayerStore);
        setPlayer(
          new NPlayer(store, selectedPlayer?.name, selectedPlayer?.options),
        );
      } else {
        setPlayer(
          new PlayerStore(store, selectedPlayer?.name, selectedPlayer?.options),
        );
      }
    }
  }, [selectedPlayer?.name]);
  useEffect(() => {
    createNewInstancePlayer();
    return function () {
      setPlayer(null);
    };
  }, [createNewInstancePlayer]);
  function onAdd() {
    if (isFinishGame) {
      store.playersStore.getPlayer(player?.name)?.mergeCountsIncomplete(player);
    } else {
      store.playersStore.getPlayer(player?.name)?.mergeCounts(player);
    }
    lastPoints.current = player?.pointsLocal ?? 0;
    createNewInstancePlayer();
  }
  function onSave() {
    onAdd();
    store.gameStore.setPlayer(undefined);
  }
  function onConfirm() {
    if (isFinishGame) return router.push('/leadboard');
    router.push('/scoring');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        {isFinishGame ? <CustomBackButton /> : <CustomExitButton />}
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.caption}>{caption}</Text>
        <View style={styles.corusel}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: SPACING.SPACING_6,
              paddingTop: SPACING.SPACING_4,
            }}
            data={store.playersStore.namePlayers}
            horizontal
            renderItem={({ item }) => <CardNavigation name={item.name} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.message}>
          {player && selectedPlayer ? (
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Text style={styles.points}>
                {capitalize(selectedPlayer.name)}'s player points:{' '}
                {selectedPlayer.points.toString().padStart(3, '0')}
              </Text>
              <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
                <Features isFinishGame={isFinishGame} player={player} />
              </Animated.View>
            </Animated.View>
          ) : (
            <View style={styles.leadboardContainer}>
              <View style={styles.leadboard}>
                <View style={styles.additionalButton}>
                  <Text style={styles.listTitle}>Leadboard</Text>
                  <Button
                    size={BUTTON_SIZES.SMALL}
                    variant={BUTTON_VARIANTS.OUTLINE}
                    onPress={() => setOpenModal(true)}
                  >
                    ?
                  </Button>
                </View>

                <FlatList
                  data={store.playersStore.leaderBoard}
                  renderItem={({ item }) => (
                    <View style={styles.row}>
                      <Text style={styles.name}>
                        {capitalize(item.name)} player
                      </Text>
                      <Text style={styles.points}>{item.points} points</Text>
                    </View>
                  )}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                />
              </View>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          )}
        </View>
      </View>
      <StickyContainer>
        {selectedPlayer ? (
          <View style={styles.buttonContainer}>
            <Button
              TransitionProps={{
                withBlick: true,
              }}
              hint={`Added ${lastPoints.current} points`}
              size={BUTTON_SIZES.MEDIUM}
              variant={BUTTON_VARIANTS.OUTLINE}
              onPress={onAdd}
            >
              Add
            </Button>
            <Button
              TransitionProps={{
                withBlick: true,
              }}
              size={BUTTON_SIZES.MEDIUM}
              onPress={onSave}
            >
              Save
            </Button>
          </View>
        ) : isFinishGame ? (
          <ButtonLongPress onPress={onConfirm}>
            {buttonText ?? 'Confirm'}
          </ButtonLongPress>
        ) : (
          <Button onPress={onConfirm}>{buttonText ?? 'Confirm'}</Button>
        )}
      </StickyContainer>
      <Modal isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
        <Text style={styles.listTitle}>History</Text>
        <View style={styles.row}>
          <Text numberOfLines={1} style={[styles.rowTitle, styles.firstCell]}>
            Player
          </Text>
          <Text numberOfLines={1} style={styles.rowTitle}>
            Status
          </Text>
          <Text numberOfLines={1} style={styles.rowTitle}>
            Feature
          </Text>
          <Text numberOfLines={1} style={[styles.rowTitle, styles.lastCell]}>
            Points
          </Text>
        </View>
        <FlatList
          data={store.playersStore.history}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={[styles.rowText, styles.firstCell]}
              >
                {capitalize(item.name)} player
              </Text>
              <Text numberOfLines={1} style={styles.rowText}>
                {item.status}
              </Text>
              <Text numberOfLines={1} style={styles.rowText}>
                {item.type}
              </Text>
              <Text numberOfLines={1} style={[styles.rowText, styles.lastCell]}>
                {item.count}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Modal>
    </View>
  );
}

export default observer(PlayerScoring);
