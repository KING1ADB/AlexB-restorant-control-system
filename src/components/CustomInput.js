import { Text, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputCont}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={COLORS.input}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: COLORS.black,
    fontSize: 17,
    fontWeight: 500,
    paddingBottom: 5,
  },
  inputCont: {
    flexDirection: "row",
    backgroundColor: COLORS.gray,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
});
