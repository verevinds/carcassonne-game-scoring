import { action, computed, makeObservable, observable } from 'mobx';

export class FeatureStore {
  price = 1;
  count = 0;
  constructor(price: number) {
    this.price = price;
    makeObservable(this, {
      count: observable,
      points: computed,
      setCount: action,
      plus: action,
      minus: action,
    });
  }
  get points() {
    return this.count * this.price;
  }
  public setCount(count: number) {
    this.count = count;
  }
  public plus() {
    this.count++;
  }
  public minus() {
    if (this.count > 0) this.count--;
  }
}
export type IFeatureStore = FeatureStore;
