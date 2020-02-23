import React, { useEffect } from "react";
import {
  Alert,
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  UPDATE_FORM_VALUE,
  EXIT_FORM,
  ADD_DOG,
  EDIT_DOG
} from "../store/actionTypes";

export const Form = () => {
  const { visibility, dog } = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const handleClose = () => {
    dispatch({
      type: EXIT_FORM
    });
  };

  const handleChange = (name, value) => {
    dispatch({
      type: UPDATE_FORM_VALUE,
      payload: {
        name,
        value
      }
    });
  };

  const handleConfirm = () => {
    if (!dog.name.length) {
      Alert.alert(
        "Error!",
        "Name is required!",
        [
          {
            text: "Back",
            onPress: null,
            style: "cancel"
          }
        ],
        { cancelable: true }
      );
    } else {
      dispatch({
        type: ADD_DOG,
        payload: dog
      });
      dispatch({
        type: EXIT_FORM
      });
    }
  };

  const handleUpdate = () => {
    dispatch({
      type: EDIT_DOG,
      payload: dog
    });
    dispatch({
      type: EXIT_FORM
    });
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if ("uri" in result) {
      handleChange("image", { uri: result.uri });
    }
  };

  const image = dog.image || require("../../assets/placeholder.jpg");

  const isEditMode = Boolean(dog.uuid);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visibility}
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <ImageBackground source={image} style={styles.image}>
                {!dog.image || isEditMode ? (
                  <TouchableOpacity
                    onPress={pickImage}
                    style={styles.imageButton}
                  >
                    <Text style={styles.imageButtonText}>
                      {isEditMode
                        ? "Tap here to change this image"
                        : "Pick an image from camera roll"}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  ""
                )}
              </ImageBackground>
              <Text style={styles.label}>What do we call this one?</Text>
              <TextInput
                style={styles.input}
                value={dog.name}
                onChangeText={value => handleChange("name", value)}
                placeholder="Enter a name"
                autoCorrect={false}
                autoFocus
                placeholderTextColor="#d2c1b6"
              />
              <Text style={styles.label}>
                {`How old is ${dog.name ? dog.name : "this dog"}?`}
              </Text>
              <TextInput
                style={styles.input}
                value={dog.age ? `${dog.age}` : ""}
                onChangeText={value => handleChange("age", value)}
                placeholder="Enter the age of the dog in years"
                placeholderTextColor="#d2c1b6"
                keyboardType="numeric"
                maxLength={2}
              />
              <Text style={styles.label}>What breed is the dog?</Text>
              <TextInput
                style={styles.input}
                value={dog.breed}
                onChangeText={value => handleChange("breed", value)}
                placeholder="What breed is the dog?"
                placeholderTextColor="#d2c1b6"
              />
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.button, styles.cancelBtn]}
                onPress={handleClose}
              >
                <FontAwesome name="times" size={24} color="#c0392bc0" />
                <Text style={[styles.btnText, styles.cancelText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmBtn]}
                onPress={isEditMode ? handleUpdate : handleConfirm}
              >
                <FontAwesome
                  name={isEditMode ? "check" : "plus"}
                  size={24}
                  color="#846d63"
                />
                <Text style={[styles.btnText, styles.confirmText]}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  label: {
    fontSize: 20,
    color: "#846d63",
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbc4b8",
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#846d63",
    marginBottom: 20
  },
  actions: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-around",
    marginTop: 25
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: (Dimensions.get("window").width / 100) * 40
  },
  confirmBtn: {
    backgroundColor: "#ededed9f"
  },
  cancelBtn: {
    backgroundColor: "#c0392b0f"
  },
  btnText: {
    fontSize: 24,
    marginLeft: 20
  },
  cancelText: {
    color: "#c0392bc0"
  },
  confirmText: {
    color: "#846d63"
  },
  chosenImage: {
    alignSelf: "stretch",
    height: 150
  },
  image: {
    alignSelf: "stretch",
    height: 150,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imageButton: {},
  imageButtonText: {
    backgroundColor: "#ffffffcf",
    color: "#846d63",
    padding: 15,
    fontSize: 18
  }
});
