import {
  View,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants";
import { listenToOrders } from "../../fakers"; // Import the listener function
import OrderCard from "../../components/OrderCard";
import { styles } from "./style";

export default function OrderScreen({ navigation }) {
  const [orders, setOrders] = useState([]); // State to hold orders

  useEffect(() => {
    const unsubscribe = listenToOrders((fetchedOrders) => {
      setOrders(fetchedOrders);
    });

    return () => unsubscribe();
  }, []);

  // Function to generate display number
  const getDisplayNumber = (index) => {
    return (index + 1).toString().padStart(2, '0'); // Format as "01", "02", etc.
  };

  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/salad.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.orderContainer}>
        <FlatList
          data={orders}
          renderItem={({ item, index }) => (
            <OrderCard item={{ ...item, displayNumber: getDisplayNumber(index) }} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id} // Use document ID as key
        />
      </View>
    </ScrollView>
  );
}