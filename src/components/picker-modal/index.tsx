import { Modal, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from 'react-native-wheel-pick';

import messages from './index.messages';
import { styles } from './index.styles';

function ModalPicker({
  isOpen,
  onClose,
  onValueChange,
  value,
  text,
}: {
  isOpen: boolean;
  onClose: () => void;
  onValueChange: (value: number) => void;
  value: number;
  text: string;
}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <TouchableOpacity style={styles.title} onPress={onClose}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.done}>{messages.done}</Text>
          </TouchableOpacity>
          <Picker
            pickerData={Array.from({ length: 100 }, (_, i) => i)}
            selectedValue={value}
            style={styles.picker}
            onValueChange={onValueChange}
          />
        </View>
      </View>
    </Modal>
  );
}
export default ModalPicker;
