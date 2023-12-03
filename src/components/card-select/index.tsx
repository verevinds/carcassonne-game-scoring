import { useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './index.styles';

export function Card(props: { text: string; icon: JSX.Element | undefined }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity onPress={() => setSelected((prev) => !prev)}>
      <View
        style={[
          styles.outerContainer,
          isSelected && styles.cardContainerHighlight,
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
  );
}
