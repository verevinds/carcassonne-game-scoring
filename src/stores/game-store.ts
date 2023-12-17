import { makeAutoObservable } from 'mobx';

import { PlayerStore } from './player-store';

export class GameStore {
  selectedPlayer: null | PlayerStore = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPlayer(player: PlayerStore | undefined) {
    this.selectedPlayer = player ?? null;
  }
}
