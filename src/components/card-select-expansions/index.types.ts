import { CardSelectProps } from 'components/card-select/index.types';
import { ExapnsionsVariant } from 'stores/expansions-store';

export type CardSelectExpansionsProps = Omit<
  CardSelectProps,
  'selected' | 'onSelect'
> & { disabled?: boolean } & ExapnsionsVariant;
