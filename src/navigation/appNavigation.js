import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from '@expo/vector-icons';
import OrderScreen from "../screens/Orders/OrderScreen";
import OrderDetailScreen from "../screens/OrderDetails/OrderDetailScreen";
import OrderCompleteScreen from "../screens/OrderComplete/OrderCompleteScreen";
import DeliveredOrdersScreen from "../screens/DeliveredOrders/DeliveredOrdersScreen";
import DeclinedOrdersScreen from "../screens/DeclinedOrders/DeclinedOrdersScreen";

export default function AppNavigation() {
  const AppNav = createNativeStackNavigator();
  const [menuVisible, setMenuVisible] = useState(false); // Menu visibility state

  return (
    <AppNav.Navigator>
      <AppNav.Screen
        name="Orders"
        component={OrderScreen}
        options={({ navigation }) => ({
          headerTitle: "Current Orders",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                <FontAwesome name="ellipsis-v" size={24} color="black" />
              </TouchableOpacity>
              {menuVisible && (
                <View style={styles.menu}>
                  <TouchableOpacity onPress={() => { navigation.navigate("DeliveredOrders"); setMenuVisible(false); }}>
                    <Text style={styles.menuItem}>Delivered Orders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { navigation.navigate("DeclinedOrders"); setMenuVisible(false); }}>
                    <Text style={styles.menuItem}>Declined Orders</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ),
        })}
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
        component={DeliveredOrdersScreen}
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

const styles = StyleSheet.create({
  menuContainer: {
    position: 'relative',
    marginRight: 15,
    zIndex: 500, // Ensure this is higher than the image's zIndex
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: 30, // Adjust this to position the menu correctly above the image
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 30, // Ensure it hovers above other elements
  },
  menuItem: {
    padding: 10,
    color: 'black',
  },
});