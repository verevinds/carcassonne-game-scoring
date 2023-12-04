import { CardSelectProps } from 'components/card-select/index.types';

export type CardSelectExpansionsProps = Omit<
  CardSelectProps,
  'selected' | 'onSelect'
> & { disabled?: boolean };
