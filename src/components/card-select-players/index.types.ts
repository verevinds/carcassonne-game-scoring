import { CardSelectProps } from 'components/card-select/index.types';

export type CardSelectPlayersProps = Omit<
  CardSelectProps,
  'selected' | 'onSelect'
> & { name: string };
