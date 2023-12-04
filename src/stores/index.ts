import React from 'react';

import { ObservableMap, makeAutoObservable } from 'mobx';

import { PlayersStore } from './players-store';

class ExpansionsStore {
  expansions = new ObservableMap();
  constructor() {
    makeAutoObservable(this);
  }

  get nameExpansions() {
    return Array.from(this.expansions.entries()).map(([name]) => ({
      name,
    }));
  }
  get isExpansionSelected() {
    return this.expansions.size > 0;
  }

  setExpansion(expansion: string) {
    this.expansions.set(expansion, true);
  }
  deleteExpansion(expansion: string) {
    this.expansions.delete(expansion);
  }
  toggleExpansion(expansion: string) {
    if (this.expansions.has(expansion)) {
      return this.deleteExpansion(expansion);
    }
    this.setExpansion(expansion);
  }
}
export class RootStore {
  playersStore = new PlayersStore();
  expansionsStore = new ExpansionsStore();
  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export type IRootStore = typeof rootStore;
export const Context = React.createContext<IRootStore>(rootStore);
export const StoreProvider = Context.Provider;
export const useStore = (): IRootStore => rootStore;
export default RootStore;
