import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const style = StyleSheet.create({
  screen: {
    paddingVertical: 10,
  },
  container: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: COLORS.lightBlue,
    flexDirection: "row",
    gap: 15,
  },
  label: {
    color: COLORS.lightGray,
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  status: {
    color: COLORS.lightGreen,
  },
  smallTxt: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  table: {
    fontSize: 16,
    color: COLORS.lightGreen,
    textAlign: "center",
    marginTop: 8,
  },
});
