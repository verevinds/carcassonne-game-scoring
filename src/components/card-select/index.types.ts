export type CardSelectProps = {
  text: string;
  description?: string;
  icon: JSX.Element | undefined;
  onSelect?: () => void;
  selected: boolean;
  disabled?: boolean;
};
