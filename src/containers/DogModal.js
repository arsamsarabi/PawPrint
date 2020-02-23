import React from "react";
import {
  Alert,
  View,
  Modal,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  CLOSE_DOG_MODAL,
  REMOVE_DOG,
  OPEN_EDIT_FORM
} from "../store/actionTypes";
import { Button } from "../components";

export const DogModal = () => {
  const { visibility, dog } = useSelector(state => state.dogView);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: CLOSE_DOG_MODAL
    });
  };

  const handleRemove = () => {
    Alert.alert(
      "Are you sure?",
      "This dog record will be deleted forever!",
      [
        {
          text: "Delete",
          onPress: () => {
            dispatch({
              type: REMOVE_DOG,
              payload: dog.uuid
            });
            handleClose();
          },
          style: "destructive"
        },
        {
          text: "Cancel",
          onPress: null,
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  const handleEdit = () => {
    dispatch({
      type: OPEN_EDIT_FORM,
      payload: dog
    });
    handleClose();
  };

  if (!dog) return null;

  const image = dog.image || require("../../assets/placeholder.jpg");

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visibility}
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.name}>{dog.name}</Text>
              <View style={styles.actions}>
                <Button
                  text="Edit"
                  icon="edit"
                  onClick={handleEdit}
                  mode="Icon"
                />
                <Button
                  text="Delete"
                  icon="trash-o"
                  onClick={handleRemove}
                  mode="Icon"
                />
              </View>
              <Text style={styles.detail}>{`Age: ${dog.age || "-"}`}</Text>
              <Text style={styles.detail}>{`Breed: ${dog.breed || "-"}`}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Button
        text="back"
        icon="arrow-left"
        onClick={handleClose}
        mode="Large"
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  image: {
    width: Dimensions.get("window").width,
    height: 250
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between"
  },
  name: {
    fontSize: 32,
    color: "#846d63",
    fontWeight: "bold"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  detail: {
    fontSize: 18,
    marginTop: 15,
    color: "#846d63df",
    marginRight: 15
  }
});
