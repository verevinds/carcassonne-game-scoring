import { Text, TouchableNativeFeedback, View } from 'react-native';

import Check from 'assets/icons/check';

import { styles } from './index.styles';
import { CardSelectProps } from './index.types';

function CardSelect(props: CardSelectProps) {
  function onPlayerSelect() {
    props.onSelect?.();
  }

  return (
    <TouchableNativeFeedback disabled={props.disabled} onPress={onPlayerSelect}>
      <View style={[styles.container, props.disabled && styles.disabled]}>
        {props.icon}
        <Text style={styles.title}>{props.text}</Text>
        <Check checked={props.selected} />
      </View>
    </TouchableNativeFeedback>
  );
}

export default CardSelect;
