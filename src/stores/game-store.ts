import { makeAutoObservable } from 'mobx';

import { PlayerStore, SwitchPlayerStore } from './player-store';

export class GameStore {
  selectedPlayer: null | PlayerStore | SwitchPlayerStore = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPlayer(player: PlayerStore | SwitchPlayerStore | undefined) {
    this.selectedPlayer = player ?? null;
  }
}
