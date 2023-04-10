import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
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
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80
  },
  title: {
    color: THEME.COLORS.GRAY[200],
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 30,
    lineHeight: 41,
    textTransform: "capitalize",
    marginBottom: 22,
  },
  subTitle: {
    color: THEME.COLORS.GRAY[350],
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 12,
    lineHeight: 16,
    textTransform: "capitalize",
  },
  input: {
    color: THEME.COLORS.GRAY[400],
  },
  inputContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 40,
    gap: 20,
  },
  inputContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    borderWidth: 2,
    borderColor: THEME.COLORS.GRAY[700],
    borderRadius: 32,
    paddingHorizontal: 32,
  },
  inputContentFocused: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    borderWidth: 2,
    borderColor: THEME.COLORS.GREEN_BUTTON,
    borderRadius: 32,
    paddingHorizontal: 32,
  },
  recovery: {
    color: THEME.COLORS.GRAY[600],
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingHorizontal: 15,
    marginBottom: 22
  },
  footerText: {
    color: THEME.COLORS.GRAY[400],
    alignSelf: "center",
  }
});