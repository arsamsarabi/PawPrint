import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../components";
import { DogModal } from "./DogModal";
import { OPEN_DOG_MODAL } from "../store/actionTypes";

export const List = () => {
  const dogs = useSelector(state => state.dogs.myDogs);
  const dispatch = useDispatch();
  const handleClick = dog => {
    dispatch({
      type: OPEN_DOG_MODAL,
      payload: dog
    });
  };
  return (
    <View style={styles.container}>
      {dogs.map(dog => {
        const { uuid, name, breed, age, image } = dog;
        return (
          <TouchableOpacity key={uuid} onPress={() => handleClick(dog)}>
            <Card
              uuid={uuid}
              name={name}
              breed={breed}
              age={age}
              image={image}
            />
          </TouchableOpacity>
        );
      })}
      <DogModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    alignItems: "center"
  }
});
