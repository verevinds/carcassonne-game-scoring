import { EXPANTIONS_NAME } from 'constants/expansions';

import { ObservableMap, makeAutoObservable } from 'mobx';

import BuilderAndTraderIcon from 'assets/icons/expansions/builder-and-trader';
import CastleIcon from 'assets/icons/expansions/castle';
import CastleRiverIcon from 'assets/icons/expansions/castle-river';
import CathedralIcon from 'assets/icons/expansions/cathedral';
import DragonIcon from 'assets/icons/expansions/dragon';

import { PlayersStore } from './players-store';
export type ExapnsionsVariant = {
  text: string;
  icon: JSX.Element;
  disabled: boolean;
  playerStore: typeof PlayersStore;
};
export class ExpansionsStore {
  expansions = new ObservableMap();

  variants: ExapnsionsVariant[] = [
    {
      text: EXPANTIONS_NAME.BASIC_VERSION,
      icon: <CastleIcon />,
      disabled: true,
      playerStore: PlayersStore,
    },
    {
      text: EXPANTIONS_NAME.BASIC_VERSION_2,
      icon: <CastleRiverIcon />,
      disabled: false,
      playerStore: PlayersStore,
    },
    {
      text: EXPANTIONS_NAME.INNS_AND_CATHEDRALS,
      icon: <CathedralIcon />,
      disabled: false,
      playerStore: PlayersStore,
    },
    {
      text: EXPANTIONS_NAME.TRADERS_AND_BUILDERS,
      icon: <BuilderAndTraderIcon />,
      disabled: true,
      playerStore: PlayersStore,
    },
    {
      text: EXPANTIONS_NAME.THE_PRINCESS_AND_THE_DRAGON,
      icon: <DragonIcon />,
      disabled: true,
      playerStore: PlayersStore,
    },
  ];
  constructor() {
    makeAutoObservable(this);
    this.setExpansion(EXPANTIONS_NAME.BASIC_VERSION, PlayersStore);
  }

  get nameExpansions() {
    return Array.from(this.expansions.entries()).map(([name]) => ({
      name,
    }));
  }
  get isExpansionSelected() {
    return this.expansions.size > 0;
  }
  setExpansion(expansion: string, playerStore: typeof PlayersStore) {
    this.expansions.set(expansion, playerStore);
  }
  deleteExpansion(expansion: string) {
    this.expansions.delete(expansion);
  }
  toggleExpansion(expansion: string, playerStore: typeof PlayersStore) {
    if (this.expansions.has(expansion)) {
      return this.deleteExpansion(expansion);
    }
    this.setExpansion(expansion, playerStore);
  }
}
