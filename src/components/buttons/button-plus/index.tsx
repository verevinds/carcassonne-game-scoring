import { TouchableOpacity } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import PlusIcon from 'assets/icons/plus';
import { COLORS } from 'themes/constants';

import { styles } from './index.styles';

const ButtonPlus = (props: GenericTouchableProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <PlusIcon stroke={COLORS.BACKGROUND_50} width={15} />
    </TouchableOpacity>
  );
};

export default ButtonPlus;
