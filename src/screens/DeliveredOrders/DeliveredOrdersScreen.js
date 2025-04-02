import { View, Text, FlatList } from "react-native";
import React from "react";

export default function DeliveredOrdersScreen({ orders }) {
  // Safely handle undefined orders
  const completedOrders = Array.isArray(orders) ? orders.filter((item) => item.status === "completed") : [];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={completedOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}