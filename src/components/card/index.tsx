import {
  Dimensions,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  VirtualizedListProps,
} from 'react-native';
import { Image } from 'expo-image';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Button from 'components/button';
import { BASE_PADDING, COLORS } from 'themes/constants';
import { useFonts } from 'expo-font';
import { TYPOGRAPHY } from 'themes/constants';
import SvgComponent from 'assets/icons/farme';
import { Stack } from 'expo-router';
import CustomBackButton from 'components/button-back';
import CastleIcon from 'assets/icons/castle';
import { FlatList } from 'react-native-gesture-handler';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { SvgProps } from 'react-native-svg';
import CastleRiverIcon from 'assets/icons/castle-river';
import CathedralIcon from 'assets/icons/cathedral';
import BuilderAndTraderIcon from 'assets/icons/builder-and-trader';
import DragonIcon from 'assets/icons/dragon';
import { styles } from './index.styles';
const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

export function Card(props: { text: string; icon: JSX.Element | undefined }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity onPress={() => setSelected((prev) => !prev)}>
      <View
        style={[
          styles.outerContainer,
          isSelected && styles.cardContainerHighlight,
        ]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{props.text}</Text>
            {props.icon}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
