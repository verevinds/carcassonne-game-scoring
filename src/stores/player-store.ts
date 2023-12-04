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
  };
};

export class PlayerStore {
  name = '';
  position = 0;
  road: FeatureStore;
  monastery: FeatureStore;
  city: FeatureStore;
  abbot: FeatureStore;

  constructor(name: string, options: Options) {
    this.name = name;
    this.road = new FeatureStore(options.price.road);
    this.monastery = new FeatureStore(options.price.monastery);
    this.city = new CityFeatureStore(options.price.city);
    this.abbot = new FeatureStore(options.price.abbot);
    makeAutoObservable(this);
  }

  get points() {
    return (
      this.road.points +
      this.monastery.points +
      this.city.points +
      this.abbot.points
    );
  }
}
