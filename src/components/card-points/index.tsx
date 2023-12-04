import { useState } from 'react';

import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MinusIcon from 'assets/icons/minus';
import PlusIcon from 'assets/icons/plus';
import ShieldIcon from 'assets/icons/shield';
import ModalPicker from 'components/picker-modal';
import { PLAYER_COLORS } from 'themes/constants';

import { styles } from './index.styles';
import { CardPointsProps } from './index.types';

function CardPoints({
  feature,
  title,
  description,
  icon,
  LayoutProps,
  player,
}: CardPointsProps) {
  const [pickerVisible, setPickerVisible] = useState(false);
  const isButtons = LayoutProps?.withShild;
  const isFinishGame = Boolean(LayoutProps?.withIndicator);
  function getCountShields() {
    if (feature && 'shield' in feature && 'shieldIncomplete' in feature) {
      if (isFinishGame) return feature.shieldIncomplete;
      return feature.shield;
    }
    return 0;
  }
  const countShields = getCountShields();

  function togglePicker() {
    setPickerVisible((prev) => !prev);
  }
  function onValueChange(val: number) {
    if (feature && 'setShield' in feature) {
      if (isFinishGame) return feature.setShieldIncomplete(val);
      feature.setShield(val);
    }
  }
  function onMinusPress() {
    if (isFinishGame) return feature?.minusIncomplete();
    feature?.minus();
  }
  function onPlusPress() {
    if (isFinishGame) return feature?.plusIncomplete();
    feature?.plus();
  }

  return (
    <View style={styles.container}>
      {isFinishGame ? (
        <View
          style={[
            styles.indicator,
            { backgroundColor: PLAYER_COLORS[player.name] },
          ]}
        />
      ) : null}
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
