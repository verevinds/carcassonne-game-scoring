import * as Haptics from 'expo-haptics';
import { observer } from 'mobx-react';
import { View } from 'react-native';

import ButtonMinus from 'components/buttons/button-minus';
import ButtonPlus from 'components/buttons/button-plus';
import CardPoints from 'components/card-points';

import { styles } from './index.styles';
import { FeatureProps } from './index.types';

function Feature({
  player,
  isFinishGame,
  feature,
  optionButton,
  ...rest
}: FeatureProps) {
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
    <CardPoints
      buttons={
        <>
          <View>{optionButton}</View>
          <View style={styles.calculator}>
            <ButtonMinus onPress={onMinusPress} />
            <ButtonPlus onPress={onPlusPress} />
          </View>
        </>
      }
      feature={feature}
      isFinishGame={isFinishGame}
      player={player}
      {...rest}
    />
  );
}

export default observer(Feature);
