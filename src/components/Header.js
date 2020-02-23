import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.title}>Paw Print</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 15
  },
  logo: {
    height: 75,
    width: 75
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    color: "#846d63",
    fontWeight: "bold"
  }
});
