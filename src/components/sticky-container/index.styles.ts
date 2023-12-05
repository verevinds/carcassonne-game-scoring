import { StyleSheet } from 'react-native';

import { SHADOW_2 } from 'themes/constants';

export const styles = StyleSheet.create({
  stickyButton: {
    position: 'absolute',
    bottom: 0,
    ...SHADOW_2,
    alignSelf: 'center',
  },
});
