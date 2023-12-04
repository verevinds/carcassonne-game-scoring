import { makeAutoObservable } from 'mobx';

import { CityFeatureStore } from './city-feature-store';
import { FeatureStore } from './feature-store';

export class PlayerStore {
  name = '';
  position = 0;
  road = new FeatureStore(1);
  monastery = new FeatureStore(9);
  city = new CityFeatureStore();
  abbot = new FeatureStore(1);

  constructor(name: string) {
    this.name = name;
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
