import { makeAutoObservable } from 'mobx';

import { CityFeatureStore } from './city-feature-store';
import { FeatureStore } from './feature-store';

export type FeaturePrice = { complete: number; incomplete: number };
export type Options = {
  price: {
    road: FeaturePrice;
    monastery: FeaturePrice;
    city: FeaturePrice;
    abbot: FeaturePrice;
    fields: FeaturePrice;
  };
};

export class PlayerStore {
  name: string;
  options: Options;
  position = 0;
  road: FeatureStore;
  monastery: FeatureStore;
  city: CityFeatureStore;
  abbot: FeatureStore;
  fields: FeatureStore;

  constructor(name: string, options: Options) {
    this.name = name;
    this.options = options;
    this.road = new FeatureStore(options.price.road);
    this.monastery = new FeatureStore(options.price.monastery);
    this.city = new CityFeatureStore(options.price.city);
    this.abbot = new FeatureStore(options.price.abbot);
    this.fields = new FeatureStore(options.price.fields);
    makeAutoObservable(this);
  }

  get points() {
    return (
      this.road.points +
      this.monastery.points +
      this.city.points +
      this.abbot.points +
      this.fields.points
    );
  }

  mergeCounts(player: PlayerStore | null) {
    if (!player) return;
    this.road.mergeCounts(player.road.count);
    this.monastery.mergeCounts(player.monastery.count);
    this.city.mergeCounts(player.city.count);
    this.city.mergeShield(player.city.shield);
    this.abbot.mergeCounts(player.abbot.count);
    this.fields.mergeCounts(player.fields.count);
  }

  mergeCountsIncomplete(player: PlayerStore | null) {
    if (!player) return;
    this.road.mergeCountsIncomplete(player.road.countImcomplete);
    this.monastery.mergeCountsIncomplete(player.monastery.countImcomplete);
    this.city.mergeCountsIncomplete(player.city.countImcomplete);
    this.city.mergeShieldIncomplete(player.city.shieldIncomplete);
    this.abbot.mergeCountsIncomplete(player.abbot.countImcomplete);
    this.fields.mergeCountsIncomplete(player.fields.countImcomplete);
  }
}
