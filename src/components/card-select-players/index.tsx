import { useEffect, useState } from 'react';

import * as Haptics from 'expo-haptics';
import { autorun } from 'mobx';

import CardSelect from 'components/card-select';
import { useStore } from 'stores';

import type { CardSelectPlayersProps } from './index.types';

function CardSelectPlayers(props: CardSelectPlayersProps) {
  const [isSelected, setIsSelected] = useState(false);
  const store = useStore();

  useEffect(() => {
    autorun(() => {
      store.playersStore.namePlayers.forEach((player) => {
        if (player.name === props.name) {
          setIsSelected(true);
        }
      });
    });
  }, []);

  function onPlayerSelect() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setIsSelected((prev) => !prev);
    store.playersStore.togglePlayer(props.name);
  }

  return (
    <CardSelect {...props} selected={isSelected} onSelect={onPlayerSelect} />
  );
}

export default CardSelectPlayers;
