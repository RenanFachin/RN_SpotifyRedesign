import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  header: {
    marginTop: 60,
    marginLeft: 35
  },
  goBackButton: {
    width: 40,
    height: 40,
    backgroundColor: THEME.COLORS.BUTTON_CUSTOM,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  content: {
    position: 'absolute',
    width: "100%",
    alignItems: "center",
    marginTop: 150,
    paddingHorizontal: 35
  },
  primary: {
    color: THEME.COLORS.GRAY[200],
    fontSize: 26,
    lineHeight: 35,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginTop: 55,
    textTransform: 'capitalize'
  },
  secondary: {
    color: THEME.COLORS.GRAY[650],
    fontSize: 17,
    lineHeight: 23,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    marginTop: 21,
    textTransform: "capitalize"
  },
  contentButtons: {
    marginTop: 30,
    width: '100%',
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  register: {
    width: '55%',
  },
  signIn: {
    width: '30%',
    height: 92,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  signInText: {
    color: THEME.COLORS.GRAY[600],
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 19,
    lineHeight: 26,
  }
});