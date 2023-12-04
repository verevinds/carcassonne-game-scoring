import { useEffect, useRef, useState } from 'react';

import { Animated, Modal, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './index.styles';
function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }
    setDebouncedValue(value);
  }, [value]);

  return debouncedValue;
}
function WarningModal(props: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const slide = useRef(new Animated.Value(-600)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: props.isOpen ? 0.8 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [props.isOpen]);
  useEffect(() => {
    Animated.timing(slide, {
      toValue: props.isOpen ? 0 : -600,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [props.isOpen]);

  const isOpen = useDebounce(props.isOpen, 500);

  return (
    <Modal transparent visible={isOpen} onRequestClose={props.onClose}>
      <View style={styles.container}>
        <Animated.View style={{ ...styles.background, opacity: fade }} />
        <Animated.View style={{ ...styles.body, bottom: slide }}>
          <Text style={styles.title}>Game Reset</Text>
          <Text style={styles.description}>
            You are about to restart the game. This action will completely reset
            your current progress, including all achievements and saved data.
          </Text>
          <Text style={styles.question}>
            Please confirm that you want to start the game over.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonConfirm}
              onPress={props.onConfirm}
            >
              <Text style={styles.buttonConfirmText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={props.onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

export default WarningModal;
