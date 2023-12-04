import { EXPANTIONS_NAME } from 'constants/expansions';

import { ObservableMap, makeAutoObservable } from 'mobx';

import { Options } from './player-store';

export class ExpansionsStore {
  expansions = new ObservableMap();
  constructor() {
    makeAutoObservable(this);
  }

  get nameExpansions() {
    return Array.from(this.expansions.entries()).map(([name]) => ({
      name,
    }));
  }
  get isExpansionSelected() {
    return this.expansions.size > 0;
  }

  get price(): Options['price'] | null {
    if (this.expansions.has(EXPANTIONS_NAME.BASIC_VERSION_2)) {
      return {
        abbot: { complete: 1, incomplete: 1 },
        city: { complete: 2, incomplete: 1 },
        monastery: { complete: 9, incomplete: 1 },
        road: { complete: 1, incomplete: 1 },
      };
    }
    return null;
  }

  setExpansion(expansion: string) {
    this.expansions.set(expansion, true);
  }
  deleteExpansion(expansion: string) {
    this.expansions.delete(expansion);
  }
  toggleExpansion(expansion: string) {
    if (this.expansions.has(expansion)) {
      return this.deleteExpansion(expansion);
    }
    this.setExpansion(expansion);
  }
}
