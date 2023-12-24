import { action, computed, makeObservable, observable } from 'mobx';

import { PLAYER_COLOR_NAME } from 'themes/constants';

import { FeatureStore, SwitchFeatureStore } from './feature-store';
import { OptionsCathedrals } from './players-store';

export type FeaturePrice = {
  complete: number;
  incomplete: number;
};
export type Options = {
  price: {
    road: FeaturePrice;
    monastery: FeaturePrice;
    city: FeaturePrice;
    abbot: FeaturePrice;
    fields: FeaturePrice;
    shield: FeaturePrice;
  };
};
export type Variant = {
  text: string;
  icon: JSX.Element;
  name: PLAYER_COLOR_NAME;
};

export class PlayerStore {
  name: string;
  options: Options;
  position = 0;
  road: FeatureStore;
  monastery: FeatureStore;
  city: FeatureStore;
  shield: FeatureStore;
  abbot: FeatureStore;
  fields: FeatureStore;

  constructor(name: string, options: Options) {
    this.name = name;
    this.options = options;
    this.road = new FeatureStore(options.price.road);
    this.monastery = new FeatureStore(options.price.monastery);
    this.city = new FeatureStore(options.price.city);
    this.abbot = new FeatureStore(options.price.abbot);
    this.fields = new FeatureStore(options.price.fields);
    this.shield = new FeatureStore(options.price.shield);
    makeObservable(this, {
      name: observable,
      options: observable,
      position: observable,
      road: observable,
      monastery: observable,
      city: observable,
      shield: observable,
      abbot: observable,
      fields: observable,
      points: computed,
      mergeCounts: action,
      mergeCountsIncomplete: action,
      setPositon: action,
    });
  }

  get points() {
    return (
      Number(this.road.total) +
      Number(this.monastery.total) +
      Number(this.city.total) +
      Number(this.abbot.total) +
      Number(this.fields.total) +
      Number(this.shield.total)
    );
  }

  setPositon(position: number) {
    this.position = position;
  }
  mergeCounts(player: PlayerStore | null) {
    if (!player) return;
    this.road.addTotal(player.road.count * player.road.price.complete);
    this.monastery.addTotal(
      player.monastery.count * player.monastery.price.complete,
    );
    this.city.addTotal(player.city.count * player.city.price.complete);
    this.shield.addTotal(player.shield.count * player.shield.price.complete);
    this.abbot.addTotal(player.abbot.count * player.abbot.price.complete);
    this.fields.addTotal(player.fields.count * player.fields.price.complete);
  }

  mergeCountsIncomplete(player: PlayerStore | null) {
    if (!player) return;
    this.road.addTotal(
      player.road.countImcomplete * player.road.price.incomplete,
    );
    this.monastery.addTotal(
      player.monastery.countImcomplete * player.monastery.price.incomplete,
    );
    this.city.addTotal(
      player.city.countImcomplete * player.city.price.incomplete,
    );
    this.shield.addTotal(
      player.shield.countImcomplete * player.shield.price.incomplete,
    );
    this.abbot.addTotal(
      player.abbot.countImcomplete * player.abbot.price.incomplete,
    );
    this.fields.addTotal(
      player.fields.countImcomplete * player.fields.price.incomplete,
    );
  }

  reset() {
    this.road.reset();
    this.monastery.reset();
    this.city.reset();
    this.shield.reset();
    this.abbot.reset();
    this.fields.reset();
  }
}

export type SwitchPlayerStore = PlayerStore & {
  markCathedral: true;
  options: OptionsCathedrals;
  city: SwitchFeatureStore;
  shield: SwitchFeatureStore;
};
export function mixinCathedralsPlayer(BaseClass: typeof PlayerStore) {
  return class extends BaseClass {
    markCathedral: true = true;
    city: SwitchFeatureStore;
    shield: SwitchFeatureStore;
    constructor(name: string, options: OptionsCathedrals) {
      super(name, options);
      this.city = new SwitchFeatureStore(
        options.price.city,
        options.price.cathedral,
      );
      this.shield = new SwitchFeatureStore(
        options.price.shield,
        options.price.cathedral,
      );
    }

    mergeCounts(player: SwitchPlayerStore | null) {
      if (!player) return;
      const cityPrice = player.city.modified
        ? player.city.modifiedPrice.complete
        : player.city.price.complete;
      const shieldPrice = player.shield.modified
        ? player.shield.modifiedPrice.complete
        : player.shield.price.complete;

      this.road.addTotal(player.road.count * player.road.price.complete);
      this.monastery.addTotal(
        player.monastery.count * player.monastery.price.complete,
      );
      this.city.addTotal(player.city.count * cityPrice);
      this.shield.addTotal(player.shield.count * shieldPrice);
      this.abbot.addTotal(player.abbot.count * player.abbot.price.complete);
      this.fields.addTotal(player.fields.count * player.fields.price.complete);

      this.city.resetModified();
      this.shield.resetModified();
    }

    mergeCountsIncomplete(player: SwitchPlayerStore | null) {
      if (!player) return;
      const cityPrice = player.city.modified
        ? player.city.modifiedPrice.incomplete
        : player.city.price.incomplete;
      const shieldPrice = player.shield.modified
        ? player.shield.modifiedPrice.incomplete
        : player.shield.price.incomplete;

      this.road.addTotal(
        player.road.countImcomplete * player.road.price.incomplete,
      );
      this.monastery.addTotal(
        player.monastery.countImcomplete * player.monastery.price.incomplete,
      );
      this.city.addTotal(player.city.countImcomplete * cityPrice);
      this.shield.addTotal(player.shield.countImcomplete * shieldPrice);
      this.abbot.addTotal(
        player.abbot.countImcomplete * player.abbot.price.incomplete,
      );
      this.fields.addTotal(
        player.fields.countImcomplete * player.fields.price.incomplete,
      );
      this.city.resetModified();
      this.shield.resetModified();
    }
  };
}
