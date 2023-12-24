import { Children } from 'react';

import { Modal as RNModal, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';
import { COLORS } from 'themes/constants';

import { useAnimationModal } from './index.hooks';
import { styles } from './index.styles';
import { ModalProps } from './index.types';

function Modal(props: ModalProps) {
  const { isOpen, gesture, fadeAnimationStyles, slideAnimationStyles } =
    useAnimationModal(props.isOpen, props.onClose);
  return (
    <RNModal transparent visible={isOpen} onRequestClose={props.onClose}>
      <GestureDetector gesture={gesture}>
        <View style={styles.container}>
          <Animated.View style={[styles.background, fadeAnimationStyles]} />
          <Animated.View style={[styles.body, slideAnimationStyles]}>
            <View style={styles.stick} />
            <View style={styles.contentContainer}>
              <Pattern />
              <LinearGradient
                startColor={COLORS.BACKGROUND_50}
                stopColor={COLORS.BACKGROUND_200}
              />
              <View style={styles.content}>
                {Children.map(props.children, (el) => el)}
              </View>
            </View>
          </Animated.View>
        </View>
      </GestureDetector>
    </RNModal>
  );
}

export default Modal;
