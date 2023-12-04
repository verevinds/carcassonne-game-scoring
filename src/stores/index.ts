import { autorun, makeAutoObservable } from 'mobx';

import { ExpansionsStore } from './expansions-store';
import { PlayersStore } from './players-store';

export class RootStore {
  playersStore = new PlayersStore();
  expansionsStore = new ExpansionsStore();
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
}

const rootStore = new RootStore();
export type IRootStore = typeof rootStore;
export const useStore = (): IRootStore => rootStore;
export default RootStore;
