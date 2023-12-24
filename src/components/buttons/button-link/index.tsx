import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { View, Text, GestureResponderEvent } from 'react-native';

import ArrowStick from 'assets/icons/arrow-stick';
import Hint from 'components/hint';

import messages from './index.messages';
import { styles } from './index.styles';

const ButtonLink = (props: LinkProps & { hint?: string }): JSX.Element => {
  function handlePress(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    props.onPress?.(e);
  }
  return (
    <Hint disabled={!props.disabled} text={props.hint ?? ''}>
      <Link {...props} style={[props.style]} onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {props.children ?? messages.default}
            </Text>
            {props.children ? null : (
              <View style={styles.icon}>
                <ArrowStick />
              </View>
            )}
          </View>
        </View>
      </Link>
    </Hint>
  );
};

export default ButtonLink;
