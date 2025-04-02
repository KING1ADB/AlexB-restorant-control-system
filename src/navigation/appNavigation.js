import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/Orders/OrderScreen";
import OrderDetailScreen from "../screens/OrderDetails/OrderDetailScreen";
import OrderCompleteScreen from "../screens/OrderComplete/OrderCompleteScreen";
import DeliveredOrdersScreen from "../screens/DeliveredOrders/DeliveredOrdersScreen";
import DeclinedOrdersScreen from "../screens/DeclinedOrders/DeclinedOrdersScreen";
import { listenToOrders } from "../fakers"; // Import the function to listen to orders

export default function AppNavigation() {
  const AppNav = createNativeStackNavigator();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToOrders((fetchedOrders) => {
      setOrders(fetchedOrders);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppNav.Navigator>
      <AppNav.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          headerTitle: "Current Orders",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <AppNav.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          headerTitle: "Order Details",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <AppNav.Screen
        name="OrderComplete"
        component={OrderCompleteScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppNav.Screen
        name="DeliveredOrders"
        children={() => <DeliveredOrdersScreen orders={orders} />} // Pass orders as props
        options={{
          headerTitle: "Delivered Orders",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <AppNav.Screen
        name="DeclinedOrders"
        component={DeclinedOrdersScreen}
        options={{
          headerTitle: "Declined Orders",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </AppNav.Navigator>
  );
}