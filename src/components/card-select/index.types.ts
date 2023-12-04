export type CardSelectProps = {
  text: string;
  icon: JSX.Element | undefined;
  onSelect?: () => void;
  selected: boolean;
  disabled?: boolean;
};
