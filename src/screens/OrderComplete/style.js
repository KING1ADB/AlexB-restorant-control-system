import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blackShadow,
  },
  msgContainer: {
    backgroundColor: COLORS.white,
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  textCont: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
  },
  text1: {
    fontSize: 18,
    color: COLORS.green,
    fontWeight: "semibold",
  },
  text2: {
    fontSize: 15,
    color: COLORS.green,
  },
});
