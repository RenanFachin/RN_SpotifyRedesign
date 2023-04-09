import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    alignItems: "center",
  },
  bgImage: {
    position: 'absolute'
  },
  content: {
    width: '100%',
    marginTop: 400,
    alignItems: "center",
    paddingHorizontal: 50
  },
  primary:{
    color: THEME.COLORS.GRAY[450],
    fontSize: 25,
    lineHeight: 33,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  secondary:{
    color: THEME.COLORS.GRAY[700],
    fontSize: 17,
    lineHeight: 23,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40
  }
});