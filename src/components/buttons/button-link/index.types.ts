import { LinkProps } from 'expo-router/build/link/Link';
import { GestureResponderEvent } from 'react-native';

export type ButtonLinkProps = LinkProps & { hint?: string };
export type ReactMouseEvent =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | GestureResponderEvent;
