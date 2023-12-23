import * as Haptics from 'expo-haptics';
import { Modal, Text, View } from 'react-native';
import {
  GestureDetector,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { LinearGradient } from 'components/gradient';
import Pattern from 'components/pattern';
import { COLORS } from 'themes/constants';

import { useAnimationWarningModal } from './index.hooks';
import messages from './index.messages';
import { styles } from './index.styles';
import { WarningModalProps } from './index.types';

function WarningModal(props: WarningModalProps) {
  const { isOpen, gesture, fadeAnimationStyles, slideAnimationStyles } =
    useAnimationWarningModal(props.isOpen, props.onClose);

  function hanldeClose() {
    props.onClose();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
  function handleConfirm() {
    props.onConfirm();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
  return (
    <Modal transparent visible={isOpen} onRequestClose={props.onClose}>
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
                <Text style={styles.title}>Game Reset</Text>
                <Text style={styles.description}>
                  {messages['description']}
                </Text>
                <Text style={styles.question}>{messages['question']}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={handleConfirm}
                  >
                    <Text style={styles.buttonConfirmText}>
                      {messages['confirm']}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={hanldeClose}
                  >
                    <Text style={styles.buttonText}>{messages['cancel']}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </GestureDetector>
    </Modal>
  );
}

export default WarningModal;
