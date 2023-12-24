import { EXPANTIONS_NAME } from 'constants/expansions';

import {
  ObservableMap,
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx';

import PlayerIcon from 'assets/icons/player';
import { PLAYER_COLOR_NAME } from 'themes/constants';

import {
  FeaturePrice,
  Options,
  PlayerStore,
  Variant,
  mixinCathedralsPlayer,
} from './player-store';

export class PlayersStore {
  name = EXPANTIONS_NAME.BASIC_VERSION;
  players = new ObservableMap();
  options: Options = {
    price: {
      abbot: { complete: 1, incomplete: 1 },
      city: {
        complete: 2,
        incomplete: 1,
      },
      monastery: { complete: 9, incomplete: 1 },
      road: {
        complete: 1,
        incomplete: 1,
      },
      fields: { complete: 0, incomplete: 3 },
      shield: { complete: 2, incomplete: 1 },
    },
  };
  variants: Variant[] = [
    {
      text: 'Red player',
      icon: <PlayerIcon variant={PLAYER_COLOR_NAME.RED} />,
      name: PLAYER_COLOR_NAME.RED,
    },
    {
      text: 'Blue player',
      icon: <PlayerIcon variant={PLAYER_COLOR_NAME.BLUE} />,
      name: PLAYER_COLOR_NAME.BLUE,
    },
    {
      text: 'Green player',
      icon: <PlayerIcon variant={PLAYER_COLOR_NAME.GREEN} />,
      name: PLAYER_COLOR_NAME.GREEN,
    },
    {
      text: 'Yellow player',
      icon: <PlayerIcon variant={PLAYER_COLOR_NAME.YELLOW} />,
      name: PLAYER_COLOR_NAME.YELLOW,
    },
    {
      text: 'Grey player',
      icon: <PlayerIcon variant={PLAYER_COLOR_NAME.GREY} />,
      name: PLAYER_COLOR_NAME.GREY,
    },
  ];

  constructor() {
    makeObservable(this, {
      players: observable,
      options: observable,
      variants: observable,
      namePlayers: computed,
      isPlayerSelected: computed,
      leaderBoard: computed,
      setPlayer: action,
      getPlayer: action,
      deletePlayer: action,
      togglePlayer: action,
      updatePlayerPositions: action,
      setOptions: action,
    });
  }

  get namePlayers() {
    return Array.from(this.players.entries()).map(([id]) => ({
      name: id,
    }));
  }
  get isPlayerSelected() {
    return this.players.size > 0;
  }
  get leaderBoard() {
    return Array.from(this.players.entries())
      .sort((a, b) => {
        return b[1].total - a[1].total;
      })
      .map(([id, player]) => ({
        name: id,
        points: player.points,
        position: player.position,
      }));
  }

  setPlayer(id: string) {
    this.players.set(id, new PlayerStore(id, this.options));
  }
  getPlayer(id: string | undefined): PlayerStore | undefined {
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
    const sortedPlayers = Array.from(this.players.entries()).sort((a, b) => {
      return b[1].total - a[1].total;
    });
    sortedPlayers.forEach(([_id, player], index) => {
      player.setPositon(index + 1);
    });
  }
  setOptions(options: Options) {
    this.options = options;
  }
  reset() {
    Array.from(this.players.entries()).forEach(([_id, player]) => {
      player.reset();
    });
  }
}

export type OptionsCathedrals = Options & {
  price: {
    cathedral: FeaturePrice;
  };
};
export type CathedralsPlayersStore = PlayersStore & {
  name: EXPANTIONS_NAME.INNS_AND_CATHEDRALS;
  markCathedral: true;
  options: OptionsCathedrals;
};
export function mixinCathedrals(BaseClass: typeof PlayersStore) {
  return class extends BaseClass {
    name = EXPANTIONS_NAME.INNS_AND_CATHEDRALS;
    options: CathedralsPlayersStore['options'];
    markCathedral: true = true;
    constructor() {
      super();
      this.variants.push({
        text: 'Pink player',
        icon: <PlayerIcon variant={PLAYER_COLOR_NAME.PINK} />,
        name: PLAYER_COLOR_NAME.PINK,
      });
      // @ts-ignore
      if (this.options) {
        this.options = {
          ...this.options,
          price: {
            ...this.options.price,
            cathedral: { complete: 3, incomplete: 0 },
          },
        };
      } else {
        throw new Error('BaseClass.options.price is undefined');
      }
    }
    setPlayer(id: string) {
      const CathedralPlayerStore = mixinCathedralsPlayer(PlayerStore);
      this.players.set(id, new CathedralPlayerStore(id, this.options));
    }
  };
}
