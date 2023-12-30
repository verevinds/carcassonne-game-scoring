import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './index.styles';
import { CardSelectProps } from './index.types';

function CardSelect(props: CardSelectProps) {
  function onPlayerSelect() {
    props.onSelect?.();
  }

  return (
    <TouchableNativeFeedback disabled={props.disabled} onPress={onPlayerSelect}>
      <View
        style={[
          styles.container,
          props.disabled && styles.disabled,
          props.selected && styles.selected,
        ]}
      >
        {props.icon}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.text}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

export default CardSelect;
