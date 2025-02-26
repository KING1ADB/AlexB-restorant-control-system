import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { ActionButton } from "./CustomButton";

export default function OrderCard({ item, navigation }) {
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.5}
      onPress={() => navigation.navigate("OrderDetail", { item: item })}
    >
      {/* Change this line to display the displayNumber */}
      <Text style={style.label}>{item.displayNumber}</Text> {/* Display number here */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={style.topContainer}>
          <View>
            <Text style={style.title}>{item.name}</Text>
            <Text style={style.smallTxt}>{item.date}</Text>
            <Text style={style.smallTxt}>{item.time}</Text>
          </View>
          <Text style={style.status}>{item.status}</Text>
        </View>
        <Text style={style.table}>Table {item.table}</Text>
        {item.status === "pending" && (
          <View style={style.btnContainer}>
            <ActionButton
              title={"Accept"}
              style={style.button}
              bgColor={COLORS.green}
              onPress={() => navigation.navigate("DeliveredOrders")}
            />
            <ActionButton
              title={"Decline"}
              style={style.button}
              bgColor={COLORS.red}
              onPress={() =>
                navigation.navigate("DeclinedOrders", { param: item })
              }
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
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
    fontWeight: "500", // Use string for consistency
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
});