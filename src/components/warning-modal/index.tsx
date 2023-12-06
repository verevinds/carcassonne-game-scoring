import { Dimensions, Modal, Text, View } from 'react-native';
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
const { height, width } = Dimensions.get('window');

function WarningModal(props: WarningModalProps) {
  const { isOpen, gesture, fadeAnimationStyles, slideAnimationStyles } =
    useAnimationWarningModal(props.isOpen, props.onClose);

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
                endColor={COLORS.BACKGROUND_85}
                startColor={COLORS.BACKGROUND_95}
                viewBoxHeight={height * 0.4}
                viewBoxWidth={width}
                x1={-0.2}
                x2={0.45}
                y1={0.25}
                y2={0.9}
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
                    onPress={props.onConfirm}
                  >
                    <Text style={styles.buttonConfirmText}>
                      {messages['confirm']}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={props.onClose}
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
