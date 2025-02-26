import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.buttonContainer,
        {
          paddingVertical:
            props.paddingVtl || styles.buttonContainer.paddingVertical,
        },
        { ...props.style },
      ]}
      activeOpacity={0.5}
    >
      <Text style={[styles.buttonText, { ...props.textStyle }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "semibold",
  },
});

export default CustomButton;

export const ActionButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        style.buttonContainer,
        {
          backgroundColor:
            props.bgColor || style.buttonContainer.backgroundColor,
        },
        { ...props.style },
      ]}
      activeOpacity={0.5}
    >
      <Text style={[style.buttonText, { ...props.textStyle }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: "semibold",
  },
});
