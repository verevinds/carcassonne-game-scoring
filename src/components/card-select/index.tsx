import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './index.styles';
import { CardSelectProps } from './index.types';

function CardSelect(props: CardSelectProps) {
  function onPlayerSelect() {
    props.onSelect?.();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={props.disabled} onPress={onPlayerSelect}>
        <View
          style={[
            styles.outerContainer,
            props.selected && styles.cardContainerHighlight,
            props.disabled && styles.disabled,
          ]}
        >
          <View style={styles.innerContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{props.text}</Text>
              {props.icon}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardSelect;
