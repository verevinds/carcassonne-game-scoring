import { ObservableMap, autorun, makeAutoObservable } from 'mobx';

import { Options, PlayerStore } from './player-store';

export class PlayersStore {
  players = new ObservableMap();
  options: Options = {
    price: {
      abbot: { complete: 0, incomplete: 0 },
      city: { complete: 0, incomplete: 0 },
      monastery: { complete: 0, incomplete: 0 },
      road: { complete: 0, incomplete: 0 },
    },
  };

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.updatePlayerPositions());
  }

  get namePlayers() {
    return Array.from(this.players.entries()).map(([id]) => ({
      name: id,
    }));
  }
  get isPlayerSelected() {
    return this.players.size > 0;
  }

  setPlayer(id: string) {
    this.players.set(id, new PlayerStore(id, this.options));
  }
  getPlayer(id: string | undefined) {
    return this.players.get(id);
  }
  deletePlayer(id: string) {
    this.players.delete(id);
  }
  togglePlayer(id: string) {
    if (this.players.has(id)) {
      return this.deletePlayer(id);
    }
    this.setPlayer(id);
  }
  updatePlayerPositions() {
    const sortedPlayers = Array.from(this.players.entries()).sort(
      (a, b) => b[1].points - a[1].points,
    );
    sortedPlayers.forEach(([_id, player], index) => {
      player.position = index + 1;
    });
  }
  setOptions(options: Options) {
    this.options = options;
  }
}
