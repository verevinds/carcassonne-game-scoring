import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { View, Text } from 'react-native';

import { styles } from './index.styles';

const Button = (props: LinkProps): JSX.Element => {
  return (
    <Link {...props} style={[styles.button, props.style]}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.children ?? 'Get started'}</Text>
      </View>
    </Link>
  );
};

export default Button;
