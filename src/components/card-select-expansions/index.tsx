import { useEffect, useState } from 'react';

import { autorun } from 'mobx';
import { useStore } from 'stores';

import CardSelect from 'components/card-select';

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
    });
  }, []);

  function onExpansionSelect() {
    setIsSelected((prev) => !prev);
    store.expansionsStore.toggleExpansion(props.text);
  }

  return (
    <CardSelect {...props} selected={isSelected} onSelect={onExpansionSelect} />
  );
}

export default CardSelectExpansions;
