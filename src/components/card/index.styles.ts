import { StyleSheet } from "react-native";
import { TYPOGRAPHY, COLORS } from 'themes/constants';

export const styles = StyleSheet.create({
  cardTitle: {
    ...TYPOGRAPHY.SUBTITLE_1,
    width: 220,
    // backgroundColor: '#0604EE',
  },
  cardContainerHighlight: {
    backgroundColor: '#A87257',
  },
  // cardContentHighlight: {
  //   padding: -4,
  // },
  cardContent: {
    // backgroundColor: '#0DE9DE',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  outerContainer: {
    width: 350,
    height: 100,
    padding: 4,
    backgroundColor: '#F6F4EE',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: COLORS.SHADOW_1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F4EE',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 20,
    // backgroundColor: '#EDE9DE',
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
  body: {
    // backgroundColor: '#0604EE',
  },
});
