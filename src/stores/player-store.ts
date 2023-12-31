import { action, computed, makeObservable, observable } from 'mobx';

import { type RootStore } from 'stores';
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
  rootStore: RootStore;

  constructor(rootStore: RootStore, name: string, options: Options) {
    this.rootStore = rootStore;
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

  get pointsLocal() {
    return (
      Number(this.road.points) +
      Number(this.monastery.points) +
      Number(this.city.points) +
      Number(this.abbot.points) +
      Number(this.fields.points) +
      Number(this.shield.points)
    );
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

  addHistory(
    features: {
      road?: number;
      monastery?: number;
      city?: number;
      shield?: number;
      abbot?: number;
      fields?: number;
    },
    type: 'complete' | 'incomplete',
  ) {
    Object.entries(features).forEach(([key, value]) => {
      if (value) {
        this.rootStore.playersStore.addHistory(key, type, value, this.name);
      }
    });
  }

  setPositon(position: number) {
    this.position = position;
  }
  mergeCounts(player: PlayerStore | null) {
    if (!player) return;
    const road = player.road.count * player.road.price.complete;
    const monastery = player.monastery.count * player.monastery.price.complete;
    const city = player.city.count * player.city.price.complete;
    const shield = player.shield.count * player.shield.price.complete;
    const abbot = player.abbot.count * player.abbot.price.complete;
    const fields = player.fields.count * player.fields.price.complete;

    this.road.addTotal(road);
    this.monastery.addTotal(monastery);
    this.city.addTotal(city);
    this.shield.addTotal(shield);
    this.abbot.addTotal(abbot);
    this.fields.addTotal(fields);

    this.addHistory(
      {
        road,
        monastery,
        city,
        shield,
        abbot,
        fields,
      },
      'complete',
    );
  }

  mergeCountsIncomplete(player: PlayerStore | null) {
    if (!player) return;
    const road = player.road.countImcomplete * player.road.price.incomplete;
    const monastery =
      player.monastery.countImcomplete * player.monastery.price.incomplete;
    const city = player.city.countImcomplete * player.city.price.incomplete;
    const shield =
      player.shield.countImcomplete * player.shield.price.incomplete;
    const abbot = player.abbot.countImcomplete * player.abbot.price.incomplete;
    const fields =
      player.fields.countImcomplete * player.fields.price.incomplete;

    this.road.addTotal(road);
    this.monastery.addTotal(monastery);
    this.city.addTotal(city);
    this.shield.addTotal(shield);
    this.abbot.addTotal(abbot);
    this.fields.addTotal(fields);

    this.addHistory(
      {
        road,
        monastery,
        city,
        shield,
        abbot,
        fields,
      },
      'incomplete',
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
  road: SwitchFeatureStore;
};
export function mixinCathedralsPlayer(BaseClass: typeof PlayerStore) {
  return class extends BaseClass {
    markCathedral: true = true;
    city: SwitchFeatureStore;
    shield: SwitchFeatureStore;
    road: SwitchFeatureStore;
    constructor(
      rootStore: RootStore,
      name: string,
      options: OptionsCathedrals,
    ) {
      super(rootStore, name, options);

      this.road = new SwitchFeatureStore(options.price.road, options.price.inn);
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
      const roadPrice = player.road.modified
        ? player.road.modifiedPrice.complete
        : player.road.price.complete;

      const road = player.road.count * roadPrice;
      const monastery =
        player.monastery.count * player.monastery.price.complete;
      const city = player.city.count * cityPrice;
      const shield = player.shield.count * shieldPrice;
      const abbot = player.abbot.count * player.abbot.price.complete;
      const fields = player.fields.count * player.fields.price.complete;

      this.road.addTotal(road);
      this.monastery.addTotal(monastery);
      this.city.addTotal(city);
      this.shield.addTotal(shield);
      this.abbot.addTotal(abbot);
      this.fields.addTotal(fields);

      this.addHistory(
        {
          road,
          monastery,
          city,
          shield,
          abbot,
          fields,
        },
        'complete',
      );

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
      const roadPrice = player.road.modified
        ? player.road.modifiedPrice.incomplete
        : player.road.price.incomplete;

      const road = player.road.count * roadPrice;
      const monastery =
        player.monastery.countImcomplete * player.monastery.price.incomplete;
      const city = player.city.countImcomplete * cityPrice;
      const shield = player.shield.countImcomplete * shieldPrice;
      const abbot =
        player.abbot.countImcomplete * player.abbot.price.incomplete;
      const fields =
        player.fields.countImcomplete * player.fields.price.incomplete;

      this.road.addTotal(road);
      this.monastery.addTotal(monastery);
      this.city.addTotal(city);
      this.shield.addTotal(shield);
      this.abbot.addTotal(abbot);
      this.fields.addTotal(fields);

      this.addHistory(
        {
          road,
          monastery,
          city,
          shield,
          abbot,
          fields,
        },
        'incomplete',
      );

      this.city.resetModified();
      this.shield.resetModified();
    }
  };
}
