import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../constants";
import { styles } from "./style";

export default function OrderCompleteScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor={COLORS.blackShadow}
        barStyle={"dark-content"}
      />
      <View style={styles.msgContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/correct.gif")}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.textCont}>
            <Text style={styles.text1}>Order Delivered</Text>
            <Text style={styles.text2}>Successfully!!!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
