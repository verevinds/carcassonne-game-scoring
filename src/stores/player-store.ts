import { makeAutoObservable } from 'mobx';

import { FeatureStore } from './feature-store';

export type FeaturePrice = {
  complete: number;
  incomplete: number;
  completeImproved?: number;
  incompleteImproved?: number;
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
    makeAutoObservable(this);
  }

  get points() {
    return (
      Number(this.road.points) +
      Number(this.monastery.points) +
      Number(this.city.points) +
      Number(this.abbot.points) +
      Number(this.fields.points) +
      Number(this.shield.points)
    );
  }

  mergeCounts(player: PlayerStore | null) {
    if (!player) return;
    this.road.mergeCounts(player.road.count);
    this.monastery.mergeCounts(player.monastery.count);
    this.city.mergeCounts(player.city.count);
    this.shield.mergeCounts(player.shield.count);
    this.abbot.mergeCounts(player.abbot.count);
    this.fields.mergeCounts(player.fields.count);
  }

  mergeCountsIncomplete(player: PlayerStore | null) {
    if (!player) return;
    this.road.mergeCountsIncomplete(player.road.countImcomplete);
    this.monastery.mergeCountsIncomplete(player.monastery.countImcomplete);
    this.city.mergeCountsIncomplete(player.city.countImcomplete);
    this.city.mergeCountsIncomplete(player.shield.countImcomplete);
    this.abbot.mergeCountsIncomplete(player.abbot.countImcomplete);
    this.fields.mergeCountsIncomplete(player.fields.countImcomplete);
  }
}
