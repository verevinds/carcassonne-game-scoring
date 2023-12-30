import * as Haptics from 'expo-haptics';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Modal from 'components/modal';

import messages from './index.messages';
import { styles } from './index.styles';
import { WarningModalProps } from './index.types';

function WarningModal(props: WarningModalProps) {
  function hanldeClose() {
    props.onClose();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
  function handleConfirm() {
    props.onConfirm();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Game Reset</Text>
        <Text style={styles.description}>{messages['description']}</Text>
        <Text style={styles.question}>{messages['question']}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonConfirm}
            onPress={handleConfirm}
          >
            <Text style={styles.buttonConfirmText}>{messages['confirm']}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel} onPress={hanldeClose}>
            <Text style={styles.buttonText}>{messages['cancel']}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default WarningModal;
