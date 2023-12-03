import React from 'react';

import { makeAutoObservable } from 'mobx';

import { PlayersStore } from './players-store';

export class RootStore {
  playersStore = new PlayersStore();
  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export type IRootStore = typeof rootStore;
export const Context = React.createContext<IRootStore>(rootStore);
export const StoreProvider = Context.Provider;
export const useStore = (): IRootStore => React.useContext(Context);
export default RootStore;
