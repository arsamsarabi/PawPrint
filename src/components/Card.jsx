import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground
} from "react-native";

export const Card = ({ name, age, breed, image }) => {
  const placeholderImage = require("../../assets/placeholder.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image || placeholderImage}
        style={styles.imageBg}
      >
        <View style={styles.footer}>
          <View style={styles.detail}>
            <Text style={styles.text}>{name || "Name: -"}</Text>
          </View>
          <View style={[styles.detail, styles.borders]}>
            <Text style={styles.text}>{`Age: ${age || "-"}`}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>{breed || "Breed: -"}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const CONTAINER_WIDTH = Dimensions.get("window").width - 60;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 30
  },
  imageBg: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH,
    justifyContent: "flex-end"
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#846d63c0",
    height: 50
  },
  detail: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  borders: {
    borderColor: "#cbc4b8",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 0
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ededed"
  }
});
