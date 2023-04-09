import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.GREEN_BUTTON,
    width: '100%',
    height: 92,
    borderRadius: 30,
  },
  button: {
    color: "#F6F6F6",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 22,
    lineHeight: 30,
  }
});