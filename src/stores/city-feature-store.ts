import { action, makeObservable, observable } from 'mobx';

import { FeatureStore } from './feature-store';
import { FeaturePrice } from './player-store';

export class CityFeatureStore extends FeatureStore {
  shield = 0;
  shieldIncomplete = 0;

  constructor(price: FeaturePrice) {
    super(price);
    makeObservable(this, {
      shield: observable,
      setShield: action,
      shieldIncomplete: observable,
      setShieldIncomplete: action,
    });
  }

  get points() {
    return (
      Number(this.count) * Number(this.price.complete) +
      Number(this.shield) * Number(this.price.complete) +
      Number(this.countImcomplete) * Number(this.price.incomplete) +
      Number(this.shieldIncomplete) * Number(this.price.incomplete)
    );
  }

  setShield(shield: number) {
    this.shield = shield;
  }
  setShieldIncomplete(shield: number) {
    this.shieldIncomplete = shield;
  }
}
export type ICityFeatureStore = CityFeatureStore;
