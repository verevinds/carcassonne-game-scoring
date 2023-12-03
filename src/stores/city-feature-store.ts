import { action, makeObservable, observable } from 'mobx';

import { FeatureStore } from './feature-store';

export class CityFeatureStore extends FeatureStore {
  shield = 0;
  constructor() {
    super(2);
    makeObservable(this, {
      shield: observable,
      setShield: action,
    });
  }
  get points() {
    return (
      Number(this.count) * Number(this.price) +
      Number(this.shield) * Number(this.price)
    );
  }
  setShield(shield: number) {
    this.shield = shield;
  }
}
export type ICityFeatureStore = CityFeatureStore;
