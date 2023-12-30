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
        <Check checked={props.selected} />
        <Text style={styles.title}>{props.text}</Text>
        {props.icon}
      </View>
    </TouchableNativeFeedback>
  );
}

export default CardSelect;
