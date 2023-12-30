import { EXPANTIONS_NAME } from 'constants/expansions';

import { action, autorun, makeObservable, observable } from 'mobx';

import { ExpansionsStore } from './expansions-store';
import { GameStore } from './game-store';
import {
  CathedralsPlayersStore,
  mixinCathedrals,
  PlayersStore,
} from './players-store';

export class RootStore {
  playersStore: CathedralsPlayersStore | PlayersStore = new PlayersStore(this);
  expansionsStore = new ExpansionsStore();
  gameStore = new GameStore();

  constructor() {
    makeObservable(this, {
      playersStore: observable,
      expansionsStore: observable,
      gameStore: observable,
      addCathedralsPlayer: action,
      restart: action,
      reset: action,
    });
    autorun(() => {
      this.restart();
      const isCathedralsExpansionSelected = this.expansionsStore.expansions.has(
        EXPANTIONS_NAME.INNS_AND_CATHEDRALS,
      );
      if (isCathedralsExpansionSelected) {
        this.addCathedralsPlayer();
      }
    });
  }

  addCathedralsPlayer() {
    const CathedralsPlayerStore = mixinCathedrals(PlayersStore);
    this.playersStore = new CathedralsPlayerStore(this);
  }
  restart() {
    this.playersStore = new PlayersStore(this);
  }
  reset() {
    this.playersStore = new PlayersStore(this);
    this.expansionsStore = new ExpansionsStore();
  }
}

export const rootStore = new RootStore();
export type IRootStore = typeof rootStore;
export const useStore = (): IRootStore => rootStore;
export default RootStore;
