import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageContainer: {
    width: "100%",
    height: height / 3,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textCont: {
    alignItems: "center",
  },
  textWrapper: {
    marginVertical: 20,
  },
  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    // paddingBottom: 10,
    fontWeight: "bold",
  },
  textTitlesm: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 2,
  },
  textDesc: {
    lineHeight: 20,
  },
  forgotPwdWrapper: {
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  forgotPwd: {
    color: COLORS.blue,
    fontWeight: 600,
    fontSize: 15,
  },
  signInWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginVertical: 12,
    overflow: "hidden",
  },
  signInDivider: {
    width: "33%",
    height: 2,
    backgroundColor: "#ccc",
  },
  signInText: {
    fontSize: 15,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 11,
    marginTop: 10,
  },
  linkImage: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },
  linkText: {
    fontSize: 15,
    fontWeight: 400,
  },
  signupContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signupWrapper: {
    flexDirection: "row",
  },
  signupText: {
    fontSize: 15,
  },
});
