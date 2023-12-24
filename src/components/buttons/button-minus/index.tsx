import { TouchableOpacity } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import MinusIcon from 'assets/icons/minus';
import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

const ButtonMinus = (props: GenericTouchableProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <MinusIcon stroke={COLORS.SECONDARY_500} width={15} />
    </TouchableOpacity>
  );
};

export default ButtonMinus;
