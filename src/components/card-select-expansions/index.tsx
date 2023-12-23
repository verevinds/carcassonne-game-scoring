import { useEffect, useState } from 'react';

import * as Haptics from 'expo-haptics';
import { autorun } from 'mobx';

import CardSelect from 'components/card-select';
import { useStore } from 'stores';

import type { CardSelectExpansionsProps } from './index.types';

function CardSelectExpansions(props: CardSelectExpansionsProps) {
  const [isSelected, setIsSelected] = useState(false);
  const store = useStore();

  useEffect(() => {
    autorun(() => {
      store.expansionsStore.nameExpansions.forEach((expansion) => {
        if (expansion.name === props.text) {
          setIsSelected(true);
        }
      });
      if (store.expansionsStore.nameExpansions.length === 0)
        setIsSelected(false);
    });
  }, []);

  function onExpansionSelect() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsSelected((prev) => !prev);
    store.expansionsStore.toggleExpansion(props.text);
  }

  return (
    <CardSelect {...props} selected={isSelected} onSelect={onExpansionSelect} />
  );
}

export default CardSelectExpansions;
