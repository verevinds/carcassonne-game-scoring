import { EXPANTIONS_NAME } from 'constants/expansions';

import { ObservableMap, makeAutoObservable } from 'mobx';

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

  get price() {
    if (this.expansions.has(EXPANTIONS_NAME.BASIC_VERSION_2)) {
      return {
        abbot: 1,
        city: 2,
        monastery: 9,
        road: 1,
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
