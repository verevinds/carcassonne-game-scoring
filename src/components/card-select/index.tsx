import { Text, TouchableOpacity } from 'react-native';

import Check from 'assets/icons/check';

import { styles } from './index.styles';
import { CardSelectProps } from './index.types';

function CardSelect(props: CardSelectProps) {
  function onPlayerSelect() {
    props.onSelect?.();
  }

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.container, props.disabled && styles.disabled]}
      onPress={onPlayerSelect}
    >
      <Check checked={props.selected} />
      <Text style={styles.title}>{props.text}</Text>
      {props.icon}
    </TouchableOpacity>
  );
}

export default CardSelect;
