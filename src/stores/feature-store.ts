import { action, computed, makeObservable, observable } from 'mobx';

import { FeaturePrice } from './player-store';

export class FeatureStore {
  price: FeaturePrice = { complete: 0, incomplete: 0 };
  count = 0;
  countImcomplete = 0;
  total = 0;

  constructor(price: FeaturePrice) {
    this.price = price;
    makeObservable(this, {
      count: observable,
      countImcomplete: observable,
      total: observable,
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
    this.count = Number(count);
  }
  plus() {
    this.count++;
  }
  minus() {
    this.count--;
  }
  plusIncomplete() {
    this.countImcomplete++;
  }
  minusIncomplete() {
    this.countImcomplete--;
  }
  setCountIncomplete(count: number) {
    this.countImcomplete = Number(count);
  }
  addTotal(points: number) {
    this.total += Number(points);
  }
  setTotal(points: number) {
    this.total = Number(points);
  }
  reset() {
    this.setCount(0);
    this.setCountIncomplete(0);
    this.setTotal(0);
  }
}

export class SwitchFeatureStore extends FeatureStore {
  modified = false;
  modifiedPrice: FeaturePrice;

  constructor(price: FeaturePrice, modifiedPrice: FeaturePrice) {
    super(price);
    this.modifiedPrice = modifiedPrice;
    makeObservable(this, {
      modified: observable,
      modifiedPrice: observable,
      toggleModified: action,
      resetModified: action,
    });
  }

  get points() {
    if (this.modified) {
      return (
        Number(this.count) * Number(this.modifiedPrice.complete) +
        Number(this.countImcomplete) * Number(this.modifiedPrice.incomplete)
      );
    }
    return (
      Number(this.count) * Number(this.price.complete) +
      Number(this.countImcomplete) * Number(this.price.incomplete)
    );
  }

  toggleModified() {
    this.modified = !this.modified;
  }
  resetModified() {
    this.modified = false;
  }
}

export type IFeatureStore = FeatureStore;
