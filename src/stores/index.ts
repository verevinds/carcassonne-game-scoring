import { autorun, makeAutoObservable } from 'mobx';

import { ExpansionsStore } from './expansions-store';
import { GameStore } from './game-store';
import { PlayersStore } from './players-store';

export class RootStore {
  playersStore = new PlayersStore();
  expansionsStore = new ExpansionsStore();
  gameStore = new GameStore();
  numberOfGames = 1;

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      if (this.expansionsStore.price) {
        this.playersStore.setOptions({
          price: this.expansionsStore.price,
        });
      }
    });
  }

  restart() {
    this.numberOfGames++;
    this.playersStore = new PlayersStore();
  }
  reset() {
    this.playersStore = new PlayersStore();
    this.expansionsStore = new ExpansionsStore();
  }
}

const rootStore = new RootStore();
export type IRootStore = typeof rootStore;
export const useStore = (): IRootStore => rootStore;
export default RootStore;
