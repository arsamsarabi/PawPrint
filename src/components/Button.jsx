import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Button = ({ text, icon, onClick, mode }) => {
  const styles = (el) => {
    switch (mode) {
      case "Large":
        return largeBtnStyles[el];
      case "Icon":
        return iconBtnStyles[el];
      default:
        return "";
    }
  };
  return (
    <TouchableOpacity onPress={onClick} style={styles("actionBtn")}>
      <Icon name={icon} size={24} color="#846d63" />
      <Text style={styles("btnText")}>{text}</Text>
    </TouchableOpacity>
  );
};

const iconBtnStyles = StyleSheet.create({
  actionBtn: {
    alignItems: "center",
    color: "#846d63",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 25
  },
  btnText: {
    color: "#846d63",
    fontSize: 16,
    marginLeft: 5
  }
});

const largeBtnStyles = StyleSheet.create({
  actionBtn: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#cbc4b8",
    flexDirection: "row",
    height: 60,
    justifyContent: "center"
  },
  btnText: {
    color: "#846d63",
    fontSize: 24,
    marginLeft: 20
  }
});
