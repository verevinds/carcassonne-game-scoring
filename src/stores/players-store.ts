import { ObservableMap, autorun, makeAutoObservable } from 'mobx';

import { PlayerStore } from './player-store';

export class PlayersStore {
  players = new ObservableMap();

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.updatePlayerPositions());
  }

  addPlayer(id: string) {
    this.players.set(id, new PlayerStore());
  }
  getPlayer(id: string | undefined) {
    if (!id) return null;
    if (!this.players.has(id)) this.addPlayer(id);
    return this.players.get(id);
  }

  updatePlayerPositions() {
    const sortedPlayers = Array.from(this.players.entries()).sort(
      (a, b) => b[1].points - a[1].points,
    );
    sortedPlayers.forEach(([_id, player], index) => {
      player.position = index + 1;
    });
  }
}
