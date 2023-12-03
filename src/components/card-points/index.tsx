import { useState } from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICityFeatureStore, IFeatureStore } from 'stores';

import MinusIcon from 'assets/icons/minus';
import PlusIcon from 'assets/icons/plus';
import ShieldIcon from 'assets/icons/shield';
import ModalPicker from 'components/picker-modal';

import { styles } from './index.styles';

function CardPoints({
  feature,
  title,
  description,
  icon,
  LayoutProps,
  onPlusPress,
  onMinusPress,
}: {
  feature: ICityFeatureStore | IFeatureStore | undefined;
  title: string | undefined;
  description: string | undefined;
  icon: JSX.Element;
  LayoutProps?: { withShild?: boolean };
  onPlusPress: () => void;
  onMinusPress: () => void;
}) {
  const [pickerVisible, setPickerVisible] = useState(false);
  const isButtons = LayoutProps?.withShild;
  const countShields = feature && 'shield' in feature ? feature.shield : 0;

  function togglePicker() {
    setPickerVisible((prev) => !prev);
  }
  function onValueChange(val: number) {
    if (feature && 'setShield' in feature) feature.setShield(val);
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.points}>points: {feature?.points ?? 0}</Text>
        </View>
        <Text style={styles.position}>{description}</Text>
        <View
          style={[styles.navigation, isButtons && styles.multipleNavigation]}
        >
          {LayoutProps?.withShild ? (
            <TouchableOpacity onPress={togglePicker}>
              <View style={styles.shield}>
                <Text style={styles.shieldText}>
                  {countShields.toString().padStart(2, '0')}
                </Text>
                <ShieldIcon />
                <ModalPicker
                  isOpen={pickerVisible}
                  value={countShields}
                  onClose={togglePicker}
                  onValueChange={onValueChange}
                />
              </View>
            </TouchableOpacity>
          ) : null}
          <View style={styles.calculator}>
            <TouchableOpacity disabled={!feature?.count} onPress={onMinusPress}>
              <MinusIcon disabled={!feature?.count} />
            </TouchableOpacity>
            <Text style={styles.count}>{feature?.count}</Text>
            <TouchableOpacity onPress={onPlusPress}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default observer(CardPoints);
