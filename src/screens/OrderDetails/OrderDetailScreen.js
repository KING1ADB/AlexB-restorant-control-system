import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { styles } from "./style";

export default function OrderDetailScreen() {
  const route = useRoute();
  const param = route.params.item; // Destructure the passed item
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/salad.jpg")}
      style={styles.imageContainer}
    >
      <View style={{ height: "30%", backgroundColor: "transparent" }} />
      <View style={styles.lower}>
        <ScrollView>
          <View style={styles.topContainer}>
            <View>
              <Text style={styles.title}>{param.name}</Text>
              <Text style={styles.description}>{param.description}</Text>
            </View>
            <View style={styles.durationContainer}>
              <FontAwesome name="clock-o" style={styles.clockIcon} />
              <Text style={styles.duration}>{param.duration}</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{param.price} FCFA</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" style={styles.starIcon} />
              <Text style={styles.duration}>({param.rating})</Text>
            </View>
          </View>
          <View style={styles.tableContainer}>
            <Text style={styles.table}>Table</Text>
            <Text style={styles.tableNum}>{param.table}</Text>
          </View>
          <View style={styles.addItemContainer}>
            <Text style={styles.table}>Additional Item(s)</Text>
            <View style={{ marginTop: 5 }}>
              <FlatList
                data={param.additionalItems} // Corrected property name
                keyExtractor={(item, index) => index.toString()} // Ensure unique keys
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <View style={styles.dot} />
                    <Text>{item.name}</Text>
                    <Text>( {item.qty} )</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <CustomButton
          title={"Confirm Delivery"}
          style={{ marginTop: 10, borderRadius: 50 }}
          onPress={() => navigation.navigate("OrderComplete")}
        />
      </View>
    </ImageBackground>
  );
}