import { StyleSheet } from 'react-native';

import { TYPOGRAPHY, COLORS } from 'themes/constants';

export const styles = StyleSheet.create({
  disabled: { opacity: 0.5 },
  cardTitle: {
    ...TYPOGRAPHY.SUBTITLE_1,
    maxWidth: 220,
  },
  cardContainerHighlight: {
    backgroundColor: COLORS.SECONDARY_80,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  outerContainer: {
    maxWidth: 350,
    height: 50,
    borderRadius: 10,
    padding: 2,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLORS.BACKGROUND_95,
    paddingHorizontal: 20,
    borderRadius: 8,
    padding: 4,
  },
  container: {
    backgroundColor: COLORS.BACKGROUND_95,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: COLORS.BACKGROUND_85,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  main: {
    padding: 0,
    margin: 0,
  },
  title: {
    ...TYPOGRAPHY.HEADING_1,
  },
  subtitle: {
    ...TYPOGRAPHY.HEADING_2,
  },
  svgContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
