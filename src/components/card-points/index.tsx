import { useState } from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MinusIcon from 'assets/icons/minus';
import PlusIcon from 'assets/icons/plus';
import ShieldIcon from 'assets/icons/shield';
import ModalPicker from 'components/picker-modal';

import { styles } from './index.styles';

function CardPoints({
  title,
  description,
  points,
  icon,
  LayoutProps,
}: {
  title: string | undefined;
  description: string | undefined;
  points: number;
  icon: JSX.Element;
  LayoutProps?: { withShild?: boolean };
}) {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [count, setCount] = useState(0);

  const isButtons = LayoutProps?.withShild;

  function togglePicker() {
    setPickerVisible((prev) => !prev);
  }
  function onMinusPress() {
    return setCount((prev) => (prev - 1 < 0 ? prev : prev - 1));
  }
  function onPlusPress() {
    return setCount((prev) => prev + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.points}>
            points: {count * points + selectedValue * points}
          </Text>
        </View>
        <Text style={styles.position}>{description}</Text>
        <View
          style={[styles.navigation, isButtons && styles.multipleNavigation]}
        >
          {LayoutProps?.withShild ? (
            <TouchableOpacity onPress={togglePicker}>
              <View style={styles.shield}>
                <Text style={styles.shieldText}>
                  {selectedValue.toString().padStart(2, '0')}
                </Text>
                <ShieldIcon />
                <ModalPicker
                  isOpen={pickerVisible}
                  value={selectedValue}
                  onClose={togglePicker}
                  onValueChange={setSelectedValue}
                />
              </View>
            </TouchableOpacity>
          ) : null}
          <View style={styles.calculator}>
            <TouchableOpacity onPress={onMinusPress}>
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={onPlusPress}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CardPoints;
