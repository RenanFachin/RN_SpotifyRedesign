import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0C0C",
    alignItems: "center",
  },
  bgImage: {
    position: 'absolute'
  },
  content: {
    marginTop: 400,
    alignItems: "center",
    paddingHorizontal: 50
  },
  primary:{
    color: "#DADADA",
    fontSize: 25,
    lineHeight: 33,
    fontWeight: '700'
  },
  secondary:{
    color: "#797979",
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '400',
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40
  }
});