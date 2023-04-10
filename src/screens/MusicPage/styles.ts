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
  albumCover: {
    width: 335,
    height: 370,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10
  },
  musicDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 17
  },
  musicName: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 20,
    lineHeight: 28,
    color: THEME.COLORS.GRAY[400]
  },
  artist: {
    color: THEME.COLORS.GRAY[650]
  },
  player: {
    width: '100%',
    marginTop: 48
  },
  playerTimes: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  controllers: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 40
  },
  pause: {
    width: 72,
    height: 72,
    backgroundColor: THEME.COLORS.GREEN_BUTTON,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});