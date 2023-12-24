import {
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export type HintProps = {
  text: string;
  disabled?: boolean;
  onPress?: (e: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => void;
};
