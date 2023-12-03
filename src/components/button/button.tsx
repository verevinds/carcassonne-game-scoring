import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { styles } from './button.styles';
import { View, Text } from 'react-native';

const Button = (props: LinkProps) => {
  return (
    <Link {...props} style={[styles.button, props.style]}>
      <View style={styles.container}>
        <Text style={styles.text}>Get started</Text>
      </View>
    </Link>
  );
};

export default Button;
