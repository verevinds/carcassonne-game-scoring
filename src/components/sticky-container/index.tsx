import { PropsWithChildren } from 'react';

import { observer } from 'mobx-react';
import { View } from 'react-native';

import { styles } from './index.styles';

function StickyContainer({ children }: PropsWithChildren<{}>) {
  return <View style={styles.stickyButton}>{children}</View>;
}

export default observer(StickyContainer);
