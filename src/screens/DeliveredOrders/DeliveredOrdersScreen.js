import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { orders } from "../../fakers";
import { style } from "./style";

export default function DeliveredOrdersScreen() {
  const completedOrders = orders.filter((item) => item.status === "completed");

  return (
    <View style={style.screen}>
      <FlatList
        data={completedOrders}
        style={{ paddingHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={style.container} activeOpacity={0.5}>
            <Text style={style.label}>{index + 1}</Text>
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
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
