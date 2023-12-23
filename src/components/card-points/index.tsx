import { useState } from 'react';

import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EllipsisIcon from 'assets/icons/ellipsis';
import MinusIcon from 'assets/icons/minus';
import PlusIcon from 'assets/icons/plus';
import ModalPicker from 'components/picker-modal';
import { COLORS, PLAYER_COLORS } from 'themes/constants';

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
  const isFinishGame = Boolean(LayoutProps?.isFinishGame);
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
  function onValueChange(val: number) {
    if (feature && 'setShield' in feature) {
      if (isFinishGame) return feature.setShieldIncomplete(val);
      feature.setShield(val);
    }
  }
  function onMinusPress() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (isFinishGame) return feature?.minusIncomplete();
    feature?.minus();
  }
  function onPlusPress() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (isFinishGame) return feature?.plusIncomplete();
    feature?.plus();
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          { backgroundColor: PLAYER_COLORS[player.name] },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <View
            style={{ flexDirection: 'row', position: 'absolute', right: 0 }}
          >
            <Text style={styles.count}>counts: {feature?.count ?? 0}</Text>
            <Text style={styles.points}>points: {feature?.points ?? 0}</Text>
          </View>

          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={[styles.navigation, isButtons && styles.multipleNavigation]}>
        {LayoutProps?.withShild ? (
          <TouchableOpacity
            style={[styles.button, styles.ellipsisButton]}
            onPress={togglePicker}
          >
            <EllipsisIcon stroke={COLORS.BACKGROUND_50} width={20} />
            <ModalPicker
              isOpen={pickerVisible}
              text="Select count shields"
              value={countShields}
              onClose={togglePicker}
              onValueChange={onValueChange}
            />
          </TouchableOpacity>
        ) : null}
        <View style={styles.calculator}>
          <TouchableOpacity
            style={[styles.button, styles.minusButton]}
            onPress={onMinusPress}
          >
            <MinusIcon stroke={COLORS.SECONDARY_500} width={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.plusButton]}
            onPress={onPlusPress}
          >
            <PlusIcon stroke={COLORS.BACKGROUND_50} width={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default observer(CardPoints);
