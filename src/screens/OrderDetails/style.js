import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: height,
  },
  lower: {
    width: "100%",
    height: "60%",
    backgroundColor: COLORS.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
    color: COLORS.primary,
  },
  description: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  durationContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  clockIcon: {
    color: COLORS.lightGray,
    fontSize: 14,
  },
  duration: {
    fontSize: 12,
    color: COLORS.lightGray,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    color: COLORS.yellow,
    fontSize: 20,
    fontWeight: "500",
  },
  starIcon: {
    color: COLORS.yellow,
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  tableContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
    gap: 5,
  },
  table: {
    fontSize: 17,
    color: COLORS.primary,
    fontWeight: "500",
  },
  tableNum: {
    fontSize: 30,
    color: COLORS.yellow,
    fontWeight: "500",
  },
  addItemContainer: {
    marginTop: 10,
  },
  addItem: {
    color: COLORS.primary,
  },
  itemContainer: {
    marginLeft: 5,
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
    alignItems: "center",
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.black,
    borderRadius: "50%",
  },
});
