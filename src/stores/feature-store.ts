import { action, computed, makeObservable, observable } from 'mobx';

import { FeaturePrice } from './player-store';

export class FeatureStore {
  price: FeaturePrice = { complete: 0, incomplete: 0 };
  count = 0;
  countImcomplete = 0;

  constructor(price: FeaturePrice) {
    this.price = price;
    makeObservable(this, {
      count: observable,
      countImcomplete: observable,
      points: computed,
      setCount: action,
      plus: action,
      minus: action,
      plusIncomplete: action,
      minusIncomplete: action,
      setCountIncomplete: action,
    });
  }

  get points() {
    return (
      Number(this.count) * Number(this.price.complete) +
      Number(this.countImcomplete) * Number(this.price.incomplete)
    );
  }

  setCount(count: number) {
    this.count = count;
  }
  plus() {
    this.count++;
  }
  minus() {
    if (this.count > 0) this.count--;
  }
  plusIncomplete() {
    this.countImcomplete++;
  }
  minusIncomplete() {
    if (this.countImcomplete > 0) this.countImcomplete--;
  }
  setCountIncomplete(count: number) {
    this.countImcomplete = count;
  }
}

export type IFeatureStore = FeatureStore;
